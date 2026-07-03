
const navigationLinks = [
  
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Full Marketing Package",
  "Performance Marketing & Media Buying",
  "Graphic Design",
  "Video Editing",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/a_plus_aura",
    icon: "/icons/instagram.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/aplusaura",
    icon: "/icons/facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/a-plus-aura/",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201557642021",
    icon: "/icons/whatsapp.svg",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@a_plus_aura",
    icon: "/icons/brand-tiktok.svg",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      {/* Main footer */}
      <div
        className="
          mx-auto grid max-w-[1280px]
          gap-12 px-5 py-14
          sm:px-8 sm:py-16
          md:grid-cols-2
          lg:grid-cols-[1.4fr_0.65fr_1fr]
          lg:gap-16 lg:py-20
        "
      >
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <a
            href="#home"
            aria-label="A Plus Aura home"
            className="inline-flex"
          >
            <img
              src="/logo.png"
              alt="A Plus Aura"
              className="
                h-auto w-[155px] object-contain
                brightness-0 invert
                sm:w-[180px]
              "
            />
          </a>

          <p className="mt-7 max-w-[410px] text-sm leading-7 text-white/55">
            A Plus Aura is a full-service marketing agency combining strategy,
            advertising, design, and video content to help brands grow and
            achieve measurable results.
          </p>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="
                  group grid size-11 place-items-center
                  border border-white/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white
                "
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  className="
                    size-[18px] object-contain
                    brightness-0 invert
                    transition duration-300
                    group-hover:invert-0
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3
            className="
              text-xs font-bold uppercase
              tracking-[0.18em] text-white/40
            "
          >
            Navigation
          </h3>

          <div className="mt-4 h-px w-10 bg-white/30" />

          <ul className="mt-6 space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    text-sm font-medium text-white/60
                    transition-colors duration-200
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3
            className="
              text-xs font-bold uppercase
              tracking-[0.18em] text-white/40
            "
          >
            Services
          </h3>

          <div className="mt-4 h-px w-10 bg-white/30" />

          <ul className="mt-6 space-y-4">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="
                    inline-block max-w-[280px]
                    text-sm font-medium leading-6
                    text-white/60
                    transition-colors duration-200
                    hover:text-white
                  "
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto flex max-w-[1280px]
            flex-col gap-5 px-5 py-6
            sm:px-8
            md:flex-row md:items-center
            md:justify-between
          "
        >
          <p className="text-xs text-white/40">
            © {currentYear} A Plus Aura. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
             href="/privacy-policy"
              className="
                text-xs text-white/40
                transition-colors duration-200
                hover:text-white
              "
            >
              Privacy Policy&Termes
            </a>

           
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;