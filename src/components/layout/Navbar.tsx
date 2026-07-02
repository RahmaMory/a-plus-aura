import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <nav
        className="
          mx-auto flex h-[80px] max-w-[1280px]
          items-center justify-between gap-6
          px-5 sm:px-8
        "
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-50 flex shrink-0 items-center"
          aria-label="A Plus Aura home"
        >
          <img
            src="/logo.png"
            alt="A Plus Aura"
            className="
              h-auto w-[135px] object-contain
              sm:w-[150px]
              lg:w-[165px]
            "
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                py-3 text-sm font-medium
                text-black/65
                transition-colors duration-200
                hover:font-bold hover:text-black
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="
            hidden min-h-11 shrink-0
            items-center justify-center
            bg-black px-6 py-3
            text-sm font-semibold text-white
            transition-colors duration-300
            hover:bg-black/80
            lg:inline-flex
          "
        >
          Start Your Project
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="
            relative z-50 grid size-11 shrink-0
            place-items-center
            border border-black/15
            bg-white text-black
            transition-colors duration-300
            hover:bg-black hover:text-white
            lg:hidden
          "
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`
          overflow-hidden border-t border-black/10
          bg-white transition-all
          duration-300 ease-in-out
          lg:hidden
          ${
            isMenuOpen
              ? "max-h-[620px] translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 border-transparent opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-[1280px] px-5 py-5 sm:px-8">
          <div className="flex flex-col">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  border-b border-black/10
                  py-4 text-lg font-medium
                  text-black/70
                  transition-colors duration-200
                  hover:font-bold hover:text-black
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-5 flex min-h-12 w-full
              items-center justify-center
              bg-black px-5 py-3
              font-semibold text-white
              transition-colors duration-300
              hover:bg-black/80
            "
          >
            Start Your Project
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;