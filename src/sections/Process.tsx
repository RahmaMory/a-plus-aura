const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep-dive into your business, goals, target audience, and competitors.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A data-driven marketing plan tailored to your growth objectives and budget.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "High-quality content production, campaign launch, and systems deployment.",
  },
  {
    number: "04",
    title: "Scale & Grow",
    description:
      "Optimize based on data. Scale what works. Grow your revenue consistently.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="
        relative overflow-hidden
        bg-[#FAFAFA] py-16
        text-black
        sm:py-20
        lg:py-28
      "
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* العنوان */}
        <div className="mx-auto max-w-[750px] text-center">
          <p
            className="
              text-xs font-bold uppercase
              tracking-[0.22em]
              text-black/40
            "
          >
            Our Process
          </p>

          <h2
            className="
              mt-5
              text-[clamp(2rem,3.5vw,3.4rem)]
              font-black leading-[0.98]
              tracking-[-0.05em]
              text-black
            "
          >
            How We Turn Strategy

            <span className="block text-black/40">
  Into Revenue
</span>
          </h2>
        </div>

        {/* الـTimeline */}
        <div className="relative mt-14 lg:mt-20">
          {/* الخط الأفقي على اللابتوب */}
          <div
            className="
              absolute left-[12.5%] right-[12.5%]
              top-7 hidden h-px
              bg-black/15
              sm:block
            "
          />

          {/* الخط الرأسي على الموبايل */}
          <div
            className="
              absolute bottom-7 left-7 top-7
              w-px bg-black/15
              sm:hidden
            "
          />

          <div
            className="
              relative grid gap-10
              sm:grid-cols-2
              sm:gap-x-8 sm:gap-y-14
              lg:grid-cols-4
              lg:gap-6
            "
          >
            {processSteps.map((step, index) => {
              const isLastStep = index === processSteps.length - 1;

              return (
                <article
                  key={step.number}
                  className="
                    relative grid
                    grid-cols-[56px_minmax(0,1fr)]
                    items-start gap-5
                    sm:block sm:text-center
                  "
                >
               <span
  className={`
    relative z-10
    grid size-14 place-items-center
    rounded-full
    text-base font-black
    ${
      isLastStep
        ? `
          bg-black
          text-white
          shadow-[0_10px_28px_rgba(0,0,0,0.18)]
        `
        : `
          bg-[#FAFAFA]
          text-black/55
          shadow-[inset_0_0_0_1.5px_rgba(0,0,0,0.22)]
        `
    }
    sm:mx-auto
  `}
>
  {step.number}
</span>

                  <div className="pt-1 sm:pt-0">
                    <h3
                      className="
                        text-base font-bold
                        tracking-[-0.02em]
                        sm:mt-6
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2 max-w-[290px]
                        text-sm leading-6
                        text-black/50
                        sm:mx-auto
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;