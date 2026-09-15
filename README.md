<div align="center">

<picture>
  <img src="assets/icon.svg" width="72" height="72" alt="" />
</picture>

# ChatGPT Skin

**The ChatGPT desktop look, applied to bb.**

![bb ≥ 0.43](https://img.shields.io/badge/bb-%E2%89%A5%200.43-88C0D0?style=flat-square)
![light + dark](https://img.shields.io/badge/palette-light%20%2B%20dark-3FA266?style=flat-square)
![no runtime](https://img.shields.io/badge/runtime-none-8A8A8A?style=flat-square)

</div>

A bb theme plugin that reproduces the ChatGPT desktop app's surfaces, text
ladder, accent, and the hover, active, focus, and disabled states of its
buttons, menus, tooltips, switches, and chips. Both light and dark palettes are
declared, each with a matching code theme.

The palette is **declarative**: `bb.themes` in [package.json](package.json)
points bb at [themes/chatgpt.css](themes/chatgpt.css), which bb reads straight
from the plugin directory. There is no runtime surface, no injected script, and
no build step of our own beyond `bb plugin build`.

## Install

```sh
cd bb-plugin-chatgpt-skin
npm install                 # dev types only; the plugin has no runtime deps
bb plugin build .
bb plugin install "path:$PWD" --yes
```

Then pick **ChatGPT** in bb's theme picker. After an edit, `bb plugin build .`
followed by `bb plugin reload chatgpt-skin` is the short loop;
`bb plugin remove chatgpt-skin` uninstalls it.

## What it covers

bb's UI is token-driven — a button renders `hover:bg-state-hover`, so setting
the token restyles every component that consumes it, including ones added
later. Most of the theme is therefore a token override. The parts bb's token set
cannot express are a small, explicitly listed set of narrow rules at the end of
the stylesheet.

- **Surfaces and text** — the canvas, sidebar, popover, and input ramps, and the
  matching text ladder, in both modes.
- **Interaction states** — hover, active, focus-visible, and disabled for
  buttons, menu rows, tabs, switches, chips, and icon buttons.
- **Overlays** — menus, dialogs, popovers, tooltips, and the command palette.
- **Code themes** — [themes/chatgpt-code-dark.json](themes/chatgpt-code-dark.json)
  and [themes/chatgpt-code-light.json](themes/chatgpt-code-light.json) for
  syntax highlighting.

## Layout

```
themes/chatgpt.css               the palette and the narrow rules
themes/chatgpt-code-{dark,light}.json   code themes
assets/icon.svg                  plugin icon
server.ts                        required manifest entry; logs and does nothing
```

## Notes

Every value was measured from the real application rather than eyeballed:
computed custom properties, component styles, and each component's interaction
states were read out of the running app over CDP, and the theme transcribes
those readings. The measurements live outside this repository, in the research
directory that produced it.

## License

MIT — see [LICENSE](LICENSE).

