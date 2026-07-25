import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

import Button from "./ui/Button";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-background
      "
    >
      <div
        className="
    relative
    min-h-[750px]
    w-full
    overflow-hidden

    rounded-b-[40px]
    border-b border-border
    bg-surface

    px-5
    pb-0
    pt-32

    sm:min-h-[850px]
    sm:rounded-b-[56px]
    sm:px-8
    sm:pt-32

    md:min-h-[880px]
    md:px-10

    lg:min-h-[760px]
    lg:rounded-b-[72px]
    lg:px-12
    lg:pt-32

    xl:px-16
  "
      >
        {/* =========================
    BACKGROUND DECORATION
========================== */}

        {/* Main Ambient Glow */}
        <motion.div
          className="
    pointer-events-none
    absolute
    left-1/2 top-[48%]
    h-[380px] w-[380px]
    -translate-x-1/2
    rounded-full
    bg-primary/10
    blur-[100px]
    sm:h-[500px]
    sm:w-[500px]
    lg:h-[620px]
    lg:w-[620px]
  "
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Left Floating Ring */}
        <motion.div
          className="
    pointer-events-none
    absolute
    left-[6%] top-[30%]
    hidden
    h-20 w-20
    rounded-full
    border border-primary/25
    md:block
  "
          animate={{
            y: [0, -14, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Dot on Ring */}
          <span
            className="
      absolute
      left-1/2 top-[-4px]
      h-2 w-2
      -translate-x-1/2
      rounded-full
      bg-primary
      shadow-[0_0_15px_rgba(245,158,11,0.8)]
    "
          />
        </motion.div>

        {/* Secondary Ring */}
        <motion.div
          className="
    pointer-events-none
    absolute
    left-[11%] top-[55%]
    hidden
    h-8 w-8
    rounded-full
    border border-secondary/30
    lg:block
  "
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Right Glowing Dot */}
        <motion.div
          className="
    pointer-events-none
    absolute
    right-[8%] top-[32%]
    h-3 w-3
    rounded-full
    bg-primary
    shadow-[0_0_25px_rgba(245,158,11,0.8)]
  "
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Right Large Outline */}
        <motion.div
          className="
    pointer-events-none
    absolute
    right-[4%] top-[52%]
    hidden
    h-28 w-28
    rounded-full
    border border-primary/10
    lg:block
  "
          animate={{
            rotate: [0, -360],
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: {
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span
            className="
      absolute
      bottom-2 right-2
      h-2.5 w-2.5
      rounded-full
      border border-primary/50
      bg-surface
    "
          />
        </motion.div>

        {/* Small Floating Dot - Left */}
        <motion.div
          className="
    pointer-events-none
    absolute
    left-[18%] top-[22%]
    hidden
    h-1.5 w-1.5
    rounded-full
    bg-secondary
    md:block
  "
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Floating Dot - Right */}
        <motion.div
          className="
    pointer-events-none
    absolute
    right-[20%] top-[25%]
    hidden
    h-1.5 w-1.5
    rounded-full
    bg-primary
    md:block
  "
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        {/* Decorative Cross */}
        <motion.div
          className="
    pointer-events-none
    absolute
    bottom-[18%] left-[8%]
    hidden
    text-xl
    font-light
    text-primary/30
    lg:block
  "
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          +
        </motion.div>

        {/* =========================
              BADGE
          ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex justify-center"
        >
          <div
            className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-primary/20
                bg-primary/10
                px-4 py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
                sm:text-xs
              "
          >
            <span
              className="
                  h-2 w-2
                  rounded-full
                  bg-primary
                  shadow-[0_0_12px_rgba(245,158,11,0.8)]
                "
            />
            Xseven Digital Company
          </div>
        </motion.div>

        {/* =========================
              HEADLINE
          ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
              relative
              z-10
              mx-auto
              mt-6
              max-w-5xl
              text-center
            "
        >
          <h1
            className="
  text-[32px]
  font-bold
  leading-[1.08]
  tracking-[-0.04em]
  text-heading

  sm:text-[38px]
  md:text-5xl
  lg:text-5xl
  xl:text-6xl
"
          >
            Membangun Pengalaman Digital
            <br className="hidden lg:block" /> yang{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">
                Menggerakkan Brand.
              </span>
            </span>
          </h1>
        </motion.div>

        {/* =========================
              LEFT DESCRIPTION
          ========================== */}

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
  relative
  z-20
  mx-auto
  mt-6
  max-w-[320px]
  text-center

  sm:mt-7
  sm:max-w-[400px]

  md:max-w-[460px]

  lg:absolute
  lg:left-[8%]
  lg:top-[45%]
  lg:mx-0
  lg:mt-0
  lg:max-w-[230px]
  lg:text-left
"
        >
          <div
            className="
                mb-4
                hidden
                h-px w-10
                bg-primary
                lg:block
              "
          />

          <p
            className="
    text-[13px]
    leading-6
    text-body
    sm:text-sm
    sm:leading-7
  "
          >
            Dari ide hingga produk digital, kami membantu bisnis menciptakan
            pengalaman yang bermakna melalui teknologi, desain, dan strategi.
          </p>

          <div className="mt-4 sm:mt-5">
            <Button size="sm">
              Mulai Proyek
              <FiArrowUpRight />
            </Button>
          </div>
        </motion.div>

        {/* =========================
              RIGHT EXPERIENCE
          ========================== */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="
              relative
              z-20
              mt-8
              hidden
              lg:absolute
              lg:right-[8%]
              lg:top-[47%]
              lg:mt-0
              lg:block
            "
        >
          <div className="flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>

          <p
            className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-heading
              "
          >
            5+
          </p>

          <p
            className="
                text-xs
                leading-5
                text-muted
              "
          >
            Years of
            <br />
            Experience
          </p>
        </motion.div>

        {/* =========================
    HERO IMAGE
========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="
    group
    absolute
    bottom-0
    left-1/2
    z-10
    w-[180px]
    -translate-x-1/2
    sm:w-[220px]
    md:w-[250px]
    lg:w-[280px]
  "
        >
          {/* ================= GLOW ================= */}

          <motion.div
            className="
      pointer-events-none
      absolute
      bottom-[5%]
      left-1/2
      -z-20
      h-[240px]
      w-[240px]
      -translate-x-1/2
      rounded-full
      bg-primary/15
      blur-[70px]

      sm:h-[300px]
      sm:w-[300px]

      lg:h-[350px]
      lg:w-[350px]
    "
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ================= BACKGROUND CIRCLE ================= */}

          <div
            className="
      pointer-events-none
      absolute
      bottom-[-20px]
      left-1/2
      -z-10

      h-[220px]
      w-[220px]

      -translate-x-1/2

      rounded-full
      border border-primary/10
      bg-primary/10

      transition-all
      duration-500

      group-hover:scale-105
      group-hover:border-primary/25
      group-hover:bg-primary/15

      sm:h-[280px]
      sm:w-[280px]

      md:h-[320px]
      md:w-[320px]

      lg:h-[350px]
      lg:w-[350px]
    "
          />

          {/* ================= DECORATIVE RING ================= */}

          <motion.div
            className="
      pointer-events-none
      absolute
      bottom-[-35px]
      left-1/2
      -z-10

      hidden
      h-[380px]
      w-[380px]

      -translate-x-1/2

      rounded-full
      border border-dashed border-primary/15

      lg:block
    "
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ================= IMAGE ================= */}

          <motion.img
            src={heroImage}
            alt="Xseven Company"
            draggable="false"
            className="
      relative
      z-10
      w-full
      cursor-pointer
      select-none
      object-contain
      object-bottom
      drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]
    "
            whileHover={{
              y: -8,
              scale: 1.035,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
          />

          {/* ================= FLOATING DOT ================= */}

          <motion.div
            className="
      pointer-events-none
      absolute
      right-[-15px]
      top-[30%]
      hidden
      h-3
      w-3
      rounded-full
      bg-primary
      shadow-[0_0_20px_rgba(245,158,11,0.8)]
      md:block
    "
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ================= FLOATING CTA ================= */}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
    absolute
    bottom-4
    left-1/2
    z-30

    flex
    -translate-x-1/2
    items-center
    gap-1.5

    whitespace-nowrap
    rounded-full
    border border-border
    bg-background

    p-1.5
    shadow-[0_10px_35px_rgba(0,0,0,0.15)]

    sm:bottom-6
    sm:gap-2
    sm:p-2
  "
          >
            <span
              className="
      rounded-full
      bg-primary
      px-3
      py-2
      text-[10px]
      font-semibold
      text-stone-950

      sm:px-4
      sm:text-xs
    "
            >
              Let's Work
            </span>

            <span
              className="
      hidden
      items-center
      gap-2
      pr-2
      text-xs
      font-medium
      text-heading
      sm:flex
    "
            >
              <FiCheckCircle className="text-primary" />
              Start Collaboration
            </span>

            <span
              className="
      flex
      h-7
      w-7
      items-center
      justify-center
      rounded-full
      bg-primary/10
      text-primary
      sm:hidden
    "
            >
              <FiArrowUpRight />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
