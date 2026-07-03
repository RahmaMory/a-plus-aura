import {
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clapperboard,
} from "lucide-react";
import DriveVideoModal from "../components/DriveVideoModal";
import MediaCategoryShowcase from "../components/MediaCategoryShowcase";
import {
  mediaProductionCategories,
  type MediaVideo,
} from "../data/mediaProductionWork";

type SelectedVideo = {
  video: MediaVideo;
  categoryTitle: string;
} | null;

const heroPreviewItems = [
  {
    title: "Engineering & Interior Design",
    image: "/images/media-production/hero-main.png",
  },
  {
    title: "Promo",
    image: "/images/media-production/hero-promo.png",
  },
  {
    title: "Commercial Promo",
    image: "/images/media-production/hero-commercial.png",
  },
  {
    title: "Motion Edits",
    image: "/images/media-production/hero-editing.png",
  },
];
const collageClasses = [
  "col-span-7 row-span-6",
  "col-span-5 row-span-3",
  "col-span-3 row-span-3",
  "col-span-2 row-span-3",
];

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

  return (
    <div className="min-h-screen bg-white text-black">
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
          <a
            href="/"
            className="inline-flex items-center"
            aria-label="A Plus Aura home"
          >
            <img
              src="/logo.png"
              alt="A Plus Aura"
              className="
                h-16 w-auto object-contain
                sm:h-20
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
        <section
          className="
            relative overflow-hidden
            bg-[#f5f5f5]
            py-16 sm:py-20 lg:py-24
          "
        >
          <div
            className="
              pointer-events-none absolute
              -right-56 -top-56
              size-[520px] rounded-full
              bg-white/80 blur-3xl
            "
          />

          <div
            className="
              mx-auto grid max-w-[1280px]
              items-center gap-12
              px-5 sm:px-8
              lg:grid-cols-[0.82fr_1.18fr]
              lg:gap-14
            "
          >
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
      +{totalVideos}
    </p>

    <p className="mt-1 text-xs text-black/40">
      Selected Projects
    </p>
  </div>
</div>
            </div>

            {/* Static collage using local images */}
            <div
              className="
                relative overflow-hidden
                rounded-[30px] bg-black
                p-2 shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                sm:p-3
              "
              aria-hidden="true"
            >
              <div
                className="
                  grid h-[350px]
                  grid-cols-12 grid-rows-6
                  gap-2 overflow-hidden
                  rounded-[23px]
                  sm:h-[430px]
                  lg:h-[500px]
                "
              >
                {heroPreviewItems.map(
                  (item, index) => (
                    <div
                      key={item.title}
                      className={`
                        relative overflow-hidden
                        bg-[#1a1a1a]
                        ${collageClasses[index]}
                      `}
                    >
                      <img
                        src={item.image}
                        alt=""
                        loading={
                          index < 2
                            ? "eager"
                            : "lazy"
                        }
                        decoding="async"
                        className="
                          h-full w-full 
                          opacity-90 scale-110
                          interest-0 blur-lg

                         
                        "
                      />

                      <span
                        className="
                          absolute inset-0
                          bg-gradient-to-t
                          from-black/60
                          via-transparent
                          to-black/10
                        "
                      />

                      <span
                        className="
                          absolute bottom-3
                          left-3 right-3
                          text-xs font-bold
                          text-white/90
                          sm:bottom-4 sm:left-4
                          sm:right-4 sm:text-sm
                        "
                      >
                        {item.title}
                      </span>
                    </div>
                  ),
                )}
              </div>

              <span
                className="
                  pointer-events-none absolute inset-0
                  rounded-[30px]
                  bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.68)_100%)]
                "
              />

              <span
                className="
                  pointer-events-none absolute
                  inset-x-0 bottom-0 h-36
                  bg-gradient-to-t
                  from-black/85 to-transparent
                "
              />

              <div
                className="
                  pointer-events-none absolute
                  bottom-6 left-6 right-6
                  flex items-end justify-between
                  gap-5 text-white
                  sm:bottom-8 sm:left-8 sm:right-8
                "
              >
                <div>
                  <p
                    className="
                      text-[10px] font-bold uppercase
                      tracking-[0.2em]
                      text-white/50
                    "
                  >
                    Selected Portfolio
                  </p>

                  <p
                    className="
                      mt-2 max-w-[390px]
                      text-xl font-black leading-tight
                      sm:text-2xl
                    "
                  >
                    Multiple Industries.
                    One Production Team.
                  </p>
                </div>

                <div
  className="
    shrink-0 rounded-full
    bg-white px-5 py-3
    text-center text-black
    shadow-lg
  "
>
  <p className="text-xl font-black">
    +{totalVideos}
  </p>

  <p
    className="
      text-[10px] font-bold uppercase
      tracking-[0.13em]
      text-black/45
    "
  >
    Projects
  </p>
</div>
              </div>
            </div>
          </div>
        </section>

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
