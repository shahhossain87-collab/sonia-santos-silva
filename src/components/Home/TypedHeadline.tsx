"use client";

import { useEffect, useState } from "react";
import styles from "./HomeHero.module.css";

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 1800;
const PAUSE_MS = 350;

/**
 * Visual-only headline: a static prefix plus a phrase that is typed, held and
 * deleted in turn. Server render, no-JS and reduced motion show `fallback`.
 * The parent H1 carries the full accessible text; this element is aria-hidden.
 */
export default function TypedHeadline({ prefix, phrases, fallback }: { prefix: string; phrases: readonly string[]; fallback: string }) {
  const [animate, setAnimate] = useState(false);
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(phrases[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!query.matches && phrases.length > 0);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [phrases.length]);

  useEffect(() => {
    if (!animate) return;
    const phrase = phrases[index];
    let delay: number;
    let next: () => void;
    if (!deleting && length < phrase.length) {
      delay = TYPE_MS;
      next = () => setLength(length + 1);
    } else if (!deleting) {
      delay = HOLD_MS;
      next = () => setDeleting(true);
    } else if (length > 0) {
      delay = DELETE_MS;
      next = () => setLength(length - 1);
    } else {
      delay = PAUSE_MS;
      next = () => {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      };
    }
    const timer = window.setTimeout(next, delay);
    return () => window.clearTimeout(timer);
  }, [animate, deleting, index, length, phrases]);

  return (
    <span className={styles.typed} aria-hidden="true">
      <span className={styles.prefix}>{prefix}</span>{" "}
      {animate ? (
        <span className={styles.phrase}>
          {phrases[index].slice(0, length)}
          <span className={styles.caret} />
        </span>
      ) : (
        <span className={styles.phrase}>{fallback}</span>
      )}
    </span>
  );
}
