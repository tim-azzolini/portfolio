const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Please install the "sharp" package to run this script: npm install sharp');
  process.exit(1);
}

const sourceDir = __dirname;
const outputDir = path.join(__dirname, 'compressed');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const supported = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']);
fs.readdirSync(sourceDir).forEach(file => {
  const ext = path.extname(file);
  if (!supported.has(ext)) return;
  const inputPath = path.join(sourceDir, file);
  const outputPath = path.join(outputDir, file.replace(/\.(JPE?G|PNG)$/i, '.jpg'));
  sharp(inputPath)
    .jpeg({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log('Compressed', file))
    .catch(err => console.error('Error compressing', file, err));
});
