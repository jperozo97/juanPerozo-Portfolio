// Fails if a bracketed placeholder like "[Why: add the reasoning]" is visible
// in the exported site. Run after `next build` (reads ./out).
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const OUT = "out";

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith(".html")) yield path;
  }
}

function visibleText(html) {
  return html
    .replace(/<(script|style|template)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");
}

const found = [];
for await (const file of htmlFiles(OUT)) {
  const page = relative(OUT, file);
  for (const match of visibleText(await readFile(file, "utf8")).matchAll(/\[[^\]\n]{1,200}\]/g)) {
    found.push(`${page}: ${match[0]}`);
  }
}

if (found.length) {
  console.error(`Found ${found.length} placeholder(s) in published content:\n`);
  for (const line of [...new Set(found)]) console.error(`  ${line}`);
  process.exit(1);
}
console.log("No placeholders found.");
