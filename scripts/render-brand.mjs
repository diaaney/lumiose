import sharp from 'sharp';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';

const dir = 'public/brand';
const files = (await readdir(dir)).filter((f) => f.endsWith('.svg'));

for (const file of files) {
  const svg = await readFile(join(dir, file));
  const out = join(dir, basename(file, extname(file)) + '.png');
  await sharp(svg, { density: 300 })
    .png({ compressionLevel: 9, quality: 95 })
    .toFile(out);
  console.log('rendered', out);
}
