import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ESPHomeButton from "./ESPWebTools";

/**
 * Installation instructions component with dynamic manifest URL.
 */
interface InstallInstructionsProps {
  manifestUrl: string;
}

const InstallInstructions: React.FC<InstallInstructionsProps> = ({
  manifestUrl,
}) => (
  <>
    <ol>
      <li>
        Press the blue <strong>connect</strong> button below, a pop-up window
        will appear with a list of available USB devices.
      </li>
      <li>
        Hold down the <code>BOOT</code> button on the Onju Voice PCB and connect
        a USB cable.
        <ul>
          <li>
            <em>Note:</em> This prevents the device from reconnecting
            repeatedly.
          </li>
        </ul>
      </li>
      <li>
        In the pop-up window, a new entry should appear. Select this USB serial
        port and click <strong>Connect</strong>.
      </li>
      <li>
        Choose <strong>Install Onju Voice Satellite</strong>, then click{" "}
        <strong>Install</strong>.
      </li>
      <li>
        After installation, click <strong>Next</strong>.
        <ul>
          <li>
            <em>Note:</em> Since the device is still in BOOT mode, you'll return
            to a previous pop-up window.
          </li>
        </ul>
      </li>
      <li>Refresh the browser page.</li>
      <li>
        Press the <code>RST</code> button on the Onju Voice PCB and repeat steps
        1 and 3 to reconnect to the device.
      </li>
      <li>
        In the pop-up window, choose <strong>Connect to Wi-Fi</strong>.
        <ul>
          <li>
            Add the Onju Voice Satellite to your Wi-Fi network:
            <ul>
              <li>
                Select your network from the list and enter the credentials for
                your 2.4 GHz Wi-Fi network.
              </li>
              <li>
                Click <strong>Connect</strong>.
              </li>
              <li>
                The Onju Voice Satellite is now connected to your network.
              </li>
            </ul>
          </li>
          <li>
            <em>Note:</em> If you wait too long, the option to connect to Wi-Fi
            disappears. In that case, repeat steps 6-8.
          </li>
        </ul>
      </li>
      <li>
        Congratulations 🎉 You have successfully installed the firmware on your
        Onju Voice Satellite.
        <ul>
          <li>The LEDs on the Onju Voice PCB should now be blinking green.</li>
        </ul>
      </li>
    </ol>
    <ESPHomeButton manifestUrl={manifestUrl} />
  </>
);

const FirmwareInstallTabs: React.FC = () => (
  <Tabs>
    <TabItem value="onju-voice" label="Onju Voice">
      <InstallInstructions manifestUrl="/onju-voice-satellite/firmware/onju-voice/manifest.json" />
    </TabItem>
    <TabItem
      value="onju-voice-microwakeword"
      label="Onju Voice (microWakeWord)"
    >
      <InstallInstructions manifestUrl="/onju-voice-satellite/firmware/onju-voice-microwakeword/manifest.json" />
    </TabItem>
  </Tabs>
);

export default FirmwareInstallTabs;
