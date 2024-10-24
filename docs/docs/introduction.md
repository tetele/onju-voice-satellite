---
id: introduction
title: Introduction
description: 'Introduction to the Onju Voice Satellite'
---

Ever since voice satellites [were introduced][voice-satellite] to [Home Assistant](https://www.home-assistant.io/), people wanted to use good microphones and speakers for this purpose, but not many were really available. In a valiant attempt to free a [Google Nest Mini (2nd generation)][nest-mini] from its privacy ignoring overlords, [Justin Alvey](https://github.com/justLV) created [Onju Voice](https://github.com/justLV/onju-voice), a drop-in replacement PCB for the Mini, with an ESP32-S3 at its heart, capable of [some pretty funky stuff](https://twitter.com/justLV/status/1681377298308820992).

The purpose of this project is to be able to use such a modded Nest Mini as a voice satellite in Home Assistant. Here's a small demo:

<iframe class="youtube-video" src="https://www.youtube.com/embed/fuX6IYa79gA?si=DAuEWS87kSnQtX6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Features

- Wake word, push to talk, on-demand and continuous conversation support
- Response playback
- Audio media player
- Service exposed in HA to start and stop the voice assistant from another device/trigger
- Visual feedback of the wake word listening/audio recording/success/error status via the Mini's onboard top LEDs
- Uses all 3 of the original Mini's touch controls as volume controls and a means of manually starting the assistant and setting the volume
- Uses the original Mini's microphone mute button to prevent the wake word engine from starting unintendedly
- Automatic continuous touch control calibration

## Prerequisites

- Home Assistant 2024.7.x or newer
- A voice assistant [configured in HA](https://my.home-assistant.io/redirect/voice_assistants/) with STT and TTS in a language of your choice
- ESPHome 2024.7.3 or newer

## Known issues and limitations

- You have to be able to retrofit an Onju Voice PCB inside a 2nd generation Google Nest Mini.
- ESPHome currently can't use the I2S bus for both listening and playing **simultaneously**. As such, if you want to stream audio (like a TTS notification) to the Onju, you **need** to stop wake word listening first
- The version for `microWakeWord` is in BETA and probably full of bugs (please [report them](https://github.com/tetele/onju-voice-satellite/issues/new?assignees=&labels=bug&projects=&template=bug.yml) if you find any)

## License

The PCB is **NOT** my work and has [its own license](https://github.com/justLV/onju-voice/blob/master/LICENSE). This repository only refers to the ESPHome config that makes the board a HA-compatible voice satellite.

The config is distributed under the **MIT** License. See [`LICENSE`](https://github.com/tetele/onju-voice-satellite/blob/main/LICENSE) for more information.

The notification sounds used are under [CC BY 4.0 ATTRIBUTION](https://creativecommons.org/licenses/by/4.0/) license.

## Credits

- Obviously, a huge thanks to [Justin Alvey](https://twitter.com/justLV) (@justLV) for the excellent Onju Voice project
- Many thanks to Mike Hansen ([@synesthesiam](https://github.com/synesthesiam)) for the relentless work he's put into [Year of the Voice](https://www.home-assistant.io/voice_control/) at Home Assistant
- Thanks to [@kahrendt](https://github.com/kahrendt) for [microWakeWord](https://github.com/kahrendt/microWakeWord)
- Thanks to [@gnumpi](https://github.com/gnumpi) for migrating the ESPHome [`media_player` component to ESP-IDF](https://github.com/gnumpi/esphome_audio)
- Thanks to [Klaas Schoute](https://github.com/klaasnicolaas) for helping with a creating a microsite for the automatic installation of this config (still experimental)
- Thanks to the [ESPHome Discord server](https://discord.gg/KhAMKrd) members for both creating the most time saving piece of software ever and for helping out with some kinks with the config - in particular @jesserockz, @ssieb, @Hawwa, @BigBobba
- Thanks to [UNIVERSFIELD](https://freesound.org/people/UNIVERSFIELD/) for the notification sounds (licensed [CC BY 4.0 ATTRIBUTION](https://creativecommons.org/licenses/by/4.0/), slightly shortened and converted to mono)

[nest-mini]: https://store.google.com/product/google_nest_mini
[voice-satellite]: https://www.home-assistant.io/blog/2023/04/27/year-of-the-voice-chapter-2/#composing-voice-assistants