import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "gallery");

// Use the smaller collage (8.23.50) for bottom row - better proportions
const src = path.join(root, "pictures", "Screenshot 2026-05-15 at 8.23.50.png");
const meta = await sharp(src).metadata();
console.log(`Collage 8.23.50: ${meta.width}x${meta.height}`);

// Bottom row in 8.23.50 (1530x922)
// Bottom starts around y=488, height ~430
const botY = 490;
const botH = meta.height - botY - 6;

const crops = [
  { name: "photo-7.jpg", left: 6, top: botY, width: 340, height: botH },
  { name: "photo-8.jpg", left: 354, top: botY, width: 580, height: botH },
  { name: "photo-9.jpg", left: 942, top: botY, width: 340, height: botH },
];

for (const crop of crops) {
  const w = Math.min(crop.width, meta.width - crop.left);
  const h = Math.min(crop.height, meta.height - crop.top);
  try {
    await sharp(src)
      .extract({ left: crop.left, top: crop.top, width: w, height: h })
      .jpeg({ quality: 85 })
      .toFile(path.join(outDir, crop.name));
    console.log(`Cropped: ${crop.name} (${w}x${h})`);
  } catch (e) {
    console.error(`Error: ${crop.name}: ${e.message}`);
  }
}
