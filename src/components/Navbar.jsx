import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import Container from "./ui/Container";
import Button from "./ui/Button";
import ThemeToggle from "./ThemeToggle";

import logoXseven from "../assets/logo/logo-xseven.png";

import DoubleHoverText from "./ui/DoubleHoverText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Proyek", href: "#projects" },
  { name: "Testimoni", href: "#testimonials" },
];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-300
        ${scrolled ? "pt-3" : "pt-5"}
      `}
    >
      <Container>
        <nav
          className={`
            relative
            flex items-center justify-between
            rounded-full
            border
            px-4
            transition-all duration-300
            sm:px-5
            ${
              scrolled
                ? "border-border bg-background/90 py-2 shadow-lg backdrop-blur-xl"
                : "border-border bg-background/80 py-3 backdrop-blur-xl"
            }
          `}
        >
          {/* ================= LOGO ================= */}

          <a
            href="#home"
            className="group flex items-center gap-2.5"
            onClick={handleNavClick}
          >
            <div className="flex items-center">
              <span className="text-lg font-bold tracking-tight text-heading">
                Xseven
              </span>

              <span className="ml-1 hidden text-lg font-light text-muted sm:block">
                Company
              </span>
            </div>
          </a>

          {/* ================= DESKTOP MENU ================= */}

          <div
            className="
    absolute
    left-1/2
    hidden
    -translate-x-1/2
    items-center
    gap-1
    lg:flex
  "
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
        rounded-full
        px-3.5 py-2
        text-sm
        font-medium
      "
              >
                <DoubleHoverText text={item.name} />
              </a>
            ))}
          </div>

          {/* ================= DESKTOP ACTION ================= */}

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <a href="#contact">
              <Button size="sm">
                Let's Talk
                <FiArrowUpRight className="text-base" />
              </Button>
            </a>
          </div>

          {/* ================= MOBILE ACTION ================= */}

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-border
                bg-card
                text-heading
                shadow-sm
                transition-all duration-300
                hover:border-primary
                hover:bg-primary/10
                hover:text-primary
              "
              aria-label="Toggle navigation"
            >
              {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}

          <div
            className={`
    absolute
    left-0 right-0
    top-[calc(100%+12px)]
    z-50
    overflow-hidden
    rounded-[28px]
    border border-border
    bg-background
    shadow-[0_20px_60px_rgba(0,0,0,0.20)]
    transition-all
    duration-300
    lg:hidden

    ${
      isOpen
        ? "visible translate-y-0 scale-100 opacity-100"
        : "invisible -translate-y-3 scale-[0.98] opacity-0"
    }
  `}
          >
            {/* Ambient Glow */}
            <div
              className="
      pointer-events-none
      absolute -right-16 -top-20
      h-40 w-40
      rounded-full
      bg-primary/15
      blur-3xl
    "
            />

            <div
              className="
      pointer-events-none
      absolute -bottom-20 -left-16
      h-40 w-40
      rounded-full
      bg-secondary/10
      blur-3xl
    "
            />

            {/* Menu Header */}
            <div className="relative flex items-center justify-between px-5 pb-3 pt-5">
              <div>
                <p
                  className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-primary
        "
                >
                  Navigation
                </p>

                <p className="mt-1 text-xs text-muted">
                  Explore Xseven Company
                </p>
              </div>

              <span
                className="
        rounded-full
        border border-primary/20
        bg-primary/10
        px-3 py-1
        text-[10px]
        font-semibold
        text-primary
      "
              >
                Menu
              </span>
            </div>

            {/* Divider */}
            <div className="mx-4 h-px bg-border/60" />

            {/* Navigation */}
            <div className="relative flex flex-col gap-1 p-3">
              {navLinks.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="
          group
          flex
          items-center
          justify-between
          rounded-full
          px-4 py-3
          transition-all
          duration-300
          hover:bg-primary/10
        "
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <span
                      className="
              flex h-7 w-7
              items-center justify-center
              rounded-full
              border border-border
              bg-card/50
              text-[10px]
              font-semibold
              text-muted
              transition-all
              duration-300
              group-hover:border-primary/40
              group-hover:bg-primary
              group-hover:text-stone-950
            "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Menu Name */}
                    <span
                      className="
              text-sm
              font-medium
              text-body
              transition-colors
              duration-300
              group-hover:text-heading
            "
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* Arrow */}
                  <FiArrowUpRight
                    className="
            -translate-x-1
            text-base
            text-muted
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:text-primary
            group-hover:opacity-100
          "
                  />
                </a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="relative border-t border-border/60 p-3">
              <div
                className="
        rounded-2xl
        border border-primary/20
        bg-primary/5
        p-3
      "
              >
                <div className="mb-3 px-1">
                  <p className="text-xs font-semibold text-heading">
                    Have a project in mind?
                  </p>

                  <p className="mt-1 text-[11px] text-muted">
                    Let's create something great together.
                  </p>
                </div>

                <a href="#contact" onClick={handleNavClick} className="block">
                  <Button className="w-full">
                    Let's Talk
                    <FiArrowUpRight />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
