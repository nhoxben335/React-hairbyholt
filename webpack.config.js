const webpack = require('webpack');
const child_process = require('child_process');
let stdout = child_process.execSync("find . -regex  '.*\\(png\\|jgeg\\)$'", {encoding: 'utf8'});
let files = stdout.split('\n');

module.exports = {
   plugins : [
      new webpack.DefinePlugin({
         IMAGES: JSON.stringify(files),
      }),
   ],
} 