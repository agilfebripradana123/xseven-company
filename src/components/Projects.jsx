import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    id: 1,
    title: "Nexa Commerce",
    category: "Website",
    type: "E-Commerce Platform",
    year: "2026",
    image: project1,
    size: "large",
  },
  {
    id: 2,
    title: "Finova",
    category: "UI/UX",
    type: "Finance Mobile App",
    year: "2026",
    image: project2,
    size: "small",
  },
  {
    id: 3,
    title: "Arunika Studio",
    category: "Branding",
    type: "Brand Identity",
    year: "2025",
    image: project3,
    size: "small",
  },
  {
    id: 4,
    title: "Lumina Space",
    category: "Website",
    type: "Company Profile",
    year: "2025",
    image: project4,
    size: "large",
  },
];

const categories = ["Semua", "Website", "UI/UX", "Branding"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
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
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[25%]

          h-[450px]
          w-[450px]

          rounded-full
          bg-primary/[0.05]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[10%]

          h-[450px]
          w-[450px]

          rounded-full
          bg-secondary/[0.04]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================== */}

        <div
          className="
            mb-10

            flex
            flex-col
            gap-7

            lg:mb-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
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
                Proyek Kami
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                max-w-3xl

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
              Karya yang Mengubah Ide Menjadi{" "}
              <span className="text-primary">Pengalaman.</span>
            </h2>
          </motion.div>

          {/* DESCRIPTION */}

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
            className="max-w-md"
          >
            <p
              className="
                text-sm
                leading-7
                text-body
              "
            >
              Beberapa karya yang menunjukkan bagaimana strategi, kreativitas,
              dan teknologi kami ubah menjadi solusi digital yang nyata.
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-primary" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                Selected Works
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================
            FILTER
        ========================== */}

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
            duration: 0.6,
          }}
          className="
            mb-8
            flex
            flex-wrap
            gap-2
          "
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  border

                  px-5
                  py-2.5

                  text-xs
                  font-semibold

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-primary
                        bg-primary
                        text-stone-950
                      `
                      : `
                        border-border
                        bg-card
                        text-body

                        hover:border-primary/50
                        hover:text-primary
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* =========================
            PROJECT GRID
        ========================== */}

        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-4

            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className={`
                  group
                  relative

                  min-h-[380px]

                  cursor-pointer
                  overflow-hidden

                  rounded-[28px]

                  border
                  border-border

                  bg-card

                  ${
                    project.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
                  }

                  sm:min-h-[430px]
                  lg:min-h-[500px]
                `}
              >
                {/* IMAGE */}

                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="
                    absolute
                    inset-0

                    h-full
                    w-full

                    object-cover
                  "
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-black/90
                    via-black/10
                    to-black/5
                  "
                />

                {/* HOVER OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-primary/0

                    transition-colors
                    duration-500

                    group-hover:bg-primary/[0.05]
                  "
                />

                {/* TOP */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0

                    z-10

                    flex
                    items-center
                    justify-between

                    p-5

                    sm:p-6
                  "
                >
                  {/* CATEGORY */}

                  <span
                    className="
                      rounded-full

                      border
                      border-white/20

                      bg-black/30

                      px-3
                      py-1.5

                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-white

                      backdrop-blur-md
                    "
                  >
                    {project.category}
                  </span>

                  {/* YEAR */}

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      text-white/70
                    "
                  >
                    {project.year}
                  </span>
                </div>

                {/* BOTTOM CONTENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0

                    z-10

                    p-5

                    sm:p-6
                  "
                >
                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-5
                    "
                  >
                    <div>
                      <p
                        className="
                          mb-2

                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-primary
                        "
                      >
                        {project.type}
                      </p>

                      <h3
                        className="
                          text-xl
                          font-semibold
                          tracking-[-0.03em]
                          text-white

                          sm:text-2xl
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* ARROW */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-white

                        text-lg
                        text-stone-950

                        transition-all
                        duration-500

                        group-hover:rotate-45
                        group-hover:bg-primary
                      "
                    >
                      <FiArrowUpRight />
                    </div>
                  </div>

                  {/* HOVER LINE */}

                  <div
                    className="
                      mt-5

                      h-px
                      w-0

                      bg-primary

                      transition-all
                      duration-700

                      group-hover:w-full
                    "
                  />
                </div>

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
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =========================
            BOTTOM CTA
        ========================== */}

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
          }}
          className="
            mt-10

            flex
            flex-col
            gap-5

            rounded-[28px]

            border
            border-border

            bg-card

            p-6

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-8
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              Punya Proyek?
            </p>

            <h3
              className="
                mt-2

                text-xl
                font-semibold
                text-heading

                sm:text-2xl
              "
            >
              Mari ciptakan karya berikutnya bersama Xseven.
            </h3>
          </div>

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

              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3

              rounded-full

              bg-primary

              px-5
              py-3

              text-xs
              font-semibold
              text-stone-950
            "
          >
            Mulai Proyek
            <FiArrowUpRight
              className="
                transition-transform
                duration-300

                group-hover:rotate-45
              "
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
