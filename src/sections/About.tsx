function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <div
        className="
          mx-auto grid max-w-[1280px]
          items-start gap-12
          px-5 sm:px-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-20
        "
      >
        {/* الصورة الثابتة أثناء الـ Scroll */}
        <div className="self-start lg:sticky lg:top-[110px]">
          <div className="group overflow-hidden bg-[#eeeeee]">
            <img
              src="/images/about-a-plus-aura.webp"
              alt="A Plus Aura creative production team"
              className="
  aspect-[4/5] max-h-[650px]
  h-full w-full object-cover
  transition-transform duration-700 ease-out
  group-hover:scale-[1.03]

"
            />
          </div>
        </div>

        {/* المحتوى */}
        <div>
          <p
            className="
              mb-6 text-xs font-bold uppercase
              tracking-[0.2em] text-black/45
            "
          >
            About A Plus Aura
          </p>

          <h2
            className="
              max-w-[720px]
              text-[clamp(2rem,3.5vw,3.6rem)]
              font-black leading-[1.08]
              tracking-[-0.045em]
              text-black
            "
          >
            A Plus Aura is a full-service marketing agency combining strategy,
            advertising, design, content and production to help brands grow and
            achieve measurable results.
          </h2>

          <p
            className="
              mt-7 max-w-[700px]
              text-base leading-8 text-black/65
              sm:text-[17px]
            "
          >
            We don&apos;t just execute tasks; we build complete marketing
            systems. By combining data-driven performance marketing with bold,
            attention-grabbing creative, we create a strong presence around
            your brand that attracts, engages, and converts.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
            <div className="border-l-2 border-black pl-5">
              <h3 className="text-lg font-bold text-black">
                Strategy First
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Every creative decision starts with your goals, audience, and
                market insights.
              </p>
            </div>

            <div className="border-l-2 border-black pl-5">
              <h3 className="text-lg font-bold text-black">
                Flawless Execution
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                From media buying and graphic design to video editing, our team
                manages the complete production process.
              </p>
            </div>
          </div>

          {/* محتوى إضافي لتوضيح حركة الـ Sticky */}
          <div className="mt-12 border-t border-black/10 pt-8">
            <h3 className="text-2xl font-bold text-black">
              One Team. One Direction.
            </h3>

            <p className="mt-4 max-w-[680px] text-base leading-8 text-black/65">
              Instead of working with separate teams for advertising, design,
              and content, A Plus Aura brings every part of your marketing
              together under one clear strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;