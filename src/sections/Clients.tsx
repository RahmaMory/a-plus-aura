type ClientItem = {
  name: string;
  logo: string;
};

const firstClientRow: ClientItem[] = [
  {
    name: "ar1",
    logo: "/images/clients/arc1.jpg",
  },
  {
    name: "arc2",
    logo: "/images/clients/arc2.jpg",
  },
  {
    name: "real1",
    logo: "/images/clients/real1.jpg",
  },
  {
    name: "edu1",
    logo: "/images/clients/edu1.png",
  },
  {
    name: "fashon1",
    logo: "/images/clients/fashon1.jpg",
  },
  {
    name: "food1",
    logo: "/images/clients/food1.png",
  },
  {
    name: "serv7",
    logo: "/images/clients/serv7.jpg",
  },
];

const secondClientRow: ClientItem[] = [
{
    name: "real1",
    logo: "/images/clients/real4.jpg",
  },
  {
    name: "real6",
    logo: "/images/clients/real6.jpg",
  },
  {
    name: "arc5",
    logo: "/images/clients/arc5.jpg",
  },
  {
    name: "sport1",
    logo: "/images/clients/sport1.jpg",
  },
  {
    name: "serv6",
    logo: "/images/clients/serv6.jpg",
  },
  {
    name: "edu3",
    logo: "/images/clients/edu3.jpg",
  },
  {
    name: "serv1",
    logo: "/images/clients/serv1.jpg",
  },
];

type ClientMarqueeProps = {
  clients: ClientItem[];
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
                key={`${copyIndex}-${client.name}-${index}`}
                className="
                 group flex min-h-[96px]
min-w-[220px] items-center
justify-center rounded-[28px]
border border-black/10
bg-white px-7 py-5
shadow-[0_14px_40px_rgba(0,0,0,0.055)]
transition-all duration-300
hover:-translate-y-0.5
hover:border-black/25
hover:bg-[#FAFAFA]
hover:shadow-[0_20px_55px_rgba(0,0,0,0.09)]
sm:min-w-[250px]
                "
               
              >
                <img
  src={client.logo}
  alt={client.name}
  loading="lazy"
  decoding="async"
  className="
    max-h-12 max-w-[150px]
    object-contain
    opacity-95
    transition-all duration-300
    group-hover:scale-105
    group-hover:opacity-100
    sm:max-h-14
    sm:max-w-[170px]
  "
/>
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
          Trusted by 100+
          <span className="text-black/40"> Companies</span>
        </h2>
      </div>

      <div className="relative mt-12 space-y-4">
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

        <ClientMarquee clients={firstClientRow} />

        <ClientMarquee
          clients={secondClientRow}
          reverse
        />
      </div>
    </section>
  );
}

export default Clients;