import * as React from "react";
import type { GatsbySSR } from "gatsby";
import { CookieConsent } from "./src/components/CookieConsent";
import "./src/styles/global.css";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <>
    {element}
    <CookieConsent />
  </>
);

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  try {
    var stored = window.localStorage.getItem('qc-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`
      }}
    />
  ]);
};
