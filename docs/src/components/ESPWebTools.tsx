import Head from "@docusaurus/Head";
import React from "react";

/**
 * Extend JSX.IntrinsicElements to include the custom element
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "esp-web-install-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { manifest: string };
    }
  }
}

/**
 * Load the ESP Web Tools script and handle potential errors during loading
 */
const loadEspWebToolsScript = () => (
  <script
    type="module"
    src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"
    onError={(e) => console.error("Failed to load esp-web-tools script", e)}
  />
);

interface ESPHomeButtonProps {
  manifestUrl: string;
}

export default function ESPHomeButton({ manifestUrl }: ESPHomeButtonProps) {
  return (
    <>
      <Head>{loadEspWebToolsScript()}</Head>
      <esp-web-install-button manifest={manifestUrl}></esp-web-install-button>
    </>
  );
}