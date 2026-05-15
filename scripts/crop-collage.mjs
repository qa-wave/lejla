import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "gallery");

fs.mkdirSync(outDir, { recursive: true });

// Copy the WhatsApp selfie directly
await sharp(path.join(root, "pictures", "WhatsApp Image 2026-05-13 at 18.05.33.jpeg"))
  .resize(800, 1200, { fit: "cover" })
  .jpeg({ quality: 85 })
  .toFile(path.join(outDir, "photo-1.jpg"));

console.log("Cropped: photo-1.jpg (WhatsApp selfie)");

// Crop the larger collage (8.24.00) - 1884x986
// Top row: 5 photos, bottom row: 3 photos
// Layout analysis from the image:
// - Small gap/padding between images (~8px)
// - Top row height ~490px, starts at ~0
// - Bottom row height ~480px, starts at ~500

const src = path.join(root, "pictures", "Screenshot 2026-05-15 at 8.24.00.png");
const img = sharp(src);
const meta = await img.metadata();
console.log(`Collage dimensions: ${meta.width}x${meta.height}`);

// Top row - 5 images, roughly equal width
const topH = 475;
const topY = 4;
const topW = Math.floor(meta.width / 5);
const topCrops = [
  { left: 8, top: topY, width: topW - 16, height: topH },
  { left: topW + 4, top: topY, width: topW - 12, height: topH },
  { left: topW * 2 + 4, top: topY, width: topW - 12, height: topH },
  { left: topW * 3 + 4, top: topY, width: topW - 12, height: topH },
  { left: topW * 4 + 4, top: topY, width: topW - 16, height: topH },
];

// Bottom row - 3 images (left narrow, center wide, right narrow)
const botY = topH + 16;
const botH = meta.height - botY - 8;
const botCrops = [
  { left: 8, top: botY, width: 450, height: botH },
  { left: 466, top: botY, width: 750, height: botH },
  { left: 1224, top: botY, width: meta.width - 1232, height: botH },
];

let idx = 2;
for (const crop of [...topCrops, ...botCrops]) {
  // Clamp to image bounds
  const w = Math.min(crop.width, meta.width - crop.left);
  const h = Math.min(crop.height, meta.height - crop.top);
  if (w < 50 || h < 50) {
    console.log(`Skipping photo-${idx}.jpg (too small: ${w}x${h})`);
    idx++;
    continue;
  }
  try {
    await sharp(src)
      .extract({ left: crop.left, top: crop.top, width: w, height: h })
      .resize(600, 800, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(path.join(outDir, `photo-${idx}.jpg`));
    console.log(`Cropped: photo-${idx}.jpg (${w}x${h})`);
  } catch (e) {
    console.error(`Error cropping photo-${idx}: ${e.message}`);
  }
  idx++;
}

console.log("\nDone! Total photos:", idx - 1);
