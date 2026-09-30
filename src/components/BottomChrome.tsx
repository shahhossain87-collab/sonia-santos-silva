"use client";

import { useEffect, useRef } from "react";
import CookieBanner from "./CookieBanner";
import MobileDock from "./MobileDock";

export default function BottomChrome() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => {
      document.documentElement.style.setProperty(
        "--bottom-chrome-height",
        `${element.getBoundingClientRect().height}px`,
      );
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--bottom-chrome-height");
    };
  }, []);

  return (
    <div ref={ref} id="bottom-chrome" className="fixed inset-x-0 bottom-0 z-50">
      <CookieBanner />
      <MobileDock />
    </div>
  );
}
