# Onju Voice satellite

Ever since voice satellites [were introduced](https://www.home-assistant.io/blog/2023/04/27/year-of-the-voice-chapter-2/#composing-voice-assistants) to [Home Assistant](https://www.home-assistant.io/), people wanted to use good microphones and speakers for this purpose, but not many were really available.

In a valiant attempt to free a Google Nest Mini (2nd generation) from its privacy ignoring overlords, [Justin Alvey](https://github.com/justLV) created [Onju Voice](https://github.com/justLV/onju-voice), a drop-in replacement PCB for the Mini, with an ESP32-S3 at its heart, capable of [some pretty funky stuff](https://twitter.com/justLV/status/1681377298308820992).

The purpose of this [ESPHome](https://www.esphome.io/) config is to be able to use such a modded Nest Mini as a voice satellite in Home Assistant. Here's a small demo:

https://youtu.be/fuX6IYa79gA

## License

The PCB is **NOT** my work and has [its own license](https://github.com/justLV/onju-voice/blob/master/LICENSE). This repository only refers to the ESPHome config that makes the board a HA-compatible voice satellite.

The config is distributed under the **MIT** License. See [`LICENSE`](LICENSE) for more information.

The notification sounds used are under [CC BY 4.0 ATTRIBUTION](https://creativecommons.org/licenses/by/4.0/) license.

## Features

- wake word (including [microWakeWord](https://www.esphome.io/components/micro_wake_word) in an experimental phase), push to talk, on-demand and continuous conversation support
- response playback
- audio media player
- service exposed in HA to start and stop the voice assistant from another device/trigger
- visual feedback of the wake word listening/audio recording/success/error status via the Mini's onboard top LEDs
- uses all 3 of the original Mini's touch controls as volume controls and a means of manually starting the assistant and setting the volume
- uses the original Mini's microphone mute button to prevent the wake word engine from starting unintendedly
- automatic continuous touch control calibration

## Pre-requisites

- Home Assistant 2024.7.0 or newer
- A voice assistant [configured in HA](https://my.home-assistant.io/redirect/voice_assistants/) with STT and TTS in a language of your choice
- ESPHome 2024.7.3 or newer

## Known issues and limitations

- you have to be able to retrofit an Onju Voice PCB inside a 2nd generation Google Nest Mini.
- ESPHome currently can't use the I2S bus for both listening and playing **simultaneously**. As such, if you want to stream audio (like a TTS notification) to the Onju, you **need** to stop wake word listening first
- the version for `microWakeWord` is in BETA and probably full of bugs (please [report them](https://github.com/tetele/onju-voice-satellite/issues/new?assignees=&labels=bug&projects=&template=bug.yml) if you find any)

## Installation instructions

[Here is a video](https://youtu.be/VaQkc-sgc04) explaining how to perform the PCB "transplant". You can find some [instructions for disassembly here](<https://www.ifixit.com/Teardown/Google+Nest+Mini+(2nd+generation)+Teardown/130974>).

To flash the Onju Voice for the first time, you have to do so **BEFORE YOU PUT EVERYTHING BACK TOGETHER** in the Google Nest Mini housing. Otherwise, you lose access to the USB port.

So, before connecting the board for the first time, hold down the BOOT switch on it and connect a USB cable to your computer. Use the ESPHome web installer to flash according to the config below.

Double check Wifi connection details, API encryption key and device name/friendly name to make sure you use your own.

After the device has been added to ESPHome, if auto discovery is turned on, the device should appear in Home Assistant automatically. Otherwise, check out [this guide](https://esphome.io/guides/getting_started_hassio.html).

### Notification sounds

Although the online MP3 files should work, downloading them implies some lag. It's far better to have them locally available.

1. Create a folder named `sounds` in your `config` folder under `www`. You now have a `config/www/sounds` folder.
1. Upload notification sounds in the folder (MP3 prefferable, to avoid encoding issues), e.g. `error.mp3`
1. Replace the URL in the `substitutions:` section with your own URLs (e.g. `http://homeassistant.local:8123/local/sounds/error.mp3`). If your HA instance is available at `http://homeassistant.local:8123/`, then whatever you upload to the `www` folder is available at `http://homeassistant.local:8123/local/`

## Credits

- obviously, a huge thanks to [Justin Alvey](https://twitter.com/justLV) (@justLV) for the excellent Onju Voice project
- many thanks to Mike Hansen ([@synesthesiam](https://github.com/synesthesiam)) for the relentless work he's put into [Year of the Voice](https://www.home-assistant.io/voice_control/) at Home Assistant
- thanks to [@kahrendt](https://github.com/kahrendt) for [microWakeWord](https://github.com/kahrendt/microWakeWord)
- thanks to [@gnumpi](https://github.com/gnumpi) for migrating the ESPHome [`media_player` component to ESP-IDF](https://github.com/gnumpi/esphome_audio)
- thanks to [Klaas Schoute](https://github.com/klaasnicolaas) for helping with a creating a microsite for the automatic installation of this config (still experimental)
- thanks to the [ESPHome Discord server](https://discord.gg/KhAMKrd) members for both creating the most time saving piece of software ever and for helping out with some kinks with the config - in particular @jesserockz, @ssieb, @Hawwa, @BigBobba
- thanks to [UNIVERSFIELD](https://freesound.org/people/UNIVERSFIELD/) for the notification sounds (licensed [CC BY 4.0 ATTRIBUTION](https://creativecommons.org/licenses/by/4.0/), slightly shortened and converted to mono)

If you'd like to thank me for creating and maintaining this config, you can [![GithubSponsor][githubsponsorbadge]][githubsponsor]

[githubsponsor]: https://github.com/sponsors/tetele/
[githubsponsorbadge]: https://img.shields.io/badge/sponsor%20me%20on%20github-sponsor-yellow.svg?style=for-the-badge
