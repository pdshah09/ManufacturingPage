"use client";
import { useEffect } from "react";

const SHOWREEL_URL = "https://qvoo.io/wp-content/uploads/2026/01/Show-Reel-2.mp4";

export default function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="video-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Qvoo showreel video"
      onClick={onClose}
    >
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <video
          src={SHOWREEL_URL}
          autoPlay
          loop
          muted
          playsInline
          controls
          controlsList="nodownload"
          style={{ width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#000", display: "block" }}
        />
      </div>
    </div>
  );
}
