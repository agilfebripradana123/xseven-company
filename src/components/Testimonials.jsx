import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMessageSquare,
  FiStar,
} from "react-icons/fi";

/* =========================
   TESTIMONIAL DATA
========================= */

const testimonials = [
  {
    id: 1,
    name: "Raka Pratama",
    role: "Founder",
    company: "Nexa Commerce",
    initials: "RP",
    rating: 5,
    text: "Xseven mampu memahami kebutuhan bisnis kami dengan sangat baik. Prosesnya terstruktur, komunikasinya jelas, dan hasil akhirnya berhasil memberikan identitas digital yang jauh lebih profesional.",
    project: "E-Commerce Platform",
  },
  {
    id: 2,
    name: "Alya Maheswari",
    role: "Product Manager",
    company: "Finova",
    initials: "AM",
    rating: 5,
    text: "Kolaborasi dengan Xseven terasa sangat fleksibel. Mereka tidak hanya fokus pada tampilan, tetapi juga memikirkan pengalaman pengguna dan bagaimana produk dapat berkembang dalam jangka panjang.",
    project: "Finance Mobile App",
  },
  {
    id: 3,
    name: "Dimas Aditya",
    role: "Creative Director",
    company: "Arunika Studio",
    initials: "DA",
    rating: 5,
    text: "Tim Xseven berhasil menerjemahkan ide yang masih abstrak menjadi identitas visual yang kuat dan konsisten. Setiap keputusan desain memiliki alasan yang jelas.",
    project: "Brand Identity",
  },
  {
    id: 4,
    name: "Nadia Putri",
    role: "Marketing Lead",
    company: "Lumina Space",
    initials: "NP",
    rating: 5,
    text: "Website baru kami terasa jauh lebih modern, cepat, dan mudah digunakan. Yang paling kami sukai adalah perhatian Xseven terhadap detail selama proses pengerjaan.",
    project: "Company Profile",
  },
  {
    id: 5,
    name: "Fajar Ramadhan",
    role: "CEO",
    company: "Kreva Digital",
    initials: "FR",
    rating: 5,
    text: "Xseven bukan hanya vendor bagi kami, tetapi benar-benar menjadi partner selama proses pengembangan. Komunikasi cepat dan setiap feedback ditangani dengan sangat baik.",
    project: "Digital Platform",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================
     SLIDER CONTROL
  ========================== */

  const handleNext = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.children[0];

    if (!card) return;

    const distance = card.offsetWidth + 16;

    slider.scrollBy({
      left: distance,
      behavior: "smooth",
    });

    setActiveIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  };

  const handlePrev = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.children[0];

    if (!card) return;

    const distance = card.offsetWidth + 16;

    slider.scrollBy({
      left: -distance,
      behavior: "smooth",
    });

    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="testimonials"
      className="
    relative
    w-full
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

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
      pointer-events-none
      absolute
      -left-48
      top-[20%]

      h-[500px]
      w-[500px]

      rounded-full
      bg-primary/[0.06]
      blur-[150px]
    "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
      pointer-events-none
      absolute
      -right-48
      bottom-[-100px]

      h-[500px]
      w-[500px]

      rounded-full
      bg-secondary/[0.05]
      blur-[150px]
    "
      />

      {/* =========================
            CONTENT
        ========================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================
              HEADER
          ========================== */}

        <div
          className="
              mb-12

              grid
              gap-8

              lg:mb-16
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
              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
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
                Testimonial
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
              Apa Kata Mereka Tentang{" "}
              <span className="text-primary">Xseven.</span>
            </h2>
          </motion.div>

          {/* =========================
                RATING
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
              delay: 0.1,
            }}
            className="
                lg:flex
                lg:justify-end
              "
          >
            <div>
              <div className="flex items-end gap-3">
                <span
                  className="
                      text-5xl
                      font-bold
                      tracking-[-0.05em]

                      text-heading
                    "
                >
                  4.9
                </span>

                <span
                  className="
                      mb-1
                      text-xs
                      text-muted
                    "
                >
                  / 5.0
                </span>
              </div>

              {/* STARS */}

              <div className="mt-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className="
                        fill-primary
                        text-primary
                      "
                  />
                ))}
              </div>

              <p
                className="
                    mt-3
                    text-xs
                    text-muted
                  "
              >
                Berdasarkan pengalaman client kami.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================
              TOP INFORMATION
          ========================== */}

        <div
          className="
              mb-6

              flex
              items-center
              justify-between
              gap-5
            "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <p
              className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-muted

                  sm:text-[10px]
                "
            >
              Client Stories
            </p>
          </div>

          {/* ARROWS DESKTOP */}

          <div
            className="
                hidden
                items-center
                gap-2

                sm:flex
              "
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="
                  group

                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-border

                  bg-background

                  text-heading

                  transition-all
                  duration-300

                  hover:border-primary
                  hover:bg-primary
                  hover:text-stone-950

                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              aria-label="Testimonial sebelumnya"
            >
              <FiArrowLeft
                className="
                    transition-transform
                    duration-300

                    group-hover:-translate-x-0.5
                  "
              />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === testimonials.length - 1}
              className="
                  group

                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-border

                  bg-background

                  text-heading

                  transition-all
                  duration-300

                  hover:border-primary
                  hover:bg-primary
                  hover:text-stone-950

                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              aria-label="Testimonial berikutnya"
            >
              <FiArrowRight
                className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                  "
              />
            </button>
          </div>
        </div>

        {/* =========================
              TESTIMONIAL SLIDER
          ========================== */}

        <div
          ref={sliderRef}
          className="
    flex
    snap-x
    snap-mandatory
    gap-4

    overflow-x-auto
    overflow-y-visible

    px-1
    pb-2
    pt-4

    scroll-smooth

    [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden
  "
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                  group
                  relative

                  min-h-[370px]

                  min-w-[88%]

                  snap-start

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-border

                  bg-background

                  p-6

                  transition-colors
                  duration-500

                  hover:border-primary/40

                  sm:min-w-[48%]
                  sm:p-7

                  lg:min-w-[calc(33.333%-11px)]
                "
            >
              {/* HOVER GLOW */}

              <div
                className="
                    pointer-events-none

                    absolute
                    -right-28
                    -top-28

                    h-[260px]
                    w-[260px]

                    rounded-full

                    bg-primary/[0.05]

                    blur-[90px]

                    transition-all
                    duration-700

                    group-hover:scale-125
                    group-hover:bg-primary/[0.12]
                  "
              />

              {/* =========================
                    CARD CONTENT
                ========================== */}

              <div
                className="
                    relative
                    z-10

                    flex
                    h-full
                    flex-col
                    justify-between
                  "
              >
                <div>
                  {/* TOP */}

                  <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                  >
                    {/* QUOTE */}

                    <div
                      className="
                          flex
                          h-11
                          w-11

                          items-center
                          justify-center

                          rounded-full

                          bg-primary/10

                          text-lg
                          text-primary

                          transition-all
                          duration-300

                          group-hover:rotate-6
                          group-hover:bg-primary
                          group-hover:text-stone-950
                        "
                    >
                      <FiMessageSquare />
                    </div>

                    {/* CARD RATING */}

                    <div
                      className="
                          flex
                          items-center
                          gap-1
                        "
                    >
                      <FiStar
                        className="
                            fill-primary
                            text-primary
                          "
                      />

                      <span
                        className="
                            text-xs
                            font-semibold

                            text-heading
                          "
                      >
                        {testimonial.rating}.0
                      </span>
                    </div>
                  </div>

                  {/* QUOTE TEXT */}

                  <blockquote
                    className="
                        mt-8

                        text-base
                        font-medium
                        leading-7

                        text-heading

                        sm:text-[17px]
                      "
                  >
                    “{testimonial.text}”
                  </blockquote>
                </div>

                {/* =========================
                      CLIENT
                  ========================== */}

                <div className="mt-10">
                  <div
                    className="
                        mb-5

                        h-px
                        w-full

                        bg-border
                      "
                  />

                  <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                  >
                    <div
                      className="
                          flex
                          items-center
                          gap-3
                        "
                    >
                      {/* AVATAR */}

                      <div
                        className="
                            flex
                            h-11
                            w-11

                            shrink-0

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-primary/20

                            bg-primary/10

                            text-xs
                            font-bold

                            text-primary

                            transition-all
                            duration-300

                            group-hover:bg-primary
                            group-hover:text-stone-950
                          "
                      >
                        {testimonial.initials}
                      </div>

                      {/* NAME */}

                      <div>
                        <p
                          className="
                              text-sm
                              font-semibold

                              text-heading
                            "
                        >
                          {testimonial.name}
                        </p>

                        <p
                          className="
                              mt-0.5

                              text-[10px]

                              text-muted
                            "
                        >
                          {testimonial.role} · {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT */}

                  <div
                    className="
                        mt-5

                        inline-flex

                        rounded-full

                        border
                        border-border

                        px-3
                        py-1.5

                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]

                        text-muted
                      "
                  >
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================
              MOBILE CONTROLS
          ========================== */}

        <div
          className="
              mt-6

              flex
              items-center
              justify-between

              sm:hidden
            "
        >
          {/* PROGRESS DOT */}

          <div className="flex items-center gap-1.5">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`
                    h-1.5
                    rounded-full

                    transition-all
                    duration-300

                    ${
                      index === activeIndex
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-border"
                    }
                  `}
              />
            ))}
          </div>

          {/* BUTTONS */}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-border

                  bg-background

                  text-heading

                  disabled:opacity-30
                "
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === testimonials.length - 1}
              className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-primary

                  text-stone-950

                  disabled:opacity-30
                "
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* =========================
              BOTTOM
          ========================== */}

        <div
          className="
              mt-12

              flex
              items-center
              gap-4
            "
        >
          <div className="h-px flex-1 bg-border" />

          <p
            className="
                whitespace-nowrap

                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-muted
              "
          >
            Trusted Collaboration
          </p>

          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}
