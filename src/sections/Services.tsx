import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Clapperboard,
  Layers3,
 
} from "lucide-react";

const featuredService = {
  title: "Full Marketing ",
  description:
    "A complete marketing solution for brands that need strategy, performance marketing, media buying, graphic design, and video editing managed together by one professional team.",
  image: "/images/service-full-package.png",
  icon: Layers3,
 href: "/services/full-marketing",
cta: "View Our Work",
};

const services = [
  {
    title: "Performance Marketing & Media Buying",
    description:
      "Data-driven campaigns built to reach the right audience, increase conversions, and maximize return on advertising spend.",
    image: "/images/service-performance.png",
    icon: ChartNoAxesCombined,
      href: "#contact",
  cta: "Request This Service",
  },
  {
  title: "Media Production",
  description:
    "Professional editing for reels, advertisements, promotional videos, and social content designed to hold attention.",
  image: "/images/service-video-editing.png",
  icon: Clapperboard,
  href: "/services/media-production",
  cta: "View Our Work",
},
];

function Services() {
  const FeaturedIcon = featuredService.icon;

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-[#FAFAFA] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* عنوان القسم */}
      {/* العنوان + الباكدج الرئيسية */}
{/* العنوان + الباكدج الرئيسية */}
<div className="grid items-stretch gap-10 lg:grid-cols-3 lg:gap-6">
  {/* عنوان القسم */}
  <div className="flex flex-col justify-start lg:col-span-1 lg:pt-20 xl:pt-24">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
      What We Do
    </p>

    <h2
      className="
        mt-4 max-w-[430px]
        text-[clamp(2.8rem,4.5vw,4.4rem)]
        font-black leading-[0.92]
        tracking-[-0.055em] text-black
      "
    >
      Our
      <span className="block">Services.</span>
    </h2>

    <p className="mt-6 max-w-[390px] text-base leading-7 text-black/60 sm:text-[17px]">
      Choose one specialized service or bring everything together through a
      complete marketing designed around your brand&apos;s goals.
    </p>

    <p className="mt-4 max-w-[390px] text-sm leading-7 text-black/50 sm:text-[15px]">
      Whether you need one campaign, ongoing creative support, or a complete
      marketing system, our team can build the right solution for your
      business.
    </p>
  </div>

  {/* Full Marketing Package */}
  <article
    className="
      group flex h-full flex-col
      border border-black/10 bg-white
      p-4 transition-all duration-500
      hover:-translate-y-2
      hover:border-black/20
      hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]
      lg:col-span-2
    "
  >
    {/* الصورة */}
    <div className="relative w-full overflow-hidden bg-[#e9e9e9]">
      <img
        src={featuredService.image}
        alt="Full marketing by A Plus Aura"
        loading="lazy"
        decoding="async"
        className="
          h-[180px] w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.04]
          sm:h-[210px]
          lg:h-[225px]
        "
      />

      <span
        className="
          absolute right-3 top-3
          grid size-11 place-items-center
          bg-black text-white
        "
        aria-hidden="true"
      >
        <FeaturedIcon size={20} strokeWidth={2} />
      </span>
    </div>

    {/* المحتوى */}
    <div className="flex flex-1 flex-col px-1 pb-2 pt-5 sm:px-2">
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-black/40">
        Complete Marketing Solution
      </p>

      <h3
        className="
          max-w-[650px]
          text-[clamp(1.9rem,3.3vw,3rem)]
          font-black leading-none
          tracking-[-0.04em] text-black
        "
      >
        {featuredService.title}
      </h3>

      <p className="mt-3 max-w-[720px] text-sm leading-6 text-black/60 sm:text-[15px]">
        {featuredService.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "Marketing Strategy",
          "Performance Marketing & Media Buying",
          
          "Video Editing",
        ].map((item) => (
          <span
            key={item}
            className="
              border border-black/15
              px-3 py-1.5
              text-xs font-medium text-black/65
            "
          >
            {item}
          </span>
        ))}
      </div>

      <a
  href={featuredService.href}
        className="
          mt-auto inline-flex w-fit items-center gap-2
          pt-5 text-sm font-bold text-black
        "
      >
        <span>{featuredService.cta}</span>

        <ArrowUpRight
          size={17}
          className="
            transition-transform duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </a>
    </div>
  </article>
</div>

        {/* الخدمات المنفصلة */}
       <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  group flex h-full flex-col
                  border border-black/10 bg-white
                  p-4 transition-all duration-500
                  hover:-translate-y-2
                  hover:border-black/20
                  hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]
                  sm:p-5 lg:p-6
                "
              >
                <div className="relative overflow-hidden bg-[#e9e9e9]">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    loading="lazy"
                    decoding="async"
                   className="
  h-[230px] w-full object-cover
  transition-transform duration-700 ease-out
  group-hover:scale-[1.05]
  sm:h-[260px]
  lg:h-[300px]
"
                  />

                  <span
                    className="
                      absolute right-3 top-3
                      grid size-11 place-items-center
                      bg-black text-white
                    "
                    aria-hidden="true"
                  >
                    <Icon size={19} strokeWidth={2} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-1 pb-2 pt-7">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-black/40">
                    Individual Service
                  </p>

                  <h3
                    className="
                      max-w-[340px]
                      text-2xl font-black
                      leading-[1.12]
                      tracking-[-0.035em]
                      text-black
                      sm:text-[28px]
                    "
                  >
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-black/60 sm:text-[15px]">
                    {service.description}
                  </p>

                  <a
  href={service.href}
  className="
    mt-auto inline-flex items-center gap-2
    pt-7 text-sm font-bold text-black
  "
>
  <span>{service.cta}</span>

  <ArrowUpRight
    size={17}
    className="
      transition-transform duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;