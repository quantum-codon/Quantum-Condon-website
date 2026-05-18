import * as React from "react";

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
};

export function BackgroundVideo({ src, poster, className = "", videoClassName = "" }: BackgroundVideoProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <video
        className={`h-full w-full object-cover ${videoClassName}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        tabIndex={-1}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
