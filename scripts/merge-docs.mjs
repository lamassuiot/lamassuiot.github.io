/**
 * Merges the docs project's static build output into the landing's dist/.
 *
 * The docs build (react-router, ssr:false) outputs prerendered HTML under
 * build/client/docs/ and bundled assets under build/client/assets/.
 *
 * DOCS_CLIENT_DIR env var overrides the source path (used in CI where the
 * docs repo is checked out to a different location than the local sibling dir).
 */

import { cpSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const docsClientDir = process.env.DOCS_CLIENT_DIR
  ? resolve(process.cwd(), process.env.DOCS_CLIENT_DIR)
  : resolve(__dirname, '../../docs/docs/build/client');

const distDir = resolve(__dirname, '../dist');

if (!existsSync(docsClientDir)) {
  console.warn(`[merge-docs] Docs build not found at ${docsClientDir} — skipping.`);
  console.warn('  Run `pnpm build` inside the docs project first, or set DOCS_CLIENT_DIR.');
  process.exit(0);
}

// Directories/files to copy wholesale (no risk of colliding with landing output)
// - docs/          → prerendered HTML pages served at /docs/*
// - assets/        → hashed JS/CSS bundles (Astro uses _astro/, no conflict)
// - images/        → static images referenced by docs (icons, screenshots, etc.)
// - manual-images/ → additional manual images
// - api/           → any API route files
// - llms.mdx/      → llms mdx files
const COPY_DIRS = ['docs', 'assets', 'images', 'manual-images', 'api', 'llms.mdx'];
const COPY_FILES = ['llms.txt', 'llms-full.txt'];

for (const dir of COPY_DIRS) {
  const src = resolve(docsClientDir, dir);
  if (!existsSync(src)) continue;
  const dest = resolve(distDir, dir);
  cpSync(src, dest, { recursive: true });
  console.log(`[merge-docs] Copied ${dir}/`);
}

for (const file of COPY_FILES) {
  const src = resolve(docsClientDir, file);
  if (!existsSync(src)) continue;
  cpSync(src, resolve(distDir, file));
  console.log(`[merge-docs] Copied ${file}`);
}

// Copy react-router .data files (needed for client-side navigation prefetch)
for (const entry of readdirSync(docsClientDir)) {
  if (entry.endsWith('.data')) {
    cpSync(resolve(docsClientDir, entry), resolve(distDir, entry));
    console.log(`[merge-docs] Copied ${entry}`);
  }
}

console.log('[merge-docs] Done.');
