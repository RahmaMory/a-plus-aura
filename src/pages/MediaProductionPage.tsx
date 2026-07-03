import {
  useCallback,
  useEffect,
  useState,
} from "react";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clapperboard,
} from "lucide-react";
import DriveVideoModal from "../components/DriveVideoModal";
import MediaCategoryShowcase from "../components/MediaCategoryShowcase";
import {
  getDrivePreviewUrl,
  mediaProductionCategories,
  type MediaVideo,
} from "../data/mediaProductionWork";

type SelectedVideo = {
  video: MediaVideo;
  categoryTitle: string;
} | null;

function MediaProductionPage() {
  const [selectedVideo, setSelectedVideo] =
    useState<SelectedVideo>(null);

  useEffect(() => {
    document.title =
      "Media Production | A Plus Aura";

    window.scrollTo(0, 0);
  }, []);

  const openVideo = useCallback(
    (
      video: MediaVideo,
      categoryTitle: string,
    ) => {
      setSelectedVideo({
        video,
        categoryTitle,
      });
    },
    [],
  );

  const closeVideo = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  const totalVideos =
    mediaProductionCategories.reduce(
      (total, category) =>
        total + category.videos.length,
      0,
    );

  /*
    نأخذ أول فيديو من 5 أقسام مختلفة
    لعرضهم في شكل الكوتشينة داخل الـHero
  */
  const heroCards = mediaProductionCategories
    .filter((category) => category.videos.length > 0)
    .slice(0, 5)
    .map((category) => ({
      categoryTitle: category.title,
      video: category.videos[0],
    }));

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header
        className="
          sticky top-0 z-50
          border-b border-black/10
          bg-white/95 backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto flex min-h-[78px]
            max-w-[1280px]
            items-center justify-between
            gap-5 px-5 sm:px-8
          "
        >
          {/* اللوجو فقط بدل الاسم */}
         <a
  href="/"
  className="inline-flex items-center"
  aria-label="A Plus Aura home"
>
  <img
    src="/logo.png"
    alt="A Plus Aura"
    className="
      h-20 w-auto object-contain
      sm:h-24 
    "
  />
</a>
          <a
            href="/#services"
            className="
              group inline-flex items-center
              gap-2 rounded-full
              bg-black px-5 py-3
              text-sm font-semibold text-white
            "
          >
            <ArrowLeft
              size={17}
              className="
                transition-transform duration-300
                group-hover:-translate-x-1
              "
            />

            Back to Services
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="
            relative overflow-hidden
            bg-[#f5f5f5]
            py-16 sm:py-20 lg:py-24
          "
        >
          <div
            className="
              pointer-events-none
              absolute -right-56 -top-56
              size-[520px] rounded-full
              bg-white/80 blur-3xl
            "
          />

          <div
            className="
              mx-auto grid max-w-[1280px]
              items-center gap-12
              px-5 sm:px-8
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-12
            "
          >
            {/* Hero Content */}
            <div className="relative z-10">
              <p
                className="
                  flex items-center gap-3
                  text-xs font-bold uppercase
                  tracking-[0.22em]
                  text-black/40
                "
              >
                <Clapperboard size={17} />
                Our Work
              </p>

              <h1
                className="
                  mt-7
                  text-[clamp(3.5rem,7vw,7rem)]
                  font-black leading-[0.82]
                  tracking-[-0.07em]
                  text-black
                "
              >
                Media

                <span className="block text-black/35">
                  Production.
                </span>
              </h1>

              <p
                className="
                  mt-8 max-w-[550px]
                  text-base leading-8
                  text-black/55
                  sm:text-lg
                "
              >
                Selected work organized by industry
                and content format.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <div
                  className="
                    rounded-2xl bg-white
                    px-6 py-4
                    shadow-[0_12px_35px_rgba(0,0,0,0.05)]
                  "
                >
                  <p className="text-2xl font-black">
                    {mediaProductionCategories.length}
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    Categories
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl bg-white
                    px-6 py-4
                    shadow-[0_12px_35px_rgba(0,0,0,0.05)]
                  "
                >
                  <p className="text-2xl font-black">
                    {totalVideos}+
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    Selected Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Card Fan */}
            <div
              className="
                relative h-[360px]
                sm:h-[430px]
                lg:h-[500px]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute left-1/2 top-1/2
                  h-[230px] w-[330px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-black/[0.06] blur-3xl
                  sm:h-[300px] sm:w-[470px]
                "
              />

              {heroCards.map((item, index) => {
                const middle =
                  (heroCards.length - 1) / 2;

                const position = index - middle;

                const cardStyle: CSSProperties = {
                  transform: `
                    translateX(-50%)
                    translateX(${position * 54}px)
                    translateY(${Math.abs(position) * 16}px)
                    rotate(${position * 7}deg)
                  `,
                  zIndex: 20 + index,
                };

                return (
                  <button
                    key={`${item.categoryTitle}-${item.video.id}`}
                    type="button"
                    onClick={() =>
                      openVideo(
                        item.video,
                        item.categoryTitle,
                      )
                    }
                    style={cardStyle}
                    className="
                      group absolute
                      left-1/2 top-4
                      aspect-[9/14]
                      w-[135px]
                      overflow-hidden
                      rounded-[20px]
                      bg-black text-left
                      shadow-[0_25px_60px_rgba(0,0,0,0.2)]
                      transition-[box-shadow,filter]
                      duration-300
                      hover:!z-50
                      hover:brightness-105
                      hover:shadow-[0_35px_80px_rgba(0,0,0,0.3)]
                      sm:top-6 sm:w-[175px]
                      lg:top-10 lg:w-[205px]
                    "
                    aria-label={`Play ${item.categoryTitle}`}
                  >
                    <iframe
                      src={getDrivePreviewUrl(
                        item.video.driveId,
                      )}
                      title={`${item.categoryTitle} preview`}
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
                        from-black/90
                        via-black/5
                        to-black/10
                      "
                    />

                    <span
                      className="
                        pointer-events-none
                        absolute bottom-4
                        left-4 right-4
                        text-white
                      "
                    >
                      <span
                        className="
                          block text-[9px]
                          font-bold uppercase
                          tracking-[0.17em]
                          text-white/50
                        "
                      >
                        Selected Work
                      </span>

                      <span
                        className="
                          mt-2 block
                          text-sm font-black
                          leading-tight
                          sm:text-base
                        "
                      >
                        {item.categoryTitle}
                      </span>
                    </span>
                  </button>
                );
              })}

              <div
                className="
                  pointer-events-none
                  absolute bottom-1 left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  text-center
                "
              >
                <p
                  className="
                    text-[10px] font-bold uppercase
                    tracking-[0.2em]
                    text-black/35
                  "
                >
                  Explore Selected Work
                </p>

                <p className="mt-2 text-sm font-semibold text-black/60">
                  Click any card to play
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section
          className="
            bg-white py-16
            sm:py-20 lg:py-28
          "
        >
          <div
            className="
              mx-auto max-w-[1280px]
              px-5 sm:px-8
            "
          >
            <div className="mb-10 sm:mb-12 lg:mb-14">
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.22em]
                  text-black/40
                "
              >
                Media Production Portfolio
              </p>

              <h2
                className="
                  mt-4
                  text-[clamp(2.2rem,4.5vw,4.4rem)]
                  font-black leading-[0.94]
                  tracking-[-0.055em]
                "
              >
                Selected Work

                <span className="block text-black/35">
                  by Category.
                </span>
              </h2>
            </div>

            <div
              className="
                grid gap-6
                lg:grid-cols-2
              "
            >
              {mediaProductionCategories.map(
                (category) => (
                  <MediaCategoryShowcase
                    key={category.id}
                    category={category}
                    onPlay={openVideo}
                  />
                ),
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="
            bg-[#f5f5f5]
            py-16 sm:py-20
          "
        >
          <div
            className="
              mx-auto flex max-w-[1280px]
              flex-col gap-8
              px-5 sm:px-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.2em]
                  text-black/40
                "
              >
                Start Your Project
              </p>

              <h2
                className="
                  mt-4 max-w-[720px]
                  text-[clamp(2.2rem,4.5vw,4.6rem)]
                  font-black leading-[0.94]
                  tracking-[-0.055em]
                "
              >
                Need Media Production

                <span className="block text-black/35">
                  for Your Brand?
                </span>
              </h2>
            </div>

            <a
              href="/#contact"
              className="
                group inline-flex
                min-h-14 w-fit
                shrink-0 items-center
                gap-3 rounded-full
                bg-black px-7 py-4
                font-semibold text-white
              "
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 text-white">
        <div
          className="
            mx-auto flex max-w-[1280px]
            flex-col gap-4 px-5
            text-sm text-white/45
            sm:px-8 md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} A Plus Aura.
            All rights reserved.
          </p>

          <a
            href="/#services"
            className="
              transition-colors
              hover:text-white
            "
          >
            Back to Services
          </a>
        </div>
      </footer>

      <DriveVideoModal
        video={selectedVideo?.video ?? null}
        categoryTitle={
          selectedVideo?.categoryTitle ?? ""
        }
        onClose={closeVideo}
      />
    </div>
  );
}

export default MediaProductionPage;