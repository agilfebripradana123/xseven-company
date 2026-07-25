import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useSpring } from "framer-motion";

import {
  FiArrowDown,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiSearch,
  FiTarget,
  FiZap,
} from "react-icons/fi";

/* =========================
   PROCESS DATA
========================= */

const processes = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Memahami Kebutuhan",
    description:
      "Kami memulai dengan memahami bisnis, target pengguna, tujuan, serta masalah yang ingin diselesaikan.",
    detail:
      "Tahap ini menjadi fondasi agar solusi yang dikembangkan memiliki arah yang jelas dan sesuai dengan kebutuhan bisnis.",
    icon: FiSearch,
    points: [
      "Analisis kebutuhan bisnis",
      "Identifikasi target pengguna",
      "Menentukan tujuan project",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Menentukan Arah",
    description:
      "Insight dari tahap discovery diterjemahkan menjadi strategi dan rencana pengerjaan yang terstruktur.",
    detail:
      "Kami menentukan prioritas fitur, struktur produk, teknologi, dan pendekatan terbaik sebelum proses produksi dimulai.",
    icon: FiTarget,
    points: ["Project planning", "Menentukan prioritas", "Technology planning"],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Menciptakan Pengalaman",
    description:
      "Ide dan strategi mulai diterjemahkan menjadi pengalaman visual yang intuitif dan memiliki karakter.",
    detail:
      "Kami memastikan desain bukan hanya menarik secara visual, tetapi juga mudah digunakan dan mendukung tujuan bisnis.",
    icon: FiLayers,
    points: ["Wireframe & prototype", "UI/UX design", "Visual direction"],
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Membangun Produk",
    description:
      "Desain kemudian dikembangkan menjadi produk digital yang cepat, responsif, dan dapat digunakan.",
    detail:
      "Proses development dilakukan menggunakan teknologi modern dengan perhatian terhadap performa dan kualitas kode.",
    icon: FiCode,
    points: [
      "Frontend development",
      "Backend integration",
      "Responsive implementation",
    ],
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "Siap Berkembang",
    description:
      "Setelah melalui pengujian dan penyempurnaan, produk siap diluncurkan dan digunakan oleh pengguna.",
    detail:
      "Kami memastikan produk berjalan dengan baik serta siap dikembangkan lebih lanjut mengikuti kebutuhan bisnis.",
    icon: FiZap,
    points: ["Quality assurance", "Final optimization", "Deployment & launch"],
  },
];

/* =========================
   TIMELINE CONFIG
========================= */

const VIEWPORT_HEIGHT = 420;
const ITEM_HEIGHT = 78;
const CENTER_Y = VIEWPORT_HEIGHT / 2;

const springConfig = {
  damping: 22,
  stiffness: 130,
  mass: 0.8,
};

export default function WorkProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);

  const viewportRef = useRef(null);
  const activeIndexRef = useRef(0);
  const isTransitioning = useRef(false);

  const scrollOffset = useMotionValue(0);
  const smoothOffset = useSpring(scrollOffset, springConfig);

  const active = processes[activeIndex];
  const ActiveIcon = active.icon;

  /* =========================
     UPDATE ACTIVE REF
  ========================== */

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /* =========================
     LISTEN SPRING
  ========================== */

  useEffect(() => {
    const unsubscribe = smoothOffset.on("change", (latest) => {
      setCurrentOffset(latest);
    });

    return () => unsubscribe();
  }, [smoothOffset]);

  /* =========================
     DETECT ACTIVE STEP
  ========================== */

  useEffect(() => {
    const index = Math.min(
      processes.length - 1,
      Math.max(0, Math.round(currentOffset / ITEM_HEIGHT)),
    );

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  }, [currentOffset, activeIndex]);

  /* =========================
     WHEEL CONTROL
  ========================== */

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const handleWheel = (event) => {
      const direction = Math.sign(event.deltaY);

      if (direction === 0) return;

      const currentIndex = activeIndexRef.current;

      /*
       * Jika timeline sudah mentok,
       * biarkan halaman scroll normal.
       */

      if (
        (direction < 0 && currentIndex === 0) ||
        (direction > 0 && currentIndex === processes.length - 1)
      ) {
        return;
      }

      event.preventDefault();

      if (isTransitioning.current) return;

      const targetIndex = Math.min(
        processes.length - 1,
        Math.max(0, currentIndex + direction),
      );

      isTransitioning.current = true;

      animate(scrollOffset, targetIndex * ITEM_HEIGHT, {
        type: "spring",
        ...springConfig,

        onComplete: () => {
          isTransitioning.current = false;
        },
      });
    };

    viewport.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, [scrollOffset]);

  /* =========================
     CLICK STEP
  ========================== */

  const handleStepClick = (index) => {
    animate(scrollOffset, index * ITEM_HEIGHT, {
      type: "spring",
      ...springConfig,
    });
  };

  /* =========================
     DRAG
  ========================== */

  const handleDrag = (_, info) => {
    const current = scrollOffset.get();

    const next = current - info.delta.y * 0.8;

    const max = (processes.length - 1) * ITEM_HEIGHT;

    scrollOffset.set(Math.min(max, Math.max(0, next)));
  };

  const handleDragEnd = () => {
    const current = scrollOffset.get();

    const nearestIndex = Math.min(
      processes.length - 1,
      Math.max(0, Math.round(current / ITEM_HEIGHT)),
    );

    animate(scrollOffset, nearestIndex * ITEM_HEIGHT, {
      type: "spring",
      ...springConfig,
    });
  };

  /* =========================
     CURVED POSITION
  ========================== */

  const getPositionStyles = (index) => {
    const itemCenterY = index * ITEM_HEIGHT - currentOffset + CENTER_Y;

    const t = itemCenterY / VIEWPORT_HEIGHT;

    /*
       Kurva:

       01
          02
             03
          04
       05
    */

    let x = 10;

    if (t >= 0 && t <= 1) {
      x = 10 + 100 * 4 * t * (1 - t);
    }

    const distance = Math.abs(t - 0.5);

    const opacity = Math.max(0.12, 1 - distance * 1.9);

    const scale = Math.max(0.78, 1.08 - distance * 0.55);

    return {
      transform: `
        translate3d(
          ${x}px,
          ${itemCenterY - ITEM_HEIGHT / 2}px,
          0
        )
        scale(${scale})
      `,
      opacity,
      transformOrigin: "left center",
    };
  };

  return (
    <section
      id="process"
      className="
        relative
        w-full
        overflow-hidden
        bg-background

        px-3
        py-6

        sm:px-5
        sm:py-8

        lg:px-6
        lg:py-10
      "
    >
      {/* =========================
          LARGE CONTAINER
      ========================== */}

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

          shadow-[0_25px_80px_rgba(0,0,0,0.08)]

          sm:rounded-[40px]
          sm:px-8
          sm:py-20

          lg:rounded-[48px]
          lg:px-12
          lg:py-24

          xl:px-16
        "
      >
        {/* =========================
            AMBIENT BACKGROUND
        ========================== */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
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
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-48
            bottom-[-150px]

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
            right-[8%]
            top-[8%]

            h-2
            w-2

            rounded-full
            bg-primary

            shadow-[0_0_20px_rgba(245,158,11,0.8)]
          "
        />

        {/* =========================
            INNER CONTENT
        ========================== */}

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =========================
              HEADER
          ========================== */}

          <div
            className="
              mb-12

              grid
              gap-7

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
                  Proses Kerja
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
                Dari Ide Menjadi{" "}
                <span className="text-primary">Produk Digital.</span>
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
            >
              <p
                className="
                  max-w-md

                  text-sm
                  leading-7

                  text-body
                "
              >
                Setiap project dikerjakan melalui proses yang terstruktur, mulai
                dari memahami kebutuhan hingga produk siap digunakan.
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
                  Scroll · Drag · Explore
                </span>
              </div>
            </motion.div>
          </div>

          {/* =========================
              PROCESS CONTENT
          ========================== */}

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

              grid
              gap-8

              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* =========================
                TIMELINE
            ========================== */}

            <div
              className="
                relative

                flex
                justify-center
              "
            >
              <div
                ref={viewportRef}
                className="
                  relative

                  h-[420px]
                  w-full
                  max-w-[340px]

                  select-none
                  overflow-hidden
                "
              >
                {/* CURVE */}

                <svg
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    z-0

                    h-full
                    w-full
                  "
                  viewBox="0 0 340 420"
                  preserveAspectRatio="none"
                >
                  <path
                    d="
                      M 35 0
                      Q 250 210
                      35 420
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="5 8"
                    className="text-border"
                  />
                </svg>

                {/* =========================
                    ACTIVE DOT
                ========================== */}

                <motion.div
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [1, 0.75, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none

                    absolute
                    left-[110px]
                    top-1/2

                    z-30

                    h-3
                    w-3

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    border-2
                    border-card

                    bg-primary

                    shadow-[0_0_18px_rgba(245,158,11,0.85)]
                  "
                />

                {/* =========================
                    DRAG LAYER
                ========================== */}

                <motion.div
                  drag="y"
                  dragElastic={0.08}
                  dragMomentum={false}
                  onDrag={handleDrag}
                  onDragEnd={handleDragEnd}
                  className="
                    absolute
                    inset-0

                    z-20

                    cursor-grab

                    active:cursor-grabbing
                  "
                />

                {/* =========================
                    TIMELINE ITEMS
                ========================== */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    z-10
                  "
                >
                  {processes.map((process, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <div
                        key={process.number}
                        style={getPositionStyles(index)}
                        onClick={() => handleStepClick(index)}
                        className="
                          pointer-events-auto

                          absolute
                          left-0

                          flex
                          h-[78px]
                          w-full

                          cursor-pointer

                          items-center

                          pl-7
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          {/* NUMBER */}

                          <span
                            className={`
                              min-w-[28px]

                              text-[11px]
                              font-bold
                              tracking-[0.15em]

                              transition-colors
                              duration-300

                              ${isActive ? "text-primary" : "text-muted"}
                            `}
                          >
                            {process.number}
                          </span>

                          {/* ACTIVE INDICATOR */}

                          <span
                            className={`
                              h-1.5
                              shrink-0

                              rounded-full

                              transition-all
                              duration-500

                              ${
                                isActive
                                  ? "w-5 bg-primary"
                                  : "w-0 bg-transparent"
                              }
                            `}
                          />

                          {/* TITLE */}

                          <span
                            className={`
                              whitespace-nowrap

                              font-bold
                              tracking-[-0.03em]

                              transition-all
                              duration-300

                              ${
                                isActive
                                  ? `
                                    text-xl
                                    text-heading

                                    sm:text-2xl
                                  `
                                  : `
                                    text-lg
                                    text-muted

                                    sm:text-xl
                                  `
                              }
                            `}
                          >
                            {process.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* TOP FADE */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    left-0
                    right-0
                    top-0

                    z-40

                    h-20

                    bg-gradient-to-b

                    from-card
                    to-transparent
                  "
                />

                {/* BOTTOM FADE */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    bottom-0
                    left-0
                    right-0

                    z-40

                    h-20

                    bg-gradient-to-t

                    from-card
                    to-transparent
                  "
                />
              </div>
            </div>

            {/* =========================
                DETAIL PANEL
            ========================== */}

            <motion.div
              whileHover={{
                y: -3,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative

                min-h-[430px]

                overflow-hidden

                rounded-[28px]

                border
                border-border

                bg-background

                p-6

                shadow-[0_15px_50px_rgba(0,0,0,0.06)]

                transition-colors
                duration-500

                hover:border-primary/30

                sm:p-8

                lg:rounded-[32px]
                lg:p-10
              "
            >
              {/* PANEL GLOW */}

              <div
                className="
                  pointer-events-none

                  absolute
                  -right-32
                  -top-32

                  h-[350px]
                  w-[350px]

                  rounded-full

                  bg-primary/[0.08]

                  blur-[100px]

                  transition-all
                  duration-700

                  group-hover:scale-125
                  group-hover:bg-primary/[0.12]
                "
              />

              {/* DECORATIVE CIRCLE */}

              <div
                className="
                  pointer-events-none

                  absolute
                  -right-16
                  -top-16

                  h-44
                  w-44

                  rounded-full

                  border
                  border-primary/10
                "
              />

              {/* ACTIVE CONTENT */}

              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  relative
                  z-10

                  flex
                  min-h-[350px]
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
                      gap-5
                    "
                  >
                    <motion.div
                      initial={{
                        rotate: -15,
                        scale: 0.8,
                      }}
                      animate={{
                        rotate: 0,
                        scale: 1,
                      }}
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-full

                        bg-primary

                        text-xl
                        text-stone-950

                        shadow-[0_8px_25px_rgba(245,158,11,0.25)]
                      "
                    >
                      <ActiveIcon />
                    </motion.div>

                    <div
                      className="
                        rounded-full

                        border
                        border-border

                        bg-card

                        px-4
                        py-2

                        text-[10px]
                        font-semibold
                        tracking-[0.12em]

                        text-muted
                      "
                    >
                      {active.number} /{" "}
                      {String(processes.length).padStart(2, "0")}
                    </div>
                  </div>

                  {/* TEXT */}

                  <p
                    className="
                      mt-8

                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]

                      text-primary
                    "
                  >
                    {active.subtitle}
                  </p>

                  <h3
                    className="
                      mt-3

                      text-3xl
                      font-bold
                      tracking-[-0.04em]

                      text-heading

                      sm:text-4xl
                    "
                  >
                    {active.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl

                      text-sm
                      leading-7

                      text-body
                    "
                  >
                    {active.description}
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-xl

                      text-xs
                      leading-6

                      text-muted
                    "
                  >
                    {active.detail}
                  </p>

                  {/* POINTS */}

                  <div className="mt-7 space-y-3">
                    {active.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.08,
                        }}
                        className="
                            flex
                            items-center
                            gap-3
                          "
                      >
                        <span
                          className="
                              flex
                              h-7
                              w-7

                              shrink-0

                              items-center
                              justify-center

                              rounded-full

                              bg-primary/10

                              text-primary
                            "
                        >
                          <FiCheckCircle size={14} />
                        </span>

                        <span
                          className="
                              text-xs
                              font-medium

                              text-body
                            "
                        >
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* =========================
                    PROGRESS
                ========================== */}

                <div className="mt-10">
                  <div
                    className="
                      mb-3

                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-muted
                      "
                    >
                      Project Progress
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-bold

                        text-primary
                      "
                    >
                      {Math.round(((activeIndex + 1) / processes.length) * 100)}
                      %
                    </span>
                  </div>

                  <div
                    className="
                      h-1.5

                      overflow-hidden

                      rounded-full

                      bg-border
                    "
                  >
                    <motion.div
                      animate={{
                        width: `${
                          ((activeIndex + 1) / processes.length) * 100
                        }%`,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="
                        h-full

                        rounded-full

                        bg-primary

                        shadow-[0_0_12px_rgba(245,158,11,0.5)]
                      "
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =========================
              SCROLL HINT
          ========================== */}

          <div
            className="
              mt-8

              flex
              items-center
              justify-center
              gap-2

              text-muted
            "
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiArrowDown />
            </motion.div>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
              "
            >
              Scroll atau drag untuk melihat proses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
