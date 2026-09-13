import { createRequire as __createRequire } from "node:module";
import { dirname as __pathDirname } from "node:path";
import { fileURLToPath as __fileURLToPath } from "node:url";
const require = __createRequire(import.meta.url);
var __filename = __fileURLToPath(import.meta.url);
var __dirname = __pathDirname(__filename);

// server.ts
async function plugin(bb) {
  bb.log.info("loaded \u2014 contributes the ChatGPT palette");
}
export {
  plugin as default
};
//# sourceMappingURL=server.js.map
