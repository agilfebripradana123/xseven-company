import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import logoXseven from "../assets/logo/logo-xseven.png";

/* =========================
   DATA
========================= */

const navigation = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Proyek", href: "#projects" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Kontak", href: "#contact" },
];

const services = [
  "Website Development",
  "UI/UX Design",
  "Brand Identity",
  "Web Application",
  "Digital Strategy",
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: FiInstagram,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    href: "#",
    icon: FiGithub,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-background

        px-3
        pb-3
        pt-6

        sm:px-5
        sm:pb-5

        lg:px-6
        lg:pb-6
      "
    >
      {/* =========================
          MAIN FOOTER
      ========================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]



          sm:rounded-[40px]
          sm:px-8
          sm:pt-16

          lg:rounded-[48px]
          lg:px-12
          lg:pt-20

          xl:px-16
        "
      >
        {/* =========================
            BACKGROUND GLOW
        ========================== */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-52
            -top-52

            h-[500px]
            w-[500px]

            rounded-full

            bg-primary/[0.08]

            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-52
            -right-52

            h-[500px]
            w-[500px]

            rounded-full

            bg-secondary/[0.06]

            blur-[150px]
          "
        />

        {/* DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[12%]

            h-2
            w-2

            rounded-full

            bg-primary

            shadow-[0_0_20px_rgba(245,158,11,0.8)]
          "
        />

        {/* =========================
            CONTENT
        ========================== */}

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =========================
              CTA
          ========================== */}

          <div
            className="
              grid
              gap-10

              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-end
            "
          >
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* STATUS */}

              <div
                className="
                  mb-6

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-primary/20

                  bg-primary/10

                  px-4
                  py-2
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full

                      animate-ping

                      rounded-full

                      bg-success

                      opacity-50
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2

                      rounded-full

                      bg-success
                    "
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]

                    text-body
                  "
                >
                  Open for Collaboration
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  max-w-4xl

                  text-3xl
                  font-bold
                  leading-[1.05]
                  tracking-[-0.045em]

                  text-heading

                  sm:text-4xl
                  md:text-5xl

                  lg:text-[56px]
                "
              >
                Ide Besar Dimulai dari{" "}
                <span className="text-primary">Percakapan Sederhana.</span>
              </h2>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                lg:flex
                lg:flex-col
                lg:items-end
              "
            >
              <p
                className="
                  max-w-sm

                  text-sm
                  leading-7

                  text-muted

                  lg:text-right
                "
              >
                Punya ide atau tantangan digital? Mari diskusikan bagaimana
                Xseven dapat membantu mewujudkannya.
              </p>

              {/* CTA */}

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group

                  mt-6

                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  bg-primary

                  px-6
                  py-3.5

                  text-xs
                  font-semibold

                  text-stone-950

                  shadow-[0_12px_35px_rgba(245,158,11,0.25)]
                "
              >
                Mulai Project
                <FiArrowUpRight
                  className="
                    text-base

                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.a>
            </motion.div>
          </div>

          {/* =========================
              DIVIDER
          ========================== */}

          <div className="my-12 h-px bg-border sm:my-14 lg:my-16" />

          {/* =========================
              FOOTER LINKS
          ========================== */}

          <div
            className="
              grid
              gap-10

              sm:grid-cols-2

              lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr]
              lg:gap-12
            "
          >
            {/* =========================
                COMPANY
            ========================== */}

            <div>
              {/* LOGO */}

              <a
                href="#home"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                "
              >
                <img
                  src={logoXseven}
                  alt="Xseven Company Logo"
                  className="
                    h-10
                    w-10

                    rounded-full

                    object-contain

                    shadow-[0_4px_18px_rgba(0,0,0,0.15)]

                    transition-transform
                    duration-300

                    group-hover:rotate-6
                    group-hover:scale-105
                  "
                />

                <div>
                  <p
                    className="
                      text-lg
                      font-bold
                      tracking-[-0.03em]

                      text-heading
                    "
                  >
                    Xseven
                  </p>

                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]

                      text-muted
                    "
                  >
                    Company
                  </p>
                </div>
              </a>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  max-w-xs

                  text-xs
                  leading-6

                  text-muted
                "
              >
                Partner digital untuk membantu bisnis menciptakan pengalaman
                melalui teknologi, desain, dan strategi.
              </p>

              {/* SOCIAL */}

              <div className="mt-6 flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="
                        group

                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-border

                        bg-background

                        text-sm
                        text-muted

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-primary
                        hover:bg-primary
                        hover:text-stone-950
                      "
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =========================
                NAVIGATION
            ========================== */}

            <FooterColumn title="Navigasi">
              {navigation.map((item) => (
                <FooterLink key={item.name} href={item.href}>
                  {item.name}
                </FooterLink>
              ))}
            </FooterColumn>

            {/* =========================
                SERVICES
            ========================== */}

            <FooterColumn title="Layanan">
              {services.map((service) => (
                <span
                  key={service}
                  className="
                    text-xs
                    leading-6

                    text-muted
                  "
                >
                  {service}
                </span>
              ))}
            </FooterColumn>

            {/* =========================
                CONTACT
            ========================== */}

            <FooterColumn title="Kontak">
              <a
                href="mailto:hello@xseven.co"
                className="
                  group

                  flex
                  items-start
                  gap-3

                  text-xs
                  text-muted

                  transition-colors
                  duration-300

                  hover:text-primary
                "
              >
                <FiMail
                  className="
                    mt-0.5
                    shrink-0

                    text-primary
                  "
                />

                <span>hello@xseven.co</span>
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3

                  text-xs
                  leading-6

                  text-muted
                "
              >
                <FiMapPin
                  className="
                    mt-1
                    shrink-0

                    text-primary
                  "
                />

                <span>
                  Wonosobo,
                  <br />
                  Jawa Tengah, Indonesia
                </span>
              </div>
            </FooterColumn>
          </div>

          {/* =========================
              BOTTOM DIVIDER
          ========================== */}

          <div className="mb-6 mt-12 h-px bg-border lg:mt-16" />

          {/* =========================
              BOTTOM BAR
          ========================== */}

          <div
            className="
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* COPYRIGHT */}

            <p
              className="
                text-[10px]
                leading-5

                text-muted
              "
            >
              © {currentYear}{" "}
              <span className="font-semibold text-heading">Xseven Company</span>
              . All rights reserved.
            </p>

            {/* RIGHT */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-6

                sm:justify-end
              "
            >
              <p
                className="
                  hidden
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.14em]

                  text-muted

                  md:block
                "
              >
                Designed & Built with Purpose
              </p>

              {/* BACK TO TOP */}

              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                className="
                  group

                  flex
                  items-center
                  gap-2

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]

                  text-muted

                  transition-colors
                  duration-300

                  hover:text-primary
                "
              >
                Kembali ke atas
                <span
                  className="
                    flex
                    h-8
                    w-8

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-border

                    bg-background

                    transition-all
                    duration-300

                    group-hover:border-primary
                    group-hover:bg-primary
                    group-hover:text-stone-950
                  "
                >
                  <FiArrowUp />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   FOOTER COLUMN
========================= */

function FooterColumn({ title, children }) {
  return (
    <div>
      <p
        className="
          mb-5

          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]

          text-heading
        "
      >
        {title}
      </p>

      <div
        className="
          flex
          flex-col
          items-start
          gap-3
        "
      >
        {children}
      </div>
    </div>
  );
}

/* =========================
   FOOTER LINK
========================= */

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="
        group
        relative

        text-xs
        text-muted

        transition-colors
        duration-300

        hover:text-primary
      "
    >
      {children}

      <span
        className="
          absolute
          -bottom-1
          left-0

          h-px
          w-0

          bg-primary

          transition-all
          duration-300

          group-hover:w-full
        "
      />
    </a>
  );
}
