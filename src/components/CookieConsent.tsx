import * as React from "react";

type ConsentChoice = "accepted" | "essential";

type MediaAsset = {
  href: string;
  as: "image" | "video";
};

const storageKey = "qc-cookie-consent";
const cookieName = "qc_cookie_consent";

const priorityMedia: MediaAsset[] = [
  { href: "/brand_logo.png", as: "image" },
  { href: "/quantum-codon-hero-dna.png", as: "image" },
  { href: "/pkd_hero.png", as: "image" },
  { href: "/hero_sec.mp4", as: "video" },
  { href: "/analytical_hero.mp4", as: "video" },
  { href: "/bio_manufactoring.mp4", as: "video" },
  { href: "/training_hero.mp4", as: "video" },
  { href: "/regulatory_hero_sec.mp4", as: "video" },
  { href: "/footer_sec.mp4", as: "video" }
];

function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") {
    return null;
  }

  const saved = window.localStorage.getItem(storageKey);

  if (saved === "accepted" || saved === "essential") {
    return saved;
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${cookieName}=`))
    ?.split("=")[1];

  return cookie === "accepted" || cookie === "essential" ? cookie : null;
}

function canPrefetchVideo() {
  const connection = (navigator as Navigator & {
    connection?: {
      effectiveType?: string;
      saveData?: boolean;
    };
  }).connection;

  if (!connection) {
    return true;
  }

  return !connection.saveData && !/2g/i.test(connection.effectiveType || "");
}

function addPrefetch(asset: MediaAsset) {
  if (asset.as === "video" && !canPrefetchVideo()) {
    return;
  }

  if (document.head.querySelector(`link[data-qc-prefetch="${asset.href}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = asset.href;
  link.dataset.qcPrefetch = asset.href;

  if (asset.as === "image") {
    link.as = "image";
  }

  document.head.appendChild(link);
}

function warmMediaCache() {
  const schedule = "requestIdleCallback" in window
    ? (callback: () => void) => window.requestIdleCallback(callback, { timeout: 3000 })
    : (callback: () => void) => window.setTimeout(callback, 900);

  schedule(() => {
    priorityMedia.forEach(addPrefetch);
  });
}

function saveConsent(choice: ConsentChoice) {
  window.localStorage.setItem(storageKey, choice);
  document.cookie = `${cookieName}=${choice}; Max-Age=15552000; Path=/; SameSite=Lax`;

  if (choice === "accepted") {
    warmMediaCache();
  }
}

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const saved = readConsent();

    if (!saved) {
      setVisible(true);
      return;
    }

    if (saved === "accepted") {
      warmMediaCache();
    }
  }, []);

  function handleChoice(choice: ConsentChoice) {
    saveConsent(choice);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <aside className="cookie-consent" aria-label="Privacy and media preferences">
      <div>
        <p className="cookie-consent-title">Privacy & media preferences</p>
        <p className="cookie-consent-copy">
          We use essential cookies to remember your preference and keep the site reliable. With your consent, Quantum
          Codon can optimize selected images and video assets after the first page load for a smoother browsing
          experience. This preference is not used for advertising or cross-site tracking.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-secondary" onClick={() => handleChoice("essential")}>
          Essential only
        </button>
        <button type="button" className="cookie-consent-primary" onClick={() => handleChoice("accepted")}>
          Accept & optimize media
        </button>
      </div>
    </aside>
  );
}
