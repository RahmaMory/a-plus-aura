import { useState } from "react";
import type { KeyboardEvent } from "react";
import {
  ArrowUpRight,
  FolderOpen,
} from "lucide-react";
import {
  getDrivePreviewUrl,
  type MediaCategory,
  type MediaVideo,
} from "../data/mediaProductionWork";

type MediaCategoryShowcaseProps = {
  category: MediaCategory;
  onPlay: (
    video: MediaVideo,
    categoryTitle: string,
  ) => void;
};

function MediaCategoryShowcase({
  category,
  onPlay,
}: MediaCategoryShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo =
    category.videos[activeIndex] ??
    category.videos[0];

  const playVideo = (video: MediaVideo) => {
    onPlay(video, category.title);
  };

  const handlePreviewKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();

      if (activeVideo) {
        playVideo(activeVideo);
      }
    }
  };

  /* الكاتيجوري التي تحتوي على Folder فقط */
  if (!activeVideo) {
    return (
      <article
        className="
          flex h-full flex-col
          overflow-hidden rounded-[24px]
          bg-white p-5
          shadow-[0_16px_45px_rgba(0,0,0,0.06)]
          sm:p-6
        "
      >
        <div>
          <p
            className="
              text-[11px] font-bold uppercase
              tracking-[0.2em] text-black/40
            "
          >
            {category.type}
          </p>

          <h2
            className="
              mt-3
              text-[clamp(1.7rem,2.6vw,2.5rem)]
              font-black leading-[0.98]
              tracking-[-0.045em]
            "
          >
            {category.title}
          </h2>

          <p className="mt-3 text-sm text-black/45">
            Project Folder
          </p>
        </div>

        <a
          href={category.folderUrl ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="
            group relative mt-7
            flex min-h-[320px]
            flex-1 items-center
            justify-center overflow-hidden
            rounded-[20px] bg-black
            text-white
          "
        >
          <img
            src={
              category.fallbackImage ||
              "/images/service-video-editing.png"
            }
            alt=""
            className="
              absolute inset-0
              h-full w-full object-cover
              opacity-35
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          <span
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black via-black/45 to-black/20
            "
          />

          <span
            className="
              relative flex flex-col
              items-center text-center
            "
          >
            <span
              className="
                grid size-16 place-items-center
                rounded-full bg-white
                text-black
              "
            >
              <FolderOpen size={25} />
            </span>

            <span className="mt-5 text-xl font-black">
              View Education Projects
            </span>

            <span
              className="
                mt-2 inline-flex
                items-center gap-2
                text-sm text-white/55
              "
            >
              Open Google Drive Folder
              <ArrowUpRight size={16} />
            </span>
          </span>
        </a>
      </article>
    );
  }

  return (
    <article
      className="
        flex h-full flex-col
        overflow-hidden rounded-[24px]
        bg-white p-5
        shadow-[0_16px_45px_rgba(0,0,0,0.06)]
        sm:p-6
      "
    >
      {/* عنوان الكاتيجوري */}
      <div>
        <p
          className="
            text-[11px] font-bold uppercase
            tracking-[0.2em] text-black/40
          "
        >
          {category.type}
        </p>

        <h2
          className="
            mt-3
            text-[clamp(1.7rem,2.6vw,2.5rem)]
            font-black leading-[0.98]
            tracking-[-0.045em]
          "
        >
          {category.title}
        </h2>

        <p className="mt-3 text-sm text-black/45">
          {category.videos.length} selected projects
        </p>
      </div>

      {/* معاينة الفيديو */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => playVideo(activeVideo)}
        onKeyDown={handlePreviewKeyDown}
        className="
          group relative mt-7
          aspect-[16/10] cursor-pointer
          overflow-hidden rounded-[20px]
          bg-black outline-none
          focus-visible:ring-4
          focus-visible:ring-black/15
        "
        aria-label={`Play ${activeVideo.title}`}
      >
        <iframe
          key={activeVideo.driveId}
          src={getDrivePreviewUrl(
            activeVideo.driveId,
          )}
          title={`${category.title} preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            h-full w-full
          "
          allow="autoplay; fullscreen"
        />

        <span
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/75
            via-transparent
            to-black/5
          "
        />

        <span
          className="
            pointer-events-none
            absolute bottom-5
            left-5 right-5
            flex items-end
            justify-between gap-5
            text-white
          "
        >
          <span>
            <span
              className="
                block text-[10px]
                font-bold uppercase
                tracking-[0.18em]
                text-white/50
              "
            >
              Selected Project
            </span>

            <span
              className="
                mt-2 block
                text-lg font-black
              "
            >
              {activeVideo.title}
            </span>
          </span>

          <span
            className="
              hidden text-xs
              font-semibold text-white/55
              sm:block
            "
          >
            Click to Play
          </span>
        </span>
      </div>

      {/* اختيار المشروع */}
      <div className="mt-5">
        <p
          className="
            text-[10px] font-bold uppercase
            tracking-[0.18em] text-black/35
          "
        >
          Explore Projects
        </p>

        <div
          className="
            mt-3 flex gap-2
            overflow-x-auto pb-2
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {category.videos.map(
            (video, index) => {
              const isActive =
                index === activeIndex;

              return (
                <button
                  key={video.id}
                  type="button"
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  onFocus={() =>
                    setActiveIndex(index)
                  }
                  onClick={() =>
                    playVideo(video)
                  }
                  className={`
                    shrink-0 rounded-full
                    px-4 py-2.5
                    text-xs font-bold
                    transition-colors duration-200
                    ${
                      isActive
                        ? `
                          bg-black
                          text-white
                        `
                        : `
                          bg-[#f2f2f2]
                          text-black/50
                          hover:bg-black
                          hover:text-white
                        `
                    }
                  `}
                  aria-label={`Open ${video.title}`}
                >
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}
                </button>
              );
            },
          )}
        </div>
      </div>
    </article>
  );
}

export default MediaCategoryShowcase;