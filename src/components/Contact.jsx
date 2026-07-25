import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Website Development",
    "UI/UX Design",
    "Brand Identity",
    "Web Application",
    "Digital Strategy",
    "Lainnya",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      SEMENTARA:
      Form belum dikirim ke backend/email.
      Nanti bisa kita hubungkan ke:
      - FormSubmit
      - EmailJS
      - Web3Forms
      - Backend sendiri
    */

    console.log("Contact Form:", formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
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
          BACKGROUND DECORATION
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
          bottom-[-120px]

          h-[500px]
          w-[500px]

          rounded-full
          bg-secondary/[0.05]
          blur-[150px]
        "
      />

      {/* =========================
          CONTAINER
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
                Hubungi Kami
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
              Punya Ide? Mari Kita{" "}
              <span className="text-primary">Wujudkan Bersama.</span>
            </h2>
          </motion.div>

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
              Ceritakan ide, kebutuhan, atau tantangan digital bisnis Anda. Tim
              Xseven siap membantu mengubahnya menjadi solusi yang tepat.
            </p>

            <div className="mt-5 flex items-center gap-3">
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
                Start a Conversation
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================
            CONTACT GRID
        ========================== */}

        <div
          className="
            grid
            gap-5

            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-6
          "
        >
          {/* =========================
              LEFT INFORMATION
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden

              rounded-[28px]

              border
              border-border

              bg-card

              p-6

              sm:p-8
              lg:p-9
            "
          >
            {/* GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -left-28
                -top-28

                h-[280px]
                w-[280px]

                rounded-full
                bg-primary/[0.08]
                blur-[90px]
              "
            />

            <div className="relative z-10">
              {/* AVAILABLE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-primary/20

                  bg-primary/10

                  px-3
                  py-1.5
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
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]

                    text-body
                  "
                >
                  Available for Project
                </span>
              </div>

              {/* TEXT */}

              <h3
                className="
                  mt-7
                  text-2xl
                  font-bold
                  tracking-[-0.03em]
                  text-heading

                  sm:text-3xl
                "
              >
                Mari bicara tentang project Anda.
              </h3>

              <p
                className="
                  mt-4
                  max-w-md

                  text-sm
                  leading-7
                  text-muted
                "
              >
                Hubungi kami melalui form atau informasi kontak berikut. Kami
                akan membantu menemukan solusi digital yang sesuai dengan
                kebutuhan Anda.
              </p>

              {/* =========================
                  CONTACT LIST
              ========================== */}

              <div className="mt-9 space-y-3">
                {/* EMAIL */}

                <ContactItem
                  icon={<FiMail />}
                  label="Email"
                  value="hello@xseven.co"
                />

                {/* PHONE */}

                <ContactItem
                  icon={<FiPhone />}
                  label="Telepon"
                  value="+62 812 3456 7890"
                />

                {/* LOCATION */}

                <ContactItem
                  icon={<FiMapPin />}
                  label="Lokasi"
                  value="Wonosobo, Jawa Tengah, Indonesia"
                />

                {/* HOURS */}

                <ContactItem
                  icon={<FiClock />}
                  label="Jam Kerja"
                  value="Senin — Jumat, 09.00 — 17.00"
                />
              </div>

              {/* =========================
                  RESPONSE
              ========================== */}

              <div
                className="
                  mt-9

                  rounded-2xl

                  border
                  border-primary/20

                  bg-primary/[0.06]

                  p-4
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      h-8
                      w-8

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-primary

                      text-stone-950
                    "
                  >
                    <FiCheck size={14} />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-heading
                      "
                    >
                      Fast Response
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-5
                        text-muted
                      "
                    >
                      Kami biasanya membalas pesan dalam waktu 1 × 24 jam kerja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================
              CONTACT FORM
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              relative
              overflow-hidden

              rounded-[28px]

              border
              border-border

              bg-card

              p-6

              sm:p-8
              lg:p-9
            "
          >
            {/* FORM HEADER */}

            <div className="mb-8">
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-primary
                "
              >
                Project Inquiry
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-heading

                  sm:text-2xl
                "
              >
                Ceritakan kebutuhan Anda.
              </h3>
            </div>

            {/* SUCCESS MESSAGE */}

            {isSubmitted && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  mb-6

                  flex
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-success/20

                  bg-success/10

                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8

                    items-center
                    justify-center

                    rounded-full

                    bg-success

                    text-white
                  "
                >
                  <FiCheck />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-heading
                    "
                  >
                    Pesan berhasil disiapkan.
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      text-muted
                    "
                  >
                    Form demo berhasil diproses.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              {/* NAME + EMAIL */}

              <div
                className="
                  grid
                  gap-5

                  sm:grid-cols-2
                "
              >
                <FormField label="Nama" required>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Email" required>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    required
                    className={inputClass}
                  />
                </FormField>
              </div>

              {/* COMPANY + SERVICE */}

              <div
                className="
                  mt-5
                  grid
                  gap-5

                  sm:grid-cols-2
                "
              >
                <FormField label="Perusahaan">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nama perusahaan"
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Layanan" required>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Pilih layanan</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              {/* MESSAGE */}

              <div className="mt-5">
                <FormField label="Ceritakan Project Anda" required>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Ceritakan sedikit tentang project, kebutuhan, atau ide yang ingin Anda kembangkan..."
                    required
                    className={`
                      ${inputClass}
                      min-h-[150px]
                      resize-none
                    `}
                  />
                </FormField>
              </div>

              {/* BOTTOM */}

              <div
                className="
                  mt-7

                  flex
                  flex-col
                  gap-4

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-xs
                    text-[10px]
                    leading-5
                    text-muted
                  "
                >
                  Dengan mengirim form ini, Anda setuju untuk dihubungi terkait
                  kebutuhan project.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group

                    inline-flex
                    items-center
                    justify-center
                    gap-3

                    rounded-full

                    bg-primary

                    px-6
                    py-3.5

                    text-xs
                    font-semibold

                    text-stone-950

                    shadow-[0_10px_30px_rgba(245,158,11,0.20)]

                    transition-shadow
                    duration-300

                    hover:shadow-[0_15px_40px_rgba(245,158,11,0.30)]
                  "
                >
                  Kirim Pesan
                  <FiSend
                    className="
                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

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
            duration: 0.6,
          }}
          className="
            mt-5

            flex
            flex-col
            gap-5

            rounded-[24px]

            border
            border-border

            bg-card

            p-5

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-6
          "
        >
          <div>
            <p
              className="
                text-xs
                font-semibold
                text-heading
              "
            >
              Belum siap memulai project?
            </p>

            <p
              className="
                mt-1
                text-[10px]
                leading-5
                text-muted
              "
            >
              Tidak masalah. Mari ngobrol santai tentang ide Anda terlebih
              dahulu.
            </p>
          </div>

          <a
            href="mailto:hello@xseven.co"
            className="
              group

              inline-flex
              items-center
              gap-2

              text-xs
              font-semibold

              text-primary
            "
          >
            hello@xseven.co
            <FiArrowUpRight
              className="
                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   CONTACT ITEM
========================= */

function ContactItem({ icon, label, value }) {
  return (
    <div
      className="
        group

        flex
        items-center
        gap-4

        rounded-2xl

        border
        border-border

        bg-background

        p-4

        transition-all
        duration-300

        hover:border-primary/30
        hover:-translate-y-0.5
      "
    >
      <div
        className="
          flex
          h-10
          w-10

          shrink-0

          items-center
          justify-center

          rounded-full

          bg-primary/10

          text-primary

          transition-all
          duration-300

          group-hover:bg-primary
          group-hover:text-stone-950
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-muted
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            truncate
            text-xs
            font-medium
            text-heading

            sm:text-sm
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================
   FORM FIELD
========================= */

function FormField({ label, required = false, children }) {
  return (
    <div>
      <label
        className="
          mb-2.5
          block

          text-[10px]
          font-semibold
          uppercase
          tracking-[0.12em]

          text-body
        "
      >
        {label}

        {required && <span className="ml-1 text-primary">*</span>}
      </label>

      {children}
    </div>
  );
}

/* =========================
   INPUT STYLE
========================= */

const inputClass = `
  w-full

  rounded-2xl

  border
  border-border

  bg-background

  px-4
  py-3.5

  text-sm
  text-heading

  outline-none

  transition-all
  duration-300

  placeholder:text-muted/60

  hover:border-primary/30

  focus:border-primary
  focus:ring-4
  focus:ring-primary/10
`;
