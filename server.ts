// bb-plugin-chatgpt-skin — backend entry.
//
// The palette is declarative: `bb.themes` in package.json points BB at
// themes/chatgpt.css, which BB reads straight from the plugin directory. No
// runtime surface is needed, but `bb.server` is a required manifest field, so
// this factory exists to satisfy the loader.
import type { BbPluginApi } from "@get-bb/plugin-sdk";

export default async function plugin(bb: BbPluginApi) {
  bb.log.info("loaded — contributes the ChatGPT palette");
}
