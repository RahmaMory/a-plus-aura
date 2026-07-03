import { ArrowRight } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink";

function HeroVisual() {
  return (
 
     <div
  className="
    relative z-10
    min-h-[440px] overflow-hidden
    bg-[#e2e2e2]
    sm:min-h-[560px]
    lg:-ml-12
    lg:min-h-[670px]
    lg:w-[calc(100%+3rem)]
  "
>
      {/* إضاءة خلفية خفيفة */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_65%_38%,rgba(255,255,255,0.65),transparent_45%)]
        "
      />

      {/* الصورة الخلفية */}
      <div
        className="
          absolute right-[5%] top-[11%] z-10
          w-[67%] overflow-hidden
          rotate-[3deg]
          bg-[#d4d4d4] p-1
          ring-1 ring-black/10
          shadow-[0_28px_60px_rgba(0,0,0,0.18)]
          transition-all duration-500 ease-out
          transform-gpu
          hover:z-20
          hover:rotate-0
          hover:scale-[1.025]
          hover:shadow-[0_36px_80px_rgba(0,0,0,0.24)]
          sm:p-1.5
        "
      >
        <img
          src="/images/hero-campaign-back.png"
          alt="A Plus Aura marketing campaign"
          className="aspect-[4/3] h-full w-full object-cover"
        />
      </div>

      {/* الصورة الأمامية */}
      <div
        className="
          absolute bottom-[11%] left-[10%] z-20
          w-[62%] overflow-hidden
          -rotate-[6deg]
          bg-[#d4d4d4] p-1
          ring-1 ring-black/10
          shadow-[0_32px_70px_rgba(0,0,0,0.24)]
          transition-all duration-500 ease-out
          transform-gpu
          hover:z-20
          hover:rotate-0
          hover:scale-[1.025]
          hover:shadow-[0_40px_90px_rgba(0,0,0,0.3)]
          sm:p-1.5
        "
      >
        <img
          src="/images/hero-campaign-front.png"
          alt="Creative marketing campaign by A Plus Aura"
          className="aspect-[4/3] h-full w-full object-cover"
        />
      </div>

      {/* ظل الصور */}
      <div
        className="
          pointer-events-none absolute
          bottom-[7%] left-[20%]
          h-10 w-[58%]
          rounded-full bg-black/10 blur-2xl
        "
      />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="isolate bg-white pb-8 sm:pb-12 lg:pb-20"
    >
      <div
        className="
          mx-auto grid max-w-[1280px]
          lg:min-h-[670px]
          lg:grid-cols-2
        "
      >
        {/* المحتوى */}
        <div
          className="
            relative z-30 flex items-center
            px-5 py-14
            sm:px-8 sm:py-20
            lg:px-12 lg:py-20
          "
        >
          <div className="w-full overflow-visible">
            <h1
  className="
    relative z-30
    max-w-[680px]
    text-[clamp(3rem,5.2vw,5.2rem)]
    font-black
    leading-[0.92]
    tracking-[-0.06em]
    text-black
    lg:w-[122%]
    lg:max-w-none
  "
>
              <span className="block">
                Your Complete
              </span>

              <span className="block lg:w-max">
                Marketing Partner
              </span>

              <span className="block">
                for Growth,
              </span>

              <span className="block lg:w-max">
                Creativity, and
              </span>

              <span className="block">
                Results.
              </span>
            </h1>

            <p
              className="
                relative z-30
                mt-8 max-w-[590px]
                text-base leading-7
                text-black/65
                sm:text-[17px]
              "
            >
              A Plus Aura helps brands grow through performance marketing,
              media buying, graphic design, professional video editing, and
              complete marketing packages.
            </p>

            <div
              className="
                relative z-30 mt-9
                flex flex-col gap-3
                sm:flex-row sm:items-center sm:gap-4
              "
            >
              <ButtonLink
                href="#contact"
                className="group min-w-[185px] gap-2"
              >
                <span>Start Your Project</span>

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </ButtonLink>

              <ButtonLink
                href="#services"
                variant="secondary"
                className="min-w-[185px]"
              >
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;