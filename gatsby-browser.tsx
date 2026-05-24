import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { CookieConsent } from "./src/components/CookieConsent";
import "./src/styles/global.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => (
  <>
    {element}
    <CookieConsent />
  </>
);
