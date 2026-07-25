import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiTarget, FiZap } from "react-icons/fi";

import Card from "./ui/Card";

import aboutImage1 from "../assets/about/about-1.webp";
import aboutImage2 from "../assets/about/about-2.webp";

export default function About() {
  const missions = [
    "Menghadirkan solusi digital yang kreatif dan berkualitas.",
    "Memanfaatkan teknologi modern untuk mendukung pertumbuhan bisnis.",
    "Membangun kolaborasi jangka panjang bersama setiap klien.",
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-background
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
        xl:px-16
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[30%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-primary/5
          blur-[100px]
        "
        data-aos="fade-up"
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          bottom-[10%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-secondary/5
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= TOP ================= */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-primary/20
                bg-primary/10
                px-4 py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-primary
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
              Tentang Xseven
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                text-3xl
                font-bold
                leading-[1.1]
                tracking-[-0.04em]
                text-heading

                sm:text-4xl
                md:text-5xl
                lg:text-[54px]
              "
            >
              Mengubah Ide Menjadi{" "}
              <span className="text-primary">Solusi Digital</span> yang
              Berdampak.
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="lg:pb-1"
          >
            <p
              className="
                text-sm
                leading-7
                text-body
                sm:text-[15px]
              "
            >
              Xseven Company adalah perusahaan digital kreatif yang berfokus
              pada pengembangan website, desain, dan solusi teknologi untuk
              membantu bisnis membangun identitas serta pengalaman digital yang
              lebih kuat.
            </p>

            <a
              href="#services"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-heading
                transition-colors
                hover:text-primary
              "
            >
              Jelajahi layanan kami
              <span
                className="
                  flex
                  h-8 w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  text-stone-950
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <FiArrowUpRight />
              </span>
            </a>
          </motion.div>
        </div>

        {/* ================= IMAGES ================= */}

        <div
          className="
            mt-12
            grid
            gap-4
            md:grid-cols-[1.35fr_0.65fr]
            lg:mt-16
          "
        >
          {/* IMAGE 1 */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            whileHover="hover"
            className="
    group
    relative
    h-[300px]
    cursor-pointer
    overflow-hidden
    rounded-[28px]

    sm:h-[380px]
    md:h-[460px]
    lg:h-[500px]
  "
          >
            {/* IMAGE */}

            <motion.img
              src={aboutImage1}
              alt="Tim Xseven Company"
              draggable="false"
              className="
      h-full
      w-full
      object-cover
    "
              variants={{
                hover: {
                  scale: 1.06,
                  rotate: 0.8,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            />

            {/* DARK OVERLAY */}

            <motion.div
              className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-t
      from-black/60
      via-black/5
      to-transparent
    "
              variants={{
                hover: {
                  opacity: 0.75,
                },
              }}
              transition={{
                duration: 0.5,
              }}
            />

            {/* AMBER GLOW */}

            <motion.div
              className="
      pointer-events-none
      absolute
      -bottom-24
      -left-24
      h-64
      w-64
      rounded-full
      bg-primary/25
      blur-[80px]
    "
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              variants={{
                hover: {
                  opacity: 1,
                  scale: 1.2,
                },
              }}
              transition={{
                duration: 0.7,
              }}
            />

            {/* TOP NUMBER */}

            <motion.div
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
      border
      border-white/20
      bg-black/20

      text-xs
      font-semibold
      text-white

      backdrop-blur-md
    "
              variants={{
                hover: {
                  rotate: 10,
                  scale: 1.08,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
            >
              01
            </motion.div>

            {/* BOTTOM CONTENT */}

            <motion.div
              className="
      absolute
      bottom-5
      left-5
      right-5
      z-10

      flex
      items-end
      justify-between
      gap-4
    "
              variants={{
                hover: {
                  y: -5,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
            >
              <div>
                <p
                  className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-primary
        "
                >
                  Xseven Company
                </p>

                <p
                  className="
          mt-1
          text-sm
          font-semibold
          text-white

          sm:text-base
        "
                >
                  Creative Collaboration
                </p>
              </div>

              {/* ARROW */}

              <motion.div
                className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center

        rounded-full
        bg-primary

        text-stone-950
      "
                variants={{
                  hover: {
                    rotate: 45,
                    scale: 1.08,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 17,
                }}
              >
                <FiArrowUpRight />
              </motion.div>
            </motion.div>

            {/* BORDER HOVER */}

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

      group-hover:border-primary/30
    "
            />
          </motion.div>

          {/* IMAGE 2 */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            whileHover="hover"
            className="
    group
    relative
    h-[300px]
    cursor-pointer
    overflow-hidden
    rounded-[28px]

    sm:h-[380px]
    md:h-[460px]
    lg:h-[500px]
  "
          >
            {/* IMAGE */}

            <motion.img
              src={aboutImage2}
              alt="Proses kreatif Xseven Company"
              draggable="false"
              className="
      h-full
      w-full
      object-cover
    "
              variants={{
                hover: {
                  scale: 1.07,
                  x: -4,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            />

            {/* DARK OVERLAY */}

            <motion.div
              className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-t
      from-black/70
      via-black/10
      to-transparent
    "
              initial={{ opacity: 0.8 }}
              variants={{
                hover: {
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.5,
              }}
            />

            {/* AMBER GLOW */}

            <motion.div
              className="
      pointer-events-none
      absolute
      -right-20
      -top-20
      h-56
      w-56
      rounded-full
      bg-primary/25
      blur-[80px]
    "
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              variants={{
                hover: {
                  opacity: 1,
                  scale: 1.2,
                },
              }}
              transition={{
                duration: 0.7,
              }}
            />

            {/* FLOATING BADGE */}

            <motion.div
              className="
      absolute
      right-4
      top-4
      z-20

      flex
      h-12
      w-12
      items-center
      justify-center

      rounded-full
      bg-primary

      text-lg
      text-stone-950

      shadow-[0_8px_30px_rgba(245,158,11,0.25)]
    "
              variants={{
                hover: {
                  rotate: 15,
                  scale: 1.1,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
              }}
            >
              <motion.div
                variants={{
                  hover: {
                    rotate: -15,
                  },
                }}
              >
                <FiZap />
              </motion.div>
            </motion.div>

            {/* SMALL LABEL */}

            <motion.div
              className="
      absolute
      left-5
      top-5
      z-20

      rounded-full
      border
      border-white/20
      bg-black/30

      px-3
      py-1.5

      text-[9px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-white

      backdrop-blur-md
    "
              initial={{
                opacity: 0,
                y: -8,
              }}
              variants={{
                hover: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.4,
              }}
            >
              Creative Process
            </motion.div>

            {/* BOTTOM CONTENT */}

            <motion.div
              className="
      absolute
      bottom-5
      left-5
      right-5
      z-20
    "
              variants={{
                hover: {
                  y: -6,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
            >
              {/* LINE */}

              <motion.div
                className="
        mb-4
        h-px
        bg-primary
      "
                initial={{
                  width: "30px",
                }}
                variants={{
                  hover: {
                    width: "70px",
                  },
                }}
                transition={{
                  duration: 0.5,
                }}
              />

              <p
                className="
        text-lg
        font-semibold
        text-white

        sm:text-xl
      "
              >
                Ide. Desain. Teknologi.
              </p>

              <p
                className="
        mt-1
        max-w-[220px]
        text-xs
        leading-5
        text-white/70
      "
              >
                Dibangun untuk menciptakan dampak.
              </p>
            </motion.div>

            {/* BORDER */}

            <div
              className="
      pointer-events-none
      absolute
      inset-0
      z-30

      rounded-[28px]
      border
      border-white/10

      transition-colors
      duration-500

      group-hover:border-primary/40
    "
            />
          </motion.div>
        </div>

        {/* ================= VISION & MISSION ================= */}

        <div
          className="
    mt-5
    grid
    items-stretch
    gap-4
    lg:grid-cols-2
  "
        >
          {/* VISION */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <Card className="h-full">
              <div
                className="
        mb-6
        flex
        h-11 w-11
        items-center
        justify-center
        rounded-full
        bg-primary/10
        text-xl
        text-primary
        transition-all
        duration-300

        group-hover:rotate-6
        group-hover:bg-primary
        group-hover:text-stone-950
      "
              >
                <FiTarget />
              </div>

              <p
                className="
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.2em]
        text-primary
      "
              >
                Visi Kami
              </p>

              <h3
                className="
        mt-3
        text-xl
        font-semibold
        leading-8
        text-heading
        sm:text-2xl
      "
              >
                Menjadi partner digital yang mendorong pertumbuhan bisnis
                melalui inovasi.
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted">
                Kami ingin membantu setiap bisnis berkembang melalui solusi
                digital yang relevan, kreatif, dan berkelanjutan.
              </p>
            </Card>
          </motion.div>

          {/* MISSION */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <Card className="h-full">
              <p
                className="
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.2em]
        text-primary
      "
              >
                Misi Kami
              </p>

              <h3
                className="
        mt-3
        text-xl
        font-semibold
        text-heading
        sm:text-2xl
      "
              >
                Membangun solusi dengan tujuan yang jelas.
              </h3>

              <div className="mt-6 space-y-4">
                {missions.map((mission, index) => (
                  <div
                    key={index}
                    className="
            group/item
            flex
            items-start
            gap-3
          "
                  >
                    <span
                      className="
              mt-0.5
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full

              bg-primary/10
              text-xs
              text-primary

              transition-all
              duration-300

              group-hover/item:bg-primary
              group-hover/item:text-stone-950
            "
                    >
                      <FiCheck />
                    </span>

                    <p className="text-sm leading-6 text-body">{mission}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
