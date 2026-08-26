import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const docsPath = path.resolve('docs');

if (fs.existsSync(distPath)) {
  fs.cpSync(distPath, docsPath, { recursive: true });
  console.log('Successfully synced dist build output to docs/ directory for GitHub Pages.');
} else {
  console.error('Error: dist directory does not exist.');
  process.exit(1);
}
