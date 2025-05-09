+++
title = "About the infrastructure to generate the site"
author = ["Nikita Tchayka"]
date = 2025-03-23T00:00:00+00:00
draft = false
+++

The site is written using Org-mode.

All content lives in `.org` files that serve multiple purposes: they act as a personal knowledge base, documentation, configuration hub, and code generator. Many files include source blocks that can be **tangled** into actual scripts or config files — this allows me to maintain a single source of truth across systems.

For static site generation, I use **Astro** with **Starlight**.

While exporting I use my elisp function `ns/hugo-export-org-files-in-dir`. Setting
the Org root to the root of this repo, and the Hugo root to the `src` folder
in this folder. Also, I will use `ns/tangle-org-files-in-dir` to generate all source files out of the source blocks.

I also setup an `after-save-hook` for this that performs this automatically.
