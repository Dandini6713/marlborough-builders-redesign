import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

const filesToCopy = [
  "index.html",
  "marlborough_builders_emblem_only.svg",
  "marlborough_builders_emblem_roundel.svg",
  "marlborough_builders_emblem_roundel_zoom.svg",
  "marlborough_builders_exact_image.svg",
];

const directoriesToCopy = [
  "assets",
  "about",
  "contact",
  "gallery",
  "joinery",
  "roofing",
];

const requiredRoutes = [
  "index.html",
  "joinery/index.html",
  "joinery/services/index.html",
  "roofing/index.html",
  "roofing/services/index.html",
  "about/index.html",
  "gallery/index.html",
  "contact/index.html",
];

const requiredAssets = [
  "assets/css/styles.css",
  "assets/js/site.js",
  "marlborough_builders_emblem_only.svg",
  "marlborough_builders_emblem_roundel.svg",
  "marlborough_builders_emblem_roundel_zoom.svg",
];

async function assertExists(relativePath) {
  await access(path.join(rootDir, relativePath));
}

async function verifyPaths(relativePaths, label) {
  for (const relativePath of relativePaths) {
    await access(path.join(distDir, relativePath));
  }

  console.log(`Verified ${label}:`);
  for (const relativePath of relativePaths) {
    console.log(`- ${relativePath}`);
  }
}

async function main() {
  for (const relativePath of [...filesToCopy, ...directoriesToCopy]) {
    await assertExists(relativePath);
  }

  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  for (const relativePath of filesToCopy) {
    await cp(path.join(rootDir, relativePath), path.join(distDir, relativePath));
  }

  for (const relativePath of directoriesToCopy) {
    await cp(path.join(rootDir, relativePath), path.join(distDir, relativePath), {
      recursive: true,
    });
  }

  await verifyPaths(requiredRoutes, "routes");
  await verifyPaths(requiredAssets, "assets");

  console.log(`Static site exported to ${distDir}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
