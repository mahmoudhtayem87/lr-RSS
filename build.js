const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/lr-rss/runtime.js',
    './dist/lr-rss/polyfills.js',
    './dist/lr-rss/main.js'
  ];
  await fs.ensureDir('lr-rss-build');
  await fs.removeSync('lr-rss-build/lr-rss.js');
  await concat(files, 'lr-rss-build/lr-rss.js');
  await fs.copy('./src/styles.css', 'lr-rss-build/styles.css');
})();
