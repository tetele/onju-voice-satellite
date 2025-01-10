# Contributing to the Onju Voice Satellite project

The easiest way to contribute to this config is to set up a development environment. The recommended such environment is VSCode with devcontainers.

1. Fork this repo
1. Open up VSCode and invoke the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
1. Use the `Clone repository in container volume...` command and provide your own fork as the repo

Once the repo is cloned, an automated process will set up a development version of ESPHome which you can use in CLI mode.

Modify the config and use commands such as `esphome compile /config/onju-voice.yaml` to generate the corresponding firmware.
