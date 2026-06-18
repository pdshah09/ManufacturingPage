"use client";
import { useEffect } from "react";

export default function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
      aria-label="Manufacturing showreel video"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="video-modal-inner">
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Qvoo Manufacturing showreel"
        />
      </div>
    </div>
  );
}
