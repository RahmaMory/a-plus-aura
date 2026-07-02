import { ArrowRight } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink";
function HeroVisual() {
  return (
   <div
  className="
    relative min-h-[440px] overflow-hidden bg-[#e9e9e9]
    sm:min-h-[560px]
    lg:min-h-[670px]
  "
>
      {/* الخلفية الخفيفة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_38%,rgba(255,255,255,0.9),transparent_42%)]" />

    {/* الصورة الخلفية */}
<div
  className="
    absolute right-[7%] top-[12%] z-10
    w-[66%] overflow-hidden
    rotate-[3deg]
    bg-white p-2
    shadow-[0_28px_60px_rgba(0,0,0,0.18)]
    transition-all duration-500 ease-out
    transform-gpu
    hover:z-30
    hover:rotate-0
    hover:scale-[1.025]
    hover:shadow-[0_36px_80px_rgba(0,0,0,0.24)]
    sm:p-3
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
    absolute bottom-[12%] left-[19%] z-20
    w-[60%] overflow-hidden
    -rotate-[6deg]
    bg-white p-2
    shadow-[0_32px_70px_rgba(0,0,0,0.24)]
    transition-all duration-500 ease-out
    transform-gpu
    hover:z-30
    hover:rotate-0
    hover:scale-[1.025]
    hover:shadow-[0_40px_90px_rgba(0,0,0,0.3)]
    sm:p-3
  "
>
  <img
    src="/images/hero-campaign-front.png"
    alt="Creative marketing campaign by A Plus Aura"
    className="aspect-[4/3] h-full w-full object-cover"
  />
</div>
      {/* ظل بسيط تحت الصور */}
      <div className="absolute bottom-[8%] left-[22%] h-10 w-[55%] rounded-full bg-black/10 blur-2xl" />
    </div>
  );
}

function Hero() {
  return (
   <section
  id="home"
  className="bg-white pb-8 sm:pb-12 lg:pb-20"
>
      <div
        className="
          mx-auto grid max-w-[1280px]
          lg:min-h-[670px]
          lg:grid-cols-[1fr_1fr]
        "
      >
        <div
          className="
            flex items-center
            px-5 py-14
            sm:px-8 sm:py-20
            lg:px-12 lg:py-20
          "
        >
          <div className="w-full">
            <h1
              className="
                max-w-[680px]
                text-[clamp(3rem,5.2vw,5.2rem)]
                font-black
                leading-[0.92]
                tracking-[-0.06em]
                text-black
              "
            >
              <span className="block">Your Complete</span>
              <span className="block">Marketing Partner</span>
              <span className="block">for Growth,</span>
              <span className="block">Creativity, and</span>
              <span className="block">Results.</span>
            </h1>

            <p
              className="
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

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
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