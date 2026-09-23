import { rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Delete only generated output, relative to this project rather than the caller's cwd.
// Node's remover handles OneDrive reparse points without Next's readlink traversal.
const outputPath = fileURLToPath(new URL("../.next", import.meta.url));
rmSync(outputPath, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
console.log("Cleared Next.js generated output.");
