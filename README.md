# Onju Voice satellite 

Ever since voice satellites [were introduced](https://www.home-assistant.io/blog/2023/04/27/year-of-the-voice-chapter-2/#composing-voice-assistants) to [Home Assistant](https://www.home-assistant.io/), people wanted to use good microphones and speakers for this purpose, but not many were really available.

In a valiant attempt to free a Google Nest Mini (2nd generation) from its privacy ignoring overlords, [Justin Alvey](https://github.com/justLV) created [Onju Voice](https://github.com/justLV/onju-voice), a drop-in replacement PCB for the Mini, with an ESP32-S3 at its heart, capable of [some pretty funky stuff](https://twitter.com/justLV/status/1681377298308820992).

The purpose of this [ESPHome](https://www.esphome.io/) config is to be able to use such a modded Nest Mini as a voice satellite in Home Assistant. Here's a small demo:

https://youtu.be/fuX6IYa79gA

## License

The PCB is **NOT** my work and has [its own license](https://github.com/justLV/onju-voice/blob/master/LICENSE). This repository only refers to the ESPHome config that makes the board a HA-compatible voice satellite.

The config is distributed under the **MIT** License. See [`LICENSE`](LICENSE) for more information.

## Features

- wake word (including [microWakeWord](https://www.esphome.io/components/micro_wake_word) in an experimental phase), push to talk, on-demand and continuous conversation support
- response playback
- audio media player (not supported by microWakeWord config yet)
- service exposed in HA to start and stop the voice assistant from another device/trigger
- visual feedback of the wake word listening/audio recording/success/error status via the Mini's onboard top LEDs
- uses all 3 of the original Mini's touch controls as volume controls and a means of manually starting the assistant and setting the volume (volume supported only for non-microWakeWord variant)
- uses the original Mini's microphone mute button to prevent the wake word engine from starting unintendedly
- automatic continuous touch control calibration

## Pre-requisites

- Home Assistant 2024.2.0 or newer
- A voice assistant [configured in HA](https://my.home-assistant.io/redirect/voice_assistants/) with STT and TTS in a language of your choice
- ESPHome 2024.2.0 or newer

## Known issues and limitations

- you have to be able to retrofit an Onju Voice PCB inside a 2nd generation Google Nest Mini.
- ~~the `media_player` component in ESPHome [does not play raw audio coming from Piper TTS](https://github.com/home-assistant/core/issues/92969). It works with any STT that outputs mp3 by default, though~~ [fixed](https://github.com/home-assistant/core/pull/102814) in HA 2023.12
- the version for `microWakeWord` is in BETA and probably full of bugs

## Installation instructions

[Here is a video](https://youtu.be/VaQkc-sgc04) explaining how to perform the PCB "transplant". You can find some [instructions for disassembly here](<https://www.ifixit.com/Teardown/Google+Nest+Mini+(2nd+generation)+Teardown/130974>).

To flash the Onju Voice for the first time, you have to do so **BEFORE YOU PUT EVERYTHING BACK TOGETHER** in the Google Nest Mini housing. Otherwise, you lose access to the USB port.

So, before connecting the board for the first time, hold down the BOOT switch on it and connect a USB cable to your computer. Use the ESPHome web installer to flash according to the config below.

Double check Wifi connection details, API encryption key and device name/friendly name to make sure you use your own.

After the device has been added to ESPHome, if auto discovery is turned on, the device should appear in Home Assistant automatically. Otherwise, check out [this guide](https://esphome.io/guides/getting_started_hassio.html).

## Credits

- obviously, a huge thanks to [Justin Alvey](https://twitter.com/justLV) (@justLV) for the excellent Onju Voice project
- many thanks to Mike Hansen ([@synesthesiam](https://github.com/synesthesiam)) for the relentless work he's put into [Year of the Voice](https://www.home-assistant.io/voice_control/) at Home Assistant
- thanks to [Klaas Schoute](https://github.com/klaasnicolaas) for helping with a creating a microsite for the automatic installation of this config (still experimental)
- thanks to the [ESPHome Discord server](https://discord.gg/KhAMKrd) members for both creating the most time saving piece of software ever and for helping out with some kinks with the config - in particular @jesserockz, @ssieb and @Hawwa

[![GithubSponsor][githubsponsorbadge]][githubsponsor]

[githubsponsor]: https://github.com/sponsors/tetele/
[githubsponsorbadge]: https://img.shields.io/badge/sponsor%20me%20on%20github-sponsor-yellow.svg?style=for-the-badge
