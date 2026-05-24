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
