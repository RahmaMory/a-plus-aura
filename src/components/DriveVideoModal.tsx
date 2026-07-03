import {
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  LoaderCircle,
  X,
} from "lucide-react";
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

function DriveVideoModal({
  video,
  categoryTitle,
  onClose,
}: Props) {
  const [isLoading, setIsLoading] =
    useState(true);

  const [isTakingLong, setIsTakingLong] =
    useState(false);

  const slowTimerRef =
    useRef<number | null>(null);

  useEffect(() => {
    if (!video) {
      return;
    }

    setIsLoading(true);
    setIsTakingLong(false);

    const previousOverflow =
      document.body.style.overflow;

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    slowTimerRef.current =
      window.setTimeout(() => {
        setIsTakingLong(true);
      }, 8000);

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      if (slowTimerRef.current !== null) {
        window.clearTimeout(
          slowTimerRef.current,
        );
      }

      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [video, onClose]);

  if (!video) {
    return null;
  }

  const finishLoading = () => {
    if (slowTimerRef.current !== null) {
      window.clearTimeout(
        slowTimerRef.current,
      );
    }

    setIsLoading(false);
    setIsTakingLong(false);
  };

  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        overflow-y-auto bg-black/80
        px-2 py-2 backdrop-blur-md
        lg:flex lg:items-center
        lg:justify-center
        lg:px-8 lg:py-8
      "
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="
          mx-auto flex
          h-[calc(100dvh-16px)]
          w-full max-w-[460px]
          flex-col rounded-[24px]
          bg-[#080808] p-2
          shadow-[0_35px_100px_rgba(0,0,0,0.55)]
          sm:max-w-[520px]
          md:max-w-[560px]
          lg:h-auto lg:max-w-[1100px]
          lg:p-5
        "
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div
          className="
            flex shrink-0 items-start
            justify-between gap-4
            px-1 pb-2 pt-1 text-white
            lg:px-0 lg:pb-4 lg:pt-0
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-[10px] font-bold uppercase
                tracking-[0.2em]
                text-white/45
                lg:text-xs
              "
            >
              {categoryTitle}
            </p>

            <h2
              className="
                mt-2 line-clamp-1
                text-lg font-black
                leading-tight
                lg:line-clamp-2
                lg:text-2xl
              "
            >
              {video.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              grid size-10 shrink-0
              place-items-center rounded-full
              bg-white text-black
              transition-transform duration-300
              hover:rotate-90
              lg:size-11
            "
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>

        <div
          className="
            relative min-h-0 flex-1
            overflow-hidden rounded-[20px]
            bg-black
            lg:aspect-video
            lg:flex-none
            lg:rounded-[22px]
          "
        >
          {isLoading && (
            <div
              className="
                absolute inset-0 z-10
                flex flex-col items-center
                justify-center overflow-hidden
                bg-black px-6
                text-center text-white
              "
            >
              <img
                src={video.poster}
                alt=""
                className="
                  absolute inset-0
                  h-full w-full object-cover
                  opacity-35 blur-sm
                "
              />

              <span
                className="
                  absolute inset-0
                  bg-black/65
                "
              />

              <div className="relative">
                <LoaderCircle
                  size={34}
                  className="mx-auto animate-spin"
                />

                <p className="mt-4 font-semibold">
                  Loading video...
                </p>

                {isTakingLong && (
                  <p
                    className="
                      mt-3 max-w-[430px]
                      text-sm leading-6
                      text-white/55
                    "
                  >
                    Google Drive is taking longer
                    than usual. You can keep waiting
                    or open the video directly.
                  </p>
                )}
              </div>
            </div>
          )}

          <iframe
            key={video.driveId}
            src={getDrivePreviewUrl(
              video.driveId,
            )}
            title={`${categoryTitle} — ${video.title}`}
            className="
              absolute inset-0
              h-full w-full border-0
            "
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="eager"
            onLoad={finishLoading}
          />
        </div>

        <div
          className="
            flex shrink-0 justify-end
            px-1 pt-2 lg:px-0 lg:pt-4
          "
        >
          <a
            href={getDriveViewUrl(
              video.driveId,
            )}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm font-semibold
              text-white/65
              transition-colors
              hover:text-white
            "
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