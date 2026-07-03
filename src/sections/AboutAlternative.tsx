import { Check } from "lucide-react";

const principles = [
  {
    title: "Goals Before Content",
    description:
      "We don’t start with content. We start with your business goals.",
  },
  {
    title: "Complete Systems",
    description:
      "We build complete marketing systems — content, ads, funnels, and CRM.",
  },
  {
    title: "Performance Only",
    description:
      "Every decision is based on performance, not assumptions.",
  },
];

function AboutAlternative() {
  return (
    <section
      id="about-alternative"
      className="
        border-t border-black/10
        bg-white py-16
        sm:py-20
        lg:py-28
      "
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* العنوان والمقدمة */}
        <div className="mx-auto max-w-[900px] text-center">
          <p
            className="
              text-xs font-bold uppercase
              tracking-[0.22em] text-black/40
            "
          >
            About A Plus
          </p>

        <h2
  className="
    mt-6
    text-[clamp(2rem,3.8vw,3.6rem)]
    font-black leading-[1]
    tracking-[-0.045em]
    text-black
  "
>
  When a Business Grows,
  <span className="block text-black/45">
    Communities Grow With It.
  </span>
</h2>

          <div
            className="
              mx-auto mt-9 max-w-[800px]
              space-y-5
              text-base leading-8 text-black/60
              sm:text-[17px]
            "
          >
            <p>
              A Plus was founded in 2024 by Ahmed Mabrouk and Abdelrahman Hany
              in Egypt. We are a marketing and media production company that
              helps businesses grow through strategy, content, and full-stack
              marketing systems.
            </p>

            <p>
              We believe when a business grows, entire communities grow with
              it — creating opportunities for families, professionals, and
              industries. That&apos;s why we focus on{" "}
              <strong className="font-bold text-black">
                results, not vanity metrics.
              </strong>
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div
          className="
            mx-auto mt-14 grid max-w-[900px]
            gap-5 md:grid-cols-2
          "
        >
          <article
            className="
              border border-black/15
              bg-[#f5f5f5] p-7
              transition-all duration-300
              hover:-translate-y-1
              hover:border-black
              hover:bg-white
                rounded-lg
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              sm:p-9
            "
          >
            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.2em] text-black/40
              "
            >
              Mission
            </p>

            <p
              className="
                mt-5 text-lg font-semibold
                leading-8 text-black
              "
            >
              To help businesses grow using powerful marketing systems that
              generate real revenue.
            </p>
          </article>

          <article
            className="
              border border-black/15
              bg-[#f5f5f5] p-7
              transition-all duration-300
              hover:-translate-y-1
              hover:border-black
              hover:bg-white
                rounded-lg
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              sm:p-9
            "
          >
            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.2em] text-black/40
              "
            >
              Vision
            </p>

            <p
              className="
                mt-5 text-lg font-semibold
                leading-8 text-black
              "
            >
              To become the leading marketing systems company in the Middle
              East.
            </p>
          </article>
        </div>

        {/* المبادئ */}
        <div
          className="
            mt-12 grid gap-5
            md:grid-cols-3
          "
        >
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="
                group border border-black/10
                bg-white p-6
                transition-all duration-300
                rounded-lg
                
                hover:shadow-[0_22px_55px_rgba(0,0,0,0.16)]
                sm:p-7
              "
            >
              <div className="flex items-start gap-4">
                <span
                  className="
                    mt-0.5 grid size-8 shrink-0
                    place-items-center
                    border border-black/15
                    bg-[#f2f2f2] text-black
                    transition-colors duration-300
                  
                  "
                >
                  <Check size={16} strokeWidth={2.5} />
                </span>

                <div>
                  <h3 className="text-base font-bold">
                    {principle.title}
                  </h3>

                  <p
                    className="
                      mt-2 text-sm leading-6
                      text-black/55
                      transition-colors duration-300
                    
                    "
                  >
                    {principle.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutAlternative;