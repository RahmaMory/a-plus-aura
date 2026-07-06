// import {
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import type { KeyboardEvent } from "react";
// import {
//   LoaderCircle,
//   Play,
// } from "lucide-react";
// import {
//   getDrivePreviewUrl,
//   type MediaCategory,
//   type MediaVideo,
// } from "../data/mediaProductionWork";

// type MediaCategoryShowcaseProps = {
//   category: MediaCategory;
//   onPlay: (
//     video: MediaVideo,
//     categoryTitle: string,
//   ) => void;
// };

// function MediaCategoryShowcase({
//   category,
//   onPlay,
// }: MediaCategoryShowcaseProps) {
//   const previewRef =
//     useRef<HTMLDivElement | null>(null);

//   const [activeIndex, setActiveIndex] =
//     useState(0);

//   const [shouldLoadPreview, setShouldLoadPreview] =
//     useState(false);

//   const [isPreviewLoading, setIsPreviewLoading] =
//     useState(true);

//   const activeVideo =
//     category.videos[activeIndex] ??
//     category.videos[0];

//   useEffect(() => {
//     const previewElement = previewRef.current;

//     if (!previewElement) {
//       return;
//     }

//     if (
//       typeof IntersectionObserver ===
//       "undefined"
//     ) {
//       setShouldLoadPreview(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShouldLoadPreview(true);
//           observer.disconnect();
//         }
//       },
//       {
//         rootMargin: "180px 0px",
//         threshold: 0.01,
//       },
//     );

//     observer.observe(previewElement);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (shouldLoadPreview) {
//       setIsPreviewLoading(true);
//     }
//   }, [
//     activeVideo?.driveId,
//     shouldLoadPreview,
//   ]);

//   if (!activeVideo) {
//     return null;
//   }

//   const playVideo = () => {
//     onPlay(activeVideo, category.title);
//   };

//   const handlePreviewKeyDown = (
//     event: KeyboardEvent<HTMLDivElement>,
//   ) => {
//     if (
//       event.key === "Enter" ||
//       event.key === " "
//     ) {
//       event.preventDefault();
//       playVideo();
//     }
//   };

//   return (
//     <article
//       className="
//         flex h-full flex-col
//         overflow-hidden rounded-[24px]
//         bg-white p-5
//         shadow-[0_16px_45px_rgba(0,0,0,0.06)]
//         sm:p-6
//       "
//     >
//       <div>
//         <p
//           className="
//             text-[11px] font-bold uppercase
//             tracking-[0.2em] text-black/40
//           "
//         >
//           {category.type}
//         </p>

//         <h2
//           className="
//             mt-3
//             text-[clamp(1.7rem,2.6vw,2.5rem)]
//             font-black leading-[0.98]
//             tracking-[-0.045em]
//           "
//         >
//           {category.title}
//         </h2>

//         <p className="mt-3 text-sm text-black/45">
//           {category.videos.length} selected projects
//         </p>
//       </div>

//       <div
//         ref={previewRef}
//         role="button"
//         tabIndex={0}
//         onClick={playVideo}
//         onKeyDown={handlePreviewKeyDown}
//         className="
//           group relative mt-7
//           aspect-[16/10] cursor-pointer
//           overflow-hidden rounded-[20px]
//           bg-[#e8e8e8] outline-none
//           focus-visible:ring-4
//           focus-visible:ring-black/15
//         "
//         aria-label={`Play ${activeVideo.title}`}
//       >
//         {!shouldLoadPreview && (
//           <div
//             className="
//               absolute inset-0
//               animate-pulse bg-[#e6e6e6]
//             "
//           />
//         )}

//         {shouldLoadPreview && (
//           <>
//             {isPreviewLoading && (
//               <div
//                 className="
//                   absolute inset-0 z-10
//                   grid place-items-center
//                   bg-[#e8e8e8]
//                 "
//               >
//                 <LoaderCircle
//                   size={28}
//                   className="
//                     animate-spin text-black/40
//                   "
//                 />
//               </div>
//             )}

//             <iframe
//               key={activeVideo.driveId}
//               src={getDrivePreviewUrl(
//                 activeVideo.driveId,
//               )}
//               title={`${category.title} preview`}
//               loading="lazy"
//               tabIndex={-1}
//               aria-hidden="true"
//               onLoad={() =>
//                 setIsPreviewLoading(false)
//               }
//               className="
//                 pointer-events-none
//                 absolute inset-0
//                 h-full w-full
//               "
//               allow="autoplay; fullscreen"
//             />
//           </>
//         )}

//         <span
//           className="
//             pointer-events-none absolute inset-0
//             bg-gradient-to-t
//             from-black/75
//             via-transparent
//             to-black/5
//           "
//         />

//         <span
//           className="
//             pointer-events-none
//             absolute left-1/2 top-1/2
//             grid size-16
//             -translate-x-1/2
//             -translate-y-1/2
//             place-items-center
//             rounded-full bg-white
//             text-black
//             shadow-[0_14px_36px_rgba(0,0,0,0.22)]
//             transition-transform duration-300
//             group-hover:scale-110
//           "
//         >
//           <Play
//             size={22}
//             fill="currentColor"
//           />
//         </span>

//         <span
//           className="
//             pointer-events-none
//             absolute bottom-5
//             left-5 right-5
//             flex items-end
//             justify-between gap-5
//             text-white
//           "
//         >
//           <span>
//             <span
//               className="
//                 block text-[10px]
//                 font-bold uppercase
//                 tracking-[0.18em]
//                 text-white/50
//               "
//             >
//               Selected Project
//             </span>

//             <span
//               className="
//                 mt-2 block
//                 text-lg font-black
//               "
//             >
//               {activeVideo.title}
//             </span>
//           </span>

//           <span
//             className="
//               hidden text-xs
//               font-semibold text-white/55
//               sm:block
//             "
//           >
//             Click to Play
//           </span>
//         </span>
//       </div>

//       <div className="mt-5">
//         <p
//           className="
//             text-[10px] font-bold uppercase
//             tracking-[0.18em] text-black/35
//           "
//         >
//           Explore Projects
//         </p>

//         <div
//           className="
//             mt-3 flex gap-2
//             overflow-x-auto pb-2
//             [scrollbar-width:none]
//             [&::-webkit-scrollbar]:hidden
//           "
//         >
//           {category.videos.map(
//             (video, index) => {
//               const isActive =
//                 index === activeIndex;

//               return (
//                 <button
//                   key={video.id}
//                   type="button"
//                   onMouseEnter={() =>
//                     setActiveIndex(index)
//                   }
//                   onFocus={() =>
//                     setActiveIndex(index)
//                   }
//                   onClick={() =>
//                     setActiveIndex(index)
//                   }
//                   className={`
//                     shrink-0 rounded-full
//                     px-4 py-2.5
//                     text-xs font-bold
//                     transition-colors duration-200
//                     ${
//                       isActive
//                         ? `
//                           bg-black
//                           text-white
//                         `
//                         : `
//                           bg-[#f2f2f2]
//                           text-black/50
//                           hover:bg-black
//                           hover:text-white
//                         `
//                     }
//                   `}
//                   aria-label={`Preview ${video.title}`}
//                 >
//                   {String(index + 1).padStart(
//                     2,
//                     "0",
//                   )}
//                 </button>
//               );
//             },
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }

// export default MediaCategoryShowcase;

import {
  useEffect,
  useState,
} from "react";
import type { KeyboardEvent } from "react";
import {
  LoaderCircle,
  Play,
} from "lucide-react";
import type {
  MediaCategory,
  MediaVideo,
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
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isPosterLoading, setIsPosterLoading] =
    useState(true);

  const activeVideo =
    category.videos[activeIndex] ??
    category.videos[0];

  useEffect(() => {
    setIsPosterLoading(true);
  }, [activeVideo?.poster]);

  if (!activeVideo) {
    return null;
  }

  const playVideo = () => {
    onPlay(activeVideo, category.title);
  };

  const handlePreviewKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      playVideo();
    }
  };

  return (
    <article
  className="
    flex h-full w-full
    min-w-0 max-w-full flex-col
    overflow-hidden rounded-[24px]
    bg-white p-4
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
          {category.videos.length} selected projects
        </p>
      </div>

      {/* صورة محلية فقط — مفيش iframe ومفيش Google Drive thumbnail */}
     <div
  role="button"
  tabIndex={0}
  onClick={playVideo}
  onKeyDown={handlePreviewKeyDown}
  className="
    group relative mt-7
    aspect-[16/10] w-full
    max-w-full cursor-pointer
    overflow-hidden rounded-[20px]
    bg-[#FAFAFA] outline-none
    focus-visible:ring-4
    focus-visible:ring-black/15
  "
        aria-label={`Play ${activeVideo.title}`}
      >
        {isPosterLoading && (
          <span
            className="
              absolute inset-0 z-10
              grid place-items-center
              bg-[#e7e7e7]
            "
          >
            <LoaderCircle
              size={28}
              className="animate-spin text-black/35"
            />
          </span>
        )}

        <img
          key={activeVideo.poster}
          src={activeVideo.poster}
          alt={`${category.title} — ${activeVideo.title}`}
          loading="lazy"
          decoding="async"
          onLoad={() =>
            setIsPosterLoading(false)
          }
          onError={(event) => {
            setIsPosterLoading(false);
            event.currentTarget.src =
              "/images/media-production/hero-editing.png";
          }}
          className="
            absolute inset-0
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-[1.025]
          "
        />

        <span
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-black/75
            via-transparent
            to-black/5
          "
        />

        <span
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            grid size-16
            -translate-x-1/2
            -translate-y-1/2
            place-items-center
            rounded-full bg-white
            text-black
            shadow-[0_14px_36px_rgba(0,0,0,0.22)]
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          <Play
            size={22}
            fill="currentColor"
          />
        </span>

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
    mt-3 flex max-w-full
    gap-2 overflow-x-auto pb-2
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
                    setActiveIndex(index)
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
                  aria-label={`Preview ${video.title}`}
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