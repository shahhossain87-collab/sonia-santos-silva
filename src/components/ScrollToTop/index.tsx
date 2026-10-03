"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed right-4 bottom-[calc(var(--bottom-chrome-height)+1rem)] z-40 flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 bg-navy text-gold shadow-two lg:right-4 lg:bottom-[calc(var(--bottom-chrome-height)+5rem)]"
    >
      <span className="mt-[3px] h-2.5 w-2.5 rotate-45 border-t border-l border-gold" />
    </button>
  );
}
