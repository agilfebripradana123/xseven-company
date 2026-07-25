import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiPenTool,
  FiZap,
} from "react-icons/fi";

import uiuxImage from "../assets/services/uiux.webp";
import webImage from "../assets/services/web-development.webp";
import graphicImage from "../assets/services/graphic-design.webp";
import digitalImage from "../assets/services/digital-solution.webp";

/* =========================
   SERVICES DATA
========================= */

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    shortTitle: "Design",
    description:
      "Merancang pengalaman digital yang intuitif, menarik, dan berfokus pada kebutuhan pengguna.",
    image: uiuxImage,
    icon: FiLayers,
  },
  {
    number: "02",
    title: "Web Development",
    shortTitle: "Development",
    description:
      "Membangun website modern, responsif, cepat, dan sesuai dengan kebutuhan bisnis Anda.",
    image: webImage,
    icon: FiCode,
  },
  {
    number: "03",
    title: "Graphic Design",
    shortTitle: "Creative",
    description:
      "Menciptakan identitas visual dan desain kreatif yang memperkuat karakter sebuah brand.",
    image: graphicImage,
    icon: FiPenTool,
  },
  {
    number: "04",
    title: "Digital Solutions",
    shortTitle: "Solutions",
    description:
      "Menghadirkan solusi digital strategis untuk membantu bisnis berkembang dan beradaptasi.",
    image: digitalImage,
    icon: FiZap,
  },
];

/* =========================
   COMPONENT
========================= */

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const active = services[activeService];
  const ActiveIcon = active.icon;

  return (
    <section
      id="services"
      className="
        relative
        w-full
        bg-background
        px-3
        py-6

        sm:px-5
        sm:py-8

        lg:px-6
        lg:py-10
      "
    >
      {/* =========================================
          MAIN SERVICES CONTAINER
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          overflow-hidden

          rounded-[32px]
          border
          border-border

          bg-card

          px-5
          py-16

          shadow-[0_25px_80px_rgba(0,0,0,0.12)]

          sm:rounded-[40px]
          sm:px-8
          sm:py-20

          lg:rounded-[48px]
          lg:px-12
          lg:py-24

          xl:px-16
        "
      >
        {/* =========================================
            BACKGROUND DECORATION
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            bottom-[-120px]

            h-[400px]
            w-[400px]

            rounded-full
            bg-primary/10
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-[-120px]

            h-[420px]
            w-[420px]

            rounded-full
            bg-secondary/10
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2

            h-[350px]
            w-[500px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full
            bg-primary/[0.04]
            blur-[140px]
          "
        />

        {/* Decorative Dot */}

        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[10%]

            h-2
            w-2

            rounded-full
            bg-primary

            shadow-[0_0_20px_rgba(245,158,11,0.8)]
          "
        />

        {/* =========================================
            CONTENT
        ========================================== */}

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =========================================
              HEADER
          ========================================== */}

          <div
            className="
              mb-10
              flex
              flex-col
              gap-6

              lg:mb-14
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* LEFT HEADER */}

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* BADGE */}

              <div
                className="
                  mb-5
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
                <span
                  className="
                    h-2
                    w-2

                    rounded-full
                    bg-primary

                    shadow-[0_0_12px_rgba(245,158,11,0.8)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-primary
                  "
                >
                  Layanan Kami
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  max-w-2xl

                  text-3xl
                  font-bold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-heading

                  sm:text-4xl
                  md:text-5xl
                  lg:text-[52px]
                "
              >
                Solusi Digital untuk{" "}
                <span className="text-primary">Mengembangkan Bisnis.</span>
              </h2>
            </motion.div>

            {/* RIGHT DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                max-w-md
                lg:pb-1
              "
            >
              <p
                className="
                  text-sm
                  leading-7
                  text-body
                "
              >
                Kami menyediakan berbagai layanan kreatif dan teknologi yang
                dirancang untuk membantu bisnis membangun pengalaman digital
                yang lebih kuat.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    h-px
                    w-10
                    bg-primary
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-muted
                  "
                >
                  Explore our expertise
                </span>
              </div>
            </motion.div>
          </div>

          {/* =========================================
              SERVICES CONTENT
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              mt-12
            "
          >
            <div
              className="
                grid
                gap-5

                lg:grid-cols-[0.9fr_1.25fr_0.65fr]
                lg:items-stretch
              "
            >
              {/* =========================================
                  LEFT — SERVICES LIST
              ========================================== */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                "
              >
                <div className="mb-5">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-primary
                    "
                  >
                    01 — Services
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-[280px]
                      text-xs
                      leading-5
                      text-muted
                    "
                  >
                    Pilih layanan untuk melihat bagaimana Xseven dapat membantu
                    mengembangkan bisnis Anda.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const isActive = activeService === index;

                    return (
                      <button
                        key={service.title}
                        type="button"
                        onMouseEnter={() => setActiveService(index)}
                        onClick={() => setActiveService(index)}
                        className={`
                          group

                          flex
                          w-full
                          items-center
                          justify-between

                          rounded-full

                          border

                          px-3
                          py-3

                          text-left

                          transition-all
                          duration-300

                          sm:px-4
                          sm:py-3.5

                          ${
                            isActive
                              ? `
                                border-primary
                                bg-primary
                                text-stone-950
                                shadow-[0_10px_30px_rgba(245,158,11,0.15)]
                              `
                              : `
                                border-border
                                bg-background
                                text-heading

                                hover:border-primary/50
                                hover:bg-primary/5
                              `
                          }
                        `}
                      >
                        {/* LEFT */}

                        <div
                          className="
                            flex
                            min-w-0
                            items-center
                            gap-3
                          "
                        >
                          {/* ICON */}

                          <span
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center

                              rounded-full

                              text-sm

                              transition-all
                              duration-300

                              ${
                                isActive
                                  ? "bg-stone-950/10 text-stone-950"
                                  : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-stone-950"
                              }
                            `}
                          >
                            <Icon />
                          </span>

                          {/* NUMBER */}

                          <span
                            className={`
                              text-[9px]
                              font-bold

                              ${isActive ? "text-stone-950/60" : "text-primary"}
                            `}
                          >
                            {service.number}
                          </span>

                          {/* TITLE */}

                          <span
                            className="
                              truncate
                              text-xs
                              font-semibold

                              sm:text-sm
                            "
                          >
                            {service.title}
                          </span>
                        </div>

                        {/* ARROW */}

                        <span
                          className={`
                            ml-3

                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center

                            rounded-full

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "bg-stone-950 text-white"
                                : "border border-border group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-stone-950"
                            }
                          `}
                        >
                          <FiArrowUpRight
                            className={`
                              text-xs
                              transition-transform
                              duration-300

                              ${isActive ? "rotate-45" : ""}
                            `}
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =========================================
                  CENTER — IMAGE
              ========================================== */}

              <motion.div
                whileHover="hover"
                className="
                  group
                  relative

                  min-h-[360px]

                  cursor-pointer
                  overflow-hidden

                  rounded-[28px]

                  sm:min-h-[430px]
                  lg:min-h-[520px]
                "
              >
                {/* IMAGE */}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.title}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="
                      absolute
                      inset-0

                      h-full
                      w-full

                      object-cover
                    "
                  />
                </AnimatePresence>

                {/* DARK OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-black/85
                    via-black/10
                    to-black/10
                  "
                />

                {/* IMAGE GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-28
                    -left-28

                    h-72
                    w-72

                    rounded-full

                    bg-primary/20
                    blur-[100px]

                    opacity-50

                    transition-all
                    duration-700

                    group-hover:scale-125
                    group-hover:opacity-100
                  "
                />

                {/* TOP NUMBER */}

                <div
                  className="
                    absolute
                    left-5
                    top-5

                    rounded-full

                    border
                    border-white/20

                    bg-black/30

                    px-3
                    py-1.5

                    text-[10px]
                    font-semibold
                    text-white

                    backdrop-blur-md
                  "
                >
                  {active.number} / {String(services.length).padStart(2, "0")}
                </div>

                {/* TOP RIGHT */}

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.08,
                  }}
                  className="
                    absolute
                    right-5
                    top-5

                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-full

                    bg-primary

                    text-lg
                    text-stone-950

                    shadow-[0_10px_30px_rgba(245,158,11,0.25)]
                  "
                >
                  <ActiveIcon />
                </motion.div>

                {/* BOTTOM CONTENT */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0

                      z-10

                      p-5

                      sm:p-7
                    "
                  >
                    {/* LINE */}

                    <motion.div
                      className="
                        mb-4
                        h-px
                        bg-primary
                      "
                      initial={{
                        width: 35,
                      }}
                      whileHover={{
                        width: 80,
                      }}
                    />

                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-primary
                      "
                    >
                      {active.shortTitle}
                    </p>

                    <h3
                      className="
                        mt-2

                        text-2xl
                        font-semibold
                        tracking-[-0.03em]
                        text-white

                        sm:text-3xl
                      "
                    >
                      {active.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-md

                        text-xs
                        leading-6
                        text-white/70

                        sm:text-sm
                      "
                    >
                      {active.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* BORDER */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    rounded-[28px]

                    border
                    border-white/10

                    transition-colors
                    duration-500

                    group-hover:border-primary/40
                  "
                />
              </motion.div>

              {/* =========================================
                  RIGHT COLUMN
              ========================================== */}

              <div
                className="
                  grid
                  gap-4

                  sm:grid-cols-2

                  lg:grid-cols-1
                  lg:grid-rows-2
                "
              >
                {/* ================= PORTFOLIO ================= */}

                <div
                  className="
                    group

                    relative
                    flex
                    min-h-[230px]
                    flex-col
                    justify-between

                    overflow-hidden

                    rounded-[26px]

                    border
                    border-border

                    bg-background

                    p-5

                    transition-all
                    duration-500

                    hover:border-primary/40
                  "
                >
                  {/* GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20

                      h-44
                      w-44

                      rounded-full

                      bg-primary/5
                      blur-[70px]

                      transition-all
                      duration-700

                      group-hover:bg-primary/15
                    "
                  />

                  <div className="relative z-10">
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-primary
                      "
                    >
                      Portofolio
                    </span>

                    <h3
                      className="
                        mt-4

                        text-lg
                        font-semibold
                        leading-7
                        tracking-[-0.02em]
                        text-heading
                      "
                    >
                      Lihat bagaimana kami mengubah ide menjadi karya.
                    </h3>
                  </div>

                  <a
                    href="#projects"
                    className="
                      relative
                      z-10

                      mt-6

                      flex
                      items-center
                      justify-between

                      text-xs
                      font-semibold
                      text-heading
                    "
                  >
                    Lihat Proyek
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-border

                        transition-all
                        duration-300

                        group-hover:rotate-45
                        group-hover:border-primary
                        group-hover:bg-primary
                        group-hover:text-stone-950
                      "
                    >
                      <FiArrowUpRight />
                    </span>
                  </a>
                </div>

                {/* ================= CTA ================= */}

                <div
                  className="
                    group

                    relative
                    flex
                    min-h-[230px]
                    flex-col
                    justify-between

                    overflow-hidden

                    rounded-[26px]

                    bg-primary

                    p-5

                    text-stone-950
                  "
                >
                  {/* CIRCLE */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16

                      h-40
                      w-40

                      rounded-full

                      border
                      border-stone-950/10

                      transition-transform
                      duration-700

                      group-hover:scale-125
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-5
                      top-5

                      h-20
                      w-20

                      rounded-full

                      border
                      border-stone-950/10
                    "
                  />

                  <div className="relative z-10">
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-stone-950/60
                      "
                    >
                      Punya Ide?
                    </p>

                    <h3
                      className="
                        mt-4

                        text-xl
                        font-bold
                        leading-7
                        tracking-[-0.03em]
                      "
                    >
                      Mari bangun sesuatu yang luar biasa.
                    </h3>
                  </div>

                  <a
                    href="#contact"
                    className="
                      relative
                      z-10

                      mt-6

                      flex
                      items-center
                      justify-between

                      rounded-full

                      bg-stone-950

                      px-4
                      py-2.5

                      text-xs
                      font-semibold
                      text-white

                      transition-transform
                      duration-300

                      hover:scale-[1.02]
                    "
                  >
                    Konsultasi
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center

                        rounded-full

                        bg-white
                        text-stone-950

                        transition-transform
                        duration-300

                        group-hover:rotate-45
                      "
                    >
                      <FiArrowUpRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              BOTTOM DECORATION
          ========================================== */}

          <div
            className="
              mt-12
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-px
                flex-1
                bg-border
              "
            />

            <motion.div
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center

                rounded-full

                border
                border-primary/30

                text-[10px]
                text-primary
              "
            >
              ✦
            </motion.div>

            <div
              className="
                h-px
                flex-1
                bg-border
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
