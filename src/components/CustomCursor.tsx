"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show custom cursor on devices that support hover (non-touch)
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      rafId = requestAnimationFrame(tick);
    };

    const onEnterInteractive = () => {
      ring.style.width = "52px";
      ring.style.height = "52px";
      // Saat hover, ring berubah jadi filled white — difference tetap bekerja
      ring.style.background = "white";
      ring.style.border = "none";
      dot.style.opacity = "0";
    };

    const onLeaveInteractive = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.background = "transparent";
      ring.style.border = "1.5px solid white";
      dot.style.opacity = "1";
    };

    const onDocLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onDocEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label'
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onDocLeave);
    document.addEventListener("mouseenter", onDocEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onDocLeave);
      document.removeEventListener("mouseenter", onDocEnter);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Inner dot — warna putih + mix-blend-mode: difference
          → otomatis hitam di background terang, putih di background gelap */}
      <div
        ref={cursorDotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "white",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />
      {/* Outer ring — sama, blend mode difference */}
      <div
        ref={cursorRingRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid white",
          background: "transparent",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          opacity: 0,
          transition:
            "opacity 0.3s, width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease",
        }}
      />
    </>
  );
}
