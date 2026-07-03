const firstClientRow = [
  "Galaxy Mall",
  "Happy Mall",
  "Emaar Solar",
  "Elghanam",
  "ZA Design",
  "Sky Construction",
  "Capri Mall",
];

const secondClientRow = [
  "Baraka Soft",
  "Squeez",
  "K40 Mall",
  "Print Point",
  "Batey",
  "Health Hub",
  "Vivo Planta",
];

type ClientMarqueeProps = {
  clients: string[];
  reverse?: boolean;
};

function ClientMarquee({
  clients,
  reverse = false,
}: ClientMarqueeProps) {
  return (
    <div
      className={`
        clients-marquee
        ${reverse ? "clients-marquee--reverse" : ""}
      `}
    >
      <div className="clients-marquee__track">
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="clients-marquee__group"
            aria-hidden={copyIndex === 1}
          >
            {clients.map((client, index) => (
              <div
                key={`${copyIndex}-${client}-${index}`}
                className="
                  flex min-h-[64px] min-w-[180px]
                  items-center justify-center
                  rounded-2xl
                  border border-black/10
                  bg-[#f6f6f6]
                  px-5 py-4
                  text-center text-sm
                  font-bold text-black/55
                  transition-colors duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                  sm:min-w-[210px]
                "
              >
                {client}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Clients() {
  return (
    <section
      id="clients"
      className="
        overflow-hidden
        border-y border-black/10
        bg-white py-16
        sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-8">
        <p
          className="
            text-xs font-bold uppercase
            tracking-[0.22em] text-black/40
          "
        >
          Our Clients
        </p>

        <h2
  className="
    mt-5
    text-[clamp(1.8rem,3.2vw,3.2rem)]
    font-black leading-[1]
    tracking-[-0.045em]
    text-black
  "
>
  Trusted by 160+
  <span className="text-black/40"> Companies</span>
</h2>
      
      </div>

      <div className="relative mt-12 space-y-4">
        {/* تدرج الجوانب */}
        <div
          className="
            pointer-events-none absolute
            inset-y-0 left-0 z-10
            w-16 bg-gradient-to-r
            from-white to-transparent
            sm:w-32
          "
        />

        <div
          className="
            pointer-events-none absolute
            inset-y-0 right-0 z-10
            w-16 bg-gradient-to-l
            from-white to-transparent
            sm:w-32
          "
        />

        {/* الشريط الأول */}
        <ClientMarquee clients={firstClientRow} />

        {/* الشريط الثاني في الاتجاه العكسي */}
        <ClientMarquee
          clients={secondClientRow}
          reverse
        />
      </div>
    </section>
  );
}

export default Clients;