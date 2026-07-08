import { useEffect, useState } from "react";
import {
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Layers3,
} from "lucide-react";
import ProjectFormModal from "../components/ui/ProjectFormModal";

type ClientIndustry = {
  title: string;
  description: string;
  logos: string[];
};

const clientIndustries: ClientIndustry[] = [
  {
    title: "Architecture & Construction",
    description:
      "Brands and businesses in architecture, decoration, construction, and development.",
    logos: [
      "/images/clients/arc1.jpg",
      "/images/clients/arc2.jpg",
      "/images/clients/arc3.jpg",
      "/images/clients/arc4.jpg",
      "/images/clients/arc5.jpg",
      "/images/clients/arc6.jpg",
      "/images/clients/arc7.jpg",
      "/images/clients/arc8.png",
      "/images/clients/arc9.jpg",
      "/images/clients/arc10.jpg",
    ],
  },
  {
    title: "Real Estate",
    description:
      "Real estate brands, malls, compounds, and property-focused businesses.",
    logos: [
      "/images/clients/real1.jpg",
      "/images/clients/real2.jpg",
      "/images/clients/real3.jpg",
      "/images/clients/real4.jpg",
      "/images/clients/real5.jpg",
      "/images/clients/real6.jpg",
      "/images/clients/real7.png",
    ],
  },
  {
    title: "Education",
    description:
      "Educational organizations, academies, training centers, and learning brands.",
    logos: [
      "/images/clients/edu1.png",
      "/images/clients/edu2.png",
      "/images/clients/edu3.jpg",
      "/images/clients/edu4.jpg",
    ],
  },
  {
    title: "Food & Beverage",
    description:
      "Restaurants, cafes, food products, and hospitality-related brands.",
    logos: [
      "/images/clients/food1.png",
      "/images/clients/food2.jpg",
      "/images/clients/food3.jpg",
      "/images/clients/food4.jpg",
    ],
  },
  {
    title: "Fashion & Lifestyle",
    description:
      "Fashion, lifestyle, retail, and consumer-focused brands.",
    logos: [
      "/images/clients/fashon1.jpg",
      "/images/clients/fashon2.jpg",
      "/images/clients/fashon3.jpg",
    ],
  },
  {
    title: "Services & Technology",
    description:
      "Service providers, software brands, agencies, and business solutions.",
    logos: [
      "/images/clients/serv1.jpg",
      "/images/clients/serv2.jpg",
      "/images/clients/serv3.jpg",
      "/images/clients/serv4.jpg",
      "/images/clients/serv5.jpg",
      "/images/clients/serv6.jpg",
      "/images/clients/serv7.jpg",
      "/images/clients/serv8.jpg",
      "/images/clients/serv9.jpg",
      "/images/clients/serv10.jpg",
      "/images/clients/serv11.png",
      "/images/clients/serv12.png",
    ],
  },
  {
    title: "Sports",
    description:
      "Sports-related businesses, fitness brands, and active lifestyle projects.",
    logos: [
      "/images/clients/sport1.jpg",
      "/images/clients/sport2.png",
      "/images/clients/sport3.png",
    ],
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function FullMarketingPage() {
  const [isProjectFormOpen, setIsProjectFormOpen] =
    useState(false);

  useEffect(() => {
    document.title =
      "Full Marketing Package | A Plus Aura";

    window.scrollTo(0, 0);
  }, []);

  const totalLogos = clientIndustries.reduce(
    (total, industry) =>
      total + industry.logos.length,
    0,
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <motion.header
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        className="
          sticky top-0 z-50
          border-b border-black/10
          bg-white/95 backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto flex min-h-[70px]
            max-w-[1280px]
            items-center justify-between
            gap-3 px-4
            sm:min-h-[78px]
            sm:gap-5 sm:px-8
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
                h-12 w-auto object-contain
                sm:h-16
              "
            />
          </a>

          <a
            href="/#services"
            className="
              group inline-flex shrink-0
              items-center gap-2
              rounded-full bg-black
              px-4 py-2.5
              text-xs font-semibold
              text-white
              transition-colors duration-300
              hover:bg-black/80
              sm:px-5 sm:py-3
              sm:text-sm
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
      </motion.header>

      <main>
        <section
          className="
            relative flex min-h-[620px]
            items-center overflow-hidden
            bg-[#FAFAFA]
            py-20 sm:py-24
            lg:min-h-[690px]
            lg:py-32
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
              mx-auto flex max-w-[1280px]
              justify-center px-5
              sm:px-8
            "
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="
                relative z-10 mx-auto
                flex max-w-[900px]
                flex-col items-center
                text-center
              "
            >
              <motion.p
                variants={fadeUp}
                className="
                  flex items-center justify-center
                  gap-3 text-xs font-bold
                  uppercase tracking-[0.22em]
                  text-black/40
                "
              >
                <Layers3 size={17} />
                Full Marketing
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="
                  mt-7 max-w-full
                  text-[clamp(3.1rem,12vw,7.8rem)]
                  font-black leading-[0.84]
                  tracking-[-0.065em]
                  text-black
                  sm:tracking-[-0.075em]
                "
              >
                Full Marketing

               
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="
                  mt-8 max-w-[620px]
                  text-base leading-8
                  text-black/55
                  sm:text-lg
                "
              >
                A complete marketing system covering strategy, performance,
                media buying, design, content, and media production for brands
                across multiple industries.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="
                  mt-9 flex flex-wrap
                  justify-center gap-3
                "
              >
                <motion.div
                  variants={scaleIn}
                  className="
                    rounded-2xl bg-white
                    px-6 py-4
                    shadow-[0_12px_35px_rgba(0,0,0,0.05)]
                  "
                >
                  <p className="text-2xl font-black">
                    {clientIndustries.length}
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    Industries
                  </p>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="
                    rounded-2xl bg-white
                    px-6 py-4
                    shadow-[0_12px_35px_rgba(0,0,0,0.05)]
                  "
                >
                  <p className="text-2xl font-black">
                    +{totalLogos}
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    Client Logos
                  </p>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="
                    rounded-2xl bg-white
                    px-6 py-4
                    shadow-[0_12px_35px_rgba(0,0,0,0.05)]
                  "
                >
                  <p className="text-2xl font-black">
                    +100
                  </p>

                  <p className="mt-1 text-xs text-black/40">
                    Happy Clients
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
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
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
              className="mb-10 sm:mb-12 lg:mb-14"
            >
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.22em]
                  text-black/40
                "
              >
                Full Marketing Portfolio
              </p>

              <h2
                className="
                  mt-4
                  text-[clamp(2.2rem,4.5vw,4.4rem)]
                  font-black leading-[0.94]
                  tracking-[-0.055em]
                "
              >
                Clients

                <span className="block text-black/35">
                  by Industry
                </span>
              </h2>
            </motion.div>

           <div
  className="
    flex w-full min-w-0
    flex-col gap-6
    overflow-visible
  "
>
              {clientIndustries.map((industry, index) => (
                <motion.article
                  key={industry.title}
                  initial={{
                    opacity: 0,
                    y: 34,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.22,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: (index % 2) * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                 className="
  grid h-full w-full
  min-w-0 max-w-full
  overflow-hidden
  rounded-[30px]
  border border-black/10
  bg-white p-5
  shadow-[0_16px_45px_rgba(0,0,0,0.055)]
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-[0_24px_65px_rgba(0,0,0,0.08)]
  sm:p-6 lg:grid-cols-[0.85fr_1.4fr]
  lg:gap-8 lg:p-8
"
                >
                <div>
  <h3
    className="
      mt-3
      text-[clamp(1.7rem,2.6vw,2.5rem)]
      font-black leading-[0.98]
      tracking-[-0.045em]
    "
  >
    {industry.title}
  </h3>

  <p
    className="
      mt-3 max-w-[560px]
      text-sm leading-7
      text-black/45
    "
  >
    {industry.description}
  </p>

  <span
    className="
      mt-5 inline-flex w-fit
      rounded-full border border-black/10
      bg-[#FAFAFA] px-4 py-2
      text-xs font-bold
      text-black/55
    "
  >
    {industry.logos.length} Clients
  </span>
</div>

                  <div
                   className="
  mt-7 grid grid-cols-2
  gap-3 sm:grid-cols-3
  lg:mt-0 lg:grid-cols-4
  xl:grid-cols-5
"
                  >
                  {industry.logos.map((logo, logoIndex) => {
  const needsDarkBackground =
    logo.includes("arc8.png");

  return (
    <div
      key={`${industry.title}-${logo}-${logoIndex}`}
      className={`
        group grid min-h-[112px]
        place-items-center
        rounded-[20px]
        border p-5
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]
        sm:min-h-[118px]
        ${
          needsDarkBackground
            ? `
              border-black/80
              bg-black
              hover:bg-black
            `
            : `
              border-black/10
              bg-[#FAFAFA]
              hover:border-black/20
              hover:bg-white
            `
        }
      `}
    >
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className={`
          max-h-14 max-w-[140px]
          object-contain
          transition-transform duration-300
          group-hover:scale-105
          sm:max-h-16
          sm:max-w-[155px]
          ${
            needsDarkBackground
              ? "drop-shadow-[0_8px_18px_rgba(255,255,255,0.22)]"
              : ""
          }
        `}
      />
    </div>
  );
})}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            bg-[#FAFAFA]
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
                  mt-4 max-w-[760px]
                  text-[clamp(2.2rem,4.5vw,4.6rem)]
                  font-black leading-[0.94]
                  tracking-[-0.055em]
                "
              >
                Need a Complete

                <span className="block text-black/35">
                  Marketing System?
                </span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsProjectFormOpen(true)
              }
              className="
                group inline-flex
                min-h-14 w-fit shrink-0
                items-center gap-3
                rounded-full bg-black
                px-7 py-4
                font-semibold text-white
                transition-colors duration-300
                hover:bg-black/80
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
            </button>
          </div>
        </motion.section>
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

      <ProjectFormModal
        isOpen={isProjectFormOpen}
        onClose={() =>
          setIsProjectFormOpen(false)
        }
      />
    </div>
  );
}

export default FullMarketingPage;