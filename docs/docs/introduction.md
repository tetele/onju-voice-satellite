---
id: introduction
title: Introduction
description: 'Introduction to the Onju Voice Satellite'
---

Ever since voice satellites [were introduced](https://www.home-assistant.io/blog/2023/04/27/year-of-the-voice-chapter-2/#composing-voice-assistants) to [Home Assistant](https://www.home-assistant.io/), people wanted to use good microphones and speakers for this purpose, but not many were really available. In a valiant attempt to free a Google Nest Mini (2nd generation) from its privacy ignoring overlords, [Justin Alvey](https://github.com/justLV) created [Onju Voice](https://github.com/justLV/onju-voice), a drop-in replacement PCB for the Mini, with an ESP32-S3 at its heart, capable of [some pretty funky stuff](https://twitter.com/justLV/status/1681377298308820992).

The purpose of this project is to be able to use such a modded Nest Mini as a voice satellite in Home Assistant. Here's a small demo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/fuX6IYa79gA?si=DAuEWS87kSnQtX6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Features

- Wake word, push to talk, on-demand and continuous conversation support
- Response playback
- Audio media player
- Service exposed in HA to start and stop the voice assistant from another device/trigger
- Visual feedback of the wake word listening/audio recording/success/error status via the Mini's onboard top LEDs
- Uses all 3 of the original Mini's touch controls as volume controls and a means of manually starting the assistant and setting the volume
- Uses the original Mini's microphone mute button to prevent the wake word engine from starting unintendedly
- Automatic continuous touch control calibration

## Pre-requisites

- Home Assistant 2023.11.3 or newer
- A voice assistant [configured in HA](https://my.home-assistant.io/redirect/voice_assistants/) with STT and TTS in a language of your choice
- ESPHome 2023.11.6 or newer

## Credits

- Obviously, a huge thanks to [Justin Alvey](https://twitter.com/justLV) (@justLV) for the excellent Onju Voice project
- Many thanks to Mike Hansen ([@synesthesiam](https://github.com/synesthesiam)) for the relentless work he's put into [Year of the Voice](https://www.home-assistant.io/voice_control/) at Home Assistant
- Thanks to the [ESPHome Discord server](https://discord.gg/KhAMKrd) members for both creating the most time saving piece of software ever and for helping out with some kinks with the config - in particular @jesserockz, @ssieb and @Hawwa
- Thanks to Klaas Schoute ([@klaasnicolaas](https://github.com/klaasnicolaas)) for creating this documentation website for easy installation of the ESPHome config