# Portfolio

This project contains a simple image gallery.

## Image compression

A script `compress_images.js` is provided to generate compressed versions of all images in this folder. It uses the [sharp](https://github.com/lovell/sharp) library.

### Usage

1. Install dependencies (requires Node.js):
   ```
   npm install sharp
   ```
2. Run the script:
   ```
   node compress_images.js
   ```
   Compressed images will be placed in the `compressed` directory.

Update your HTML/JS to reference files in `compressed` if you want to serve the optimized images.
