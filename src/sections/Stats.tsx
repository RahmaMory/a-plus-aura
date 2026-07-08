import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 2500,
    category: "VIDEOS",
    description: "Videos Produced",
  },
  {
    value: 100,
    category: "CLIENTS",
    description: "Happy Clients",
  },
  {
    value: 7,
    category: "INDUSTRIES",
    description: "Industries We Serve",
  },
  {
    value: 100,
    category: "CAMPAIGNS",
    description: "Managed for Clients",
  },
];

const animationDuration = 1800;

function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [displayValues, setDisplayValues] = useState<number[]>(
    stats.map(() => 0),
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const stopAnimation = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const startAnimation = () => {
      stopAnimation();
      setDisplayValues(stats.map(() => 0));

      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(
          elapsedTime / animationDuration,
          1,
        );

        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        setDisplayValues(
          stats.map((stat) =>
            Math.round(stat.value * easedProgress),
          ),
        );

        if (progress < 1) {
          animationFrameRef.current =
            requestAnimationFrame(animate);
        } else {
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
          setDisplayValues(stats.map(() => 0));
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white"
      aria-label="A Plus Aura achievements"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={stat.category}
              className={`
                relative flex min-h-[190px] flex-col justify-center
                px-5 py-10
                sm:min-h-[220px] sm:px-8 sm:py-12
                lg:min-h-[250px] lg:px-9 lg:py-14

                ${index % 2 === 1 ? "border-l border-white/15" : ""}
                ${index >= 2 ? "border-t border-white/15 lg:border-t-0" : ""}
                ${index > 0 ? "lg:border-l lg:border-white/15" : ""}
              `}
            >
              <strong
                className="
                  block min-h-[1em]
                  text-[clamp(2.5rem,4.5vw,4.5rem)]
                  font-extrabold leading-[0.95]
                  tracking-[-0.015em]
                  text-white
                  tabular-nums
                "
                style={{
                  fontVariantNumeric:
                    "tabular-nums lining-nums",
                  fontFeatureSettings:
                    '"tnum" 1, "lnum" 1',
                }}
              >
                {displayValues[index].toLocaleString(
                  "en-US",
                )}
              </strong>

              <div className="mt-3 flex items-center gap-2">
                <span
                  className="
                    text-xl font-black leading-none
                    text-white sm:text-2xl
                  "
                >
                  +
                </span>

                <span
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.16em] text-white
                    sm:text-sm
                  "
                >
                  {stat.category}
                </span>
              </div>

              <p
                className="
                  mt-3 max-w-[210px]
                  text-sm font-medium leading-6
                  text-white/50
                  sm:text-base
                "
              >
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;