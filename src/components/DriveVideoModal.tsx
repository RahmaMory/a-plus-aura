import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import {
  getDrivePreviewUrl,
  getDriveViewUrl,
  type MediaVideo,
} from "../data/mediaProductionWork";

type Props = {
  video: MediaVideo | null;
  categoryTitle: string;
  onClose: () => void;
};

function DriveVideoModal({ video, categoryTitle, onClose }: Props) {
  useEffect(() => {
    if (!video) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [video, onClose]);

  if (!video) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-md sm:px-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-[1100px]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-5 text-white">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              {categoryTitle}
            </p>
            <h2 className="mt-2 text-xl font-black sm:text-2xl">
              {video.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-black transition-transform duration-300 hover:rotate-90"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
          <iframe
            src={getDrivePreviewUrl(video.driveId)}
            title={`${categoryTitle} — ${video.title}`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        <div className="mt-4 flex justify-end">
          <a
            href={getDriveViewUrl(video.driveId)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
          >
            Open in Google Drive
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default DriveVideoModal;
