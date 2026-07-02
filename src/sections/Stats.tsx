const stats = [
  {
    value: "100+",
    label: "Clients",
  },
  {
    value: "2,500+",
    label: "Videos Produced",
  },
];

function Stats() {
  return (
    <section
      className="w-full bg-black text-white"
      aria-label="A Plus Aura achievements"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group relative flex min-h-[220px]
                flex-col justify-center
                py-12
                sm:min-h-[250px] sm:py-14
                lg:min-h-[300px] lg:py-16

                ${
                  index === 0
                    ? "pr-5 sm:pr-10 lg:pr-16"
                    : "pl-5 sm:pl-10 lg:pl-16"
                }
              `}
            >
              {/* الفاصل بين الرقمين */}
              {index === 1 && (
                <span
                  className="
                    absolute bottom-[18%] left-0 top-[18%]
                    w-px bg-white/20
                  "
                  aria-hidden="true"
                />
              )}

           <strong
  className="
    text-[clamp(2.2rem,5vw,4.5rem)]
    font-black
    leading-none
    tracking-[-0.04em]
  "
>
  {stat.value}
</strong>
              <span
                className="
                  mt-4 text-base font-semibold
                  text-white/65
                  sm:mt-5 sm:text-xl
                  lg:text-2xl
                "
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;