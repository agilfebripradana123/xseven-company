import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const advantages = [
  {
    number: "01",
    title: "Strategis",
    description:
      "Setiap solusi dirancang berdasarkan tujuan bisnis, kebutuhan pengguna, dan arah pertumbuhan brand.",
    icon: FiTarget,
  },
  {
    number: "02",
    title: "Kreatif",
    description:
      "Kami menggabungkan kreativitas dan fungsi untuk menciptakan pengalaman digital yang memiliki karakter.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Teknologi Modern",
    description:
      "Menggunakan teknologi modern untuk menghasilkan produk digital yang cepat, responsif, dan scalable.",
    icon: FiCode,
  },
  {
    number: "04",
    title: "Kolaboratif",
    description:
      "Kami melibatkan klien dalam setiap proses agar hasil akhir benar-benar sesuai dengan kebutuhan bisnis.",
    icon: FiUsers,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
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
          BACKGROUND DECORATION
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[30%]

          h-[400px]
          w-[400px]

          rounded-full
          bg-primary/[0.06]
          blur-[130px]
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
          bg-secondary/[0.05]
          blur-[140px]
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
                Kenapa Xseven?
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
              Partner Digital yang Tepat untuk{" "}
              <span className="text-primary">Mengembangkan Bisnis.</span>
            </h2>
          </motion.div>

          {/* RIGHT */}

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
              Kami tidak hanya membuat produk digital yang terlihat menarik.
              Xseven menggabungkan strategi, kreativitas, dan teknologi untuk
              menghasilkan solusi yang memiliki tujuan.
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
                Think · Create · Build
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================
            BENTO GRID
        ========================== */}

        <div
          className="
            grid
            gap-4

            md:grid-cols-2

            lg:grid-cols-4
            lg:grid-rows-2
          "
        >
          {/* =========================
              MAIN CARD
          ========================== */}

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
            whileHover="hover"
            transition={{
              duration: 0.7,
            }}
            className="
              group
              relative

              min-h-[350px]

              overflow-hidden

              rounded-[30px]

              border
              border-border

              bg-card

              p-7

              md:col-span-2

              lg:row-span-2
              lg:min-h-[520px]

              sm:p-8
              lg:p-10

              transition-colors
              duration-500

              hover:border-primary/40
            "
          >
            {/* GLOW */}

            <motion.div
              variants={{
                hover: {
                  scale: 1.25,
                  opacity: 1,
                },
              }}
              initial={{
                opacity: 0.5,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                pointer-events-none
                absolute
                -bottom-32
                -right-32

                h-[400px]
                w-[400px]

                rounded-full

                bg-primary/15
                blur-[110px]
              "
            />

            {/* DECORATIVE CIRCLE */}

            <motion.div
              variants={{
                hover: {
                  rotate: 20,
                  scale: 1.08,
                },
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                absolute
                -right-16
                -top-16

                h-48
                w-48

                rounded-full

                border
                border-primary/15
              "
            >
              <div
                className="
                  absolute
                  inset-7

                  rounded-full

                  border
                  border-primary/10
                "
              />

              <div
                className="
                  absolute
                  inset-14

                  rounded-full

                  border
                  border-primary/20
                "
              />
            </motion.div>

            {/* CONTENT */}

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
                {/* ICON */}

                <motion.div
                  variants={{
                    hover: {
                      rotate: 8,
                      scale: 1.08,
                    },
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
                  "
                >
                  <FiZap />
                </motion.div>

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
                  The Xseven Approach
                </p>

                <h3
                  className="
                    mt-4
                    max-w-lg

                    text-2xl
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.03em]
                    text-heading

                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Bukan sekadar membuat.
                  <br />
                  Kami membangun dengan{" "}
                  <span className="text-primary">tujuan.</span>
                </h3>

                <p
                  className="
                    mt-5
                    max-w-lg

                    text-sm
                    leading-7
                    text-body
                  "
                >
                  Setiap proyek dimulai dengan memahami masalah, menemukan
                  peluang, lalu mengubahnya menjadi solusi digital yang relevan
                  bagi bisnis dan pengguna.
                </p>
              </div>

              {/* BOTTOM */}

              <div
                className="
                  mt-10

                  flex
                  items-end
                  justify-between
                  gap-5
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-muted
                    "
                  >
                    Our Philosophy
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-heading
                    "
                  >
                    Strategy before execution.
                  </p>
                </div>

                <motion.a
                  href="#contact"
                  variants={{
                    hover: {
                      rotate: 45,
                      scale: 1.08,
                    },
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-border

                    bg-background

                    text-lg
                    text-heading

                    transition-colors
                    duration-300

                    hover:border-primary
                    hover:bg-primary
                    hover:text-stone-950
                  "
                >
                  <FiArrowUpRight />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* =========================
              ADVANTAGE CARDS
          ========================== */}

          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative

                  min-h-[250px]

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-border

                  bg-card

                  p-6

                  transition-colors
                  duration-500

                  hover:border-primary/40
                "
              >
                {/* HOVER GLOW */}

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

                    group-hover:scale-125
                    group-hover:bg-primary/15
                  "
                />

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
                  {/* TOP */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.15em]
                        text-primary
                      "
                    >
                      {item.number}
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-full

                        bg-primary/10

                        text-base
                        text-primary

                        transition-all
                        duration-300

                        group-hover:rotate-6
                        group-hover:bg-primary
                        group-hover:text-stone-950
                      "
                    >
                      <Icon />
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div className="mt-12">
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-heading

                        sm:text-xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-xs
                        leading-6
                        text-muted
                      "
                    >
                      {item.description}
                    </p>

                    {/* HOVER LINE */}

                    <div
                      className="
                        mt-5

                        h-px
                        w-8

                        bg-primary

                        transition-all
                        duration-500

                        group-hover:w-16
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM TEXT
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
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
              tracking-[0.2em]
              text-muted

              sm:text-[10px]
            "
          >
            Strategy · Creativity · Technology
          </p>

          <div className="h-px flex-1 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
