+++
title = "Emacs (Doom) Environment"
author = ["Nikita Tchayka"]
date = 2025-04-06T00:00:00+01:00
draft = false
+++

This file defines the Emacs environment — specifically, Doom Emacs — as part of my `home.nix` configuration.

It is imported in the Home Manager flake via `./emacs/default.nix`.

Everything here is generated from this very Org document using Org Babel.

---

First, we define the packages to install for Emacs to function properly, including support for fuzzy searching, fonts, spellchecking, language servers, and debugging.

```nix
{ config, pkgs, ... }:

{
  home.packages = with pkgs; [
    # Indexing / search dependencies
    fd
    (ripgrep.override { withPCRE2 = true; })

    # Font / icon config
    emacs-all-the-icons-fonts
    nerd-fonts.symbols-only
    maple-mono.NF
    fontconfig

    # AI tooling
    aider-chat # aidermacs

    # Languages
    nixfmt-classic
    ispell
    shellcheck
    sqlite
    hugo

    # Debugging stack
    nodejs
    lldb
    gdb
    unzip
    delve

    # Required for Treemacs
    python3Full
  ];
```

Fonts are enabled via Fontconfig to make icon rendering work out-of-the-box:

```nix
  fonts.fontconfig.enable = true;
```

We also define session variables for Doom Emacs:

```nix
  home.sessionVariables = {
    DOOMDIR = "${config.xdg.configHome}/doom";
    EMACSDIR = "${config.xdg.configHome}/emacs";
    DOOMLOCALDIR = "${config.xdg.dataHome}/doom";
    DOOMPROFILELOADFILE = "${config.xdg.stateHome}/doom-profiles-load.el";
  };
  home.sessionPath = [ "${config.xdg.configHome}/emacs/bin" ];
```

These ensure Doom Emacs can find its config, data, and state files cleanly — fully respecting the `XDG Base Directory` specification.

We now enable Emacs and add extra packages to support debugging and vterm:

```nix
  programs.emacs = {
    enable = true;
    extraPackages = epkgs: with epkgs; [ realgud-lldb vterm ];
  };
```

Finally, we fetch Doom Emacs itself and link our personal configuration directory:

```nix
  xdg.configFile."emacs".source = builtins.fetchGit {
    url = "https://github.com/doomemacs/doomemacs.git";
    rev = "b1e6dec47a2d0fa5fd8f7ab55b5f1012d16cb48b";
  };
  xdg.configFile."doom".source = ./doom.d;
}
```

Note that the path `./doom.d` must match `$DOOMDIR` — otherwise, Doom won't boot properly.

The result is a fully declarative Doom Emacs setup, with AI tooling, LSP support, debugging, and even font rendering handled automatically through Nix.
