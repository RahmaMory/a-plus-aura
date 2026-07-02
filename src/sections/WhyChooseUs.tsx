import { Check } from "lucide-react";

const reasons = [
  {
    title: "Everything in One Place",
    description:
      "Strategy, media buying, graphic design, and video content managed by one professional team.",
  },
  {
    title: "Results-Driven",
    description:
      "Every campaign is built around clear objectives, measurable performance, and continuous improvement.",
  },
  {
    title: "Strategy and Creativity Combined",
    description:
      "We combine data-driven planning with creative ideas that attract attention and strengthen your brand.",
  },
  {
    title: "Professional Creative Team",
    description:
      "A dedicated team focused on quality, consistency, communication, and organized delivery.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="
        scroll-mt-24 overflow-hidden
        bg-black py-16 text-white
        sm:py-20 lg:py-28
      "
    >
      <div
        className="
          mx-auto grid max-w-[1280px]
          items-center gap-14
          px-5 sm:px-8
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-20
        "
      >
        {/* المحتوى */}
        <div>
          <p
            className="
              text-xs font-bold uppercase
              tracking-[0.22em] text-white/45
            "
          >
            Why A Plus Aura
          </p>

          <h2
            className="
              mt-5 max-w-[520px]
              text-[clamp(3rem,6vw,6rem)]
              font-black leading-[0.88]
              tracking-[-0.065em]
            "
          >
            Why
            <span className="block">Choose</span>
            <span className="block">Us.</span>
          </h2>

          <div className="mt-7 h-[3px] w-20 bg-white/70" />

          {/* الأسباب */}
          <div className="mt-10">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="
                  group grid grid-cols-[48px_1fr]
                  gap-4 border-b border-white/15
                  py-6 first:pt-0
                  sm:grid-cols-[56px_1fr]
                "
              >
                <span
                  className="
                    grid size-11 place-items-center
                    rounded-full
                    border border-white/25
                    text-white
                    transition-all duration-300
                    group-hover:border-white
                    group-hover:bg-white
                    group-hover:text-black
                  "
                  aria-hidden="true"
                >
                  <Check size={18} strokeWidth={2.5} />
                </span>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {reason.title}
                  </h3>

                  <p
                    className="
                      mt-3 max-w-[520px]
                      text-sm leading-7 text-white/55
                      sm:text-[15px]
                    "
                  >
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* الصورة */}
        {/* الصورة */}
<div className="relative pb-6">
  {/* إضاءة محايدة خلف الصورة */}
  <div
    className="
      absolute -inset-10
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09),transparent_68%)]
      blur-3xl
    "
    aria-hidden="true"
  />

  <div
    className="
      group relative overflow-hidden
      border border-white/15
      bg-[#111111]
      shadow-[0_30px_90px_rgba(0,0,0,0.45)]
    "
  >
    <img
      src="/images/why-choose-us.png"
      alt="A Plus Aura creative marketing team"
      loading="lazy"
      decoding="async"
      className="
  aspect-[4/3] h-full w-full
  object-cover object-center

  scale-[1.18]
  brightness-[0.82]
  contrast-[1.05]
  saturate-[0.9]

  transform-gpu
  will-change-transform

  transition-[transform,filter]
  duration-[2200ms]
  ease-[cubic-bezier(0.45,0,0.55,1)]

  group-hover:scale-[1.04]
  group-hover:brightness-100
  group-hover:contrast-100
  group-hover:saturate-100
"
    />

    {/* طبقة داكنة تختفي بهدوء */}
   <div
  className="
    pointer-events-none absolute inset-0
    bg-gradient-to-t from-black/40 via-black/10 to-transparent
    transition-opacity
    duration-[2000ms]
    ease-in-out
    group-hover:opacity-0
  "
/>

    {/* إضاءة ناعمة تظهر عند الـHover */}
    <div
      className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.16),transparent_58%)]

        opacity-0
        transition-opacity
        duration-[1500ms]
        ease-out

        group-hover:opacity-100
      "
    />

    {/* Border داخلي بسيط */}
    <div
      className="
        pointer-events-none absolute inset-3
        border border-white/10
      "
    />
  </div>

  {/* العنصر أسفل الصورة */}
  <div
    className="
      absolute bottom-0 left-5
      border border-white/15
      bg-black px-5 py-4
      shadow-[0_20px_50px_rgba(0,0,0,0.45)]
      sm:left-8
    "
  >
    <strong className="block text-lg font-bold">
      One Team
    </strong>

    <span
      className="
        mt-1 block text-xs uppercase
        tracking-[0.16em] text-white/45
      "
    >
      Complete Marketing Solutions
    </span>
  </div>
</div>
      </div>
    </section>
  );
}

export default WhyChooseUs;