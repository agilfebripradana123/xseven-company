import {
  FiSearch,
  FiTarget,
  FiLayers,
  FiCode,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

const processes = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Memahami Kebutuhan",
    description:
      "Memahami bisnis, target pengguna, tujuan, serta masalah yang ingin diselesaikan.",
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
      "Menyusun strategi dan rencana pengerjaan agar proses pengembangan lebih terarah.",
    icon: FiTarget,
    points: ["Project planning", "Menentukan prioritas", "Technology planning"],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Menciptakan Pengalaman",
    description:
      "Menerjemahkan ide menjadi desain yang menarik, intuitif, dan mudah digunakan.",
    icon: FiLayers,
    points: ["Wireframe & prototype", "UI/UX design", "Visual direction"],
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Membangun Produk",
    description:
      "Mengembangkan desain menjadi website yang responsif, cepat, dan dapat digunakan.",
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
    subtitle: "Siap Digunakan",
    description:
      "Melakukan pengecekan akhir, optimasi, dan deployment agar website siap digunakan.",
    icon: FiZap,
    points: ["Quality assurance", "Final optimization", "Deployment & launch"],
  },
];

export default function WorkProcess() {
  return (
    <section
      id="process"
      className="w-full bg-background px-3 py-6 sm:px-5 sm:py-8 lg:px-6 lg:py-10"
    >
      <div
        className="
          relative mx-auto w-full max-w-[1500px]
          overflow-hidden
          rounded-[32px] border border-border bg-card
          px-5 py-16
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          sm:rounded-[40px] sm:px-8 sm:py-20
          lg:rounded-[48px] lg:px-12 lg:py-24
          xl:px-16
        "
      >
        {/* Background Decoration */}
        <div
          className="
            pointer-events-none absolute -left-40 top-20
            h-[350px] w-[350px]
            rounded-full bg-primary/[0.06] blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none absolute -right-40 bottom-0
            h-[350px] w-[350px]
            rounded-full bg-secondary/[0.05] blur-[120px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= HEADER ================= */}

          <div
            className="
              mb-12 grid gap-6
              lg:mb-16
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-end
            "
          >
            <div>
              {/* Badge */}
              <div
                className="
                  mb-5 inline-flex items-center gap-2
                  rounded-full border border-primary/20
                  bg-primary/10 px-4 py-2
                "
              >
                <span
                  className="
                    h-2 w-2 rounded-full bg-primary
                    shadow-[0_0_12px_rgba(245,158,11,0.8)]
                  "
                />

                <span
                  className="
                    text-[10px] font-semibold uppercase
                    tracking-[0.18em] text-primary
                  "
                >
                  Proses Kerja
                </span>
              </div>

              {/* Title */}
              <h2
                className="
                  max-w-3xl
                  text-3xl font-bold leading-[1.08]
                  tracking-[-0.04em] text-heading
                  sm:text-4xl md:text-5xl
                  lg:text-[52px]
                "
              >
                Dari Ide Menjadi{" "}
                <span className="text-primary">Produk Digital.</span>
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="max-w-md text-sm leading-7 text-body">
                Setiap project dikerjakan melalui proses yang terstruktur, mulai
                dari memahami kebutuhan hingga produk siap digunakan.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />

                <span
                  className="
                    text-[10px] font-semibold uppercase
                    tracking-[0.18em] text-muted
                  "
                >
                  Simple · Structured · Efficient
                </span>
              </div>
            </div>
          </div>

          {/* ================= PROCESS GRID ================= */}

          <div
            className="
              grid grid-cols-1 gap-4
              md:grid-cols-2
              xl:grid-cols-5
            "
          >
            {processes.map((process) => {
              const Icon = process.icon;

              return (
                <div
                  key={process.number}
                  className="
                    group relative
                    overflow-hidden
                    rounded-[24px]
                    border border-border
                    bg-background
                    p-6
                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      absolute right-5 top-4
                      text-4xl font-bold
                      tracking-[-0.06em]
                      text-border
                    "
                  >
                    {process.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      relative z-10
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      bg-primary
                      text-lg text-stone-950
                    "
                  >
                    <Icon />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-8">
                    <p
                      className="
                        text-[9px] font-semibold uppercase
                        tracking-[0.18em]
                        text-primary
                      "
                    >
                      {process.subtitle}
                    </p>

                    <h3
                      className="
                        mt-2 text-xl font-bold
                        tracking-[-0.03em]
                        text-heading
                      "
                    >
                      {process.title}
                    </h3>

                    <p
                      className="
                        mt-3 text-xs
                        leading-6 text-body
                      "
                    >
                      {process.description}
                    </p>

                    {/* Points */}
                    <div className="mt-6 space-y-3">
                      {process.points.map((point) => (
                        <div key={point} className="flex items-start gap-2">
                          <FiCheckCircle
                            className="
                              mt-[2px]
                              shrink-0
                              text-primary
                            "
                            size={13}
                          />

                          <span
                            className="
                              text-[11px]
                              leading-5
                              text-muted
                            "
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-[2px] w-0
                      bg-primary
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </div>
              );
            })}
          </div>

          {/* ================= BOTTOM ================= */}

          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border" />

            <p
              className="
                text-center text-[9px]
                font-semibold uppercase
                tracking-[0.18em]
                text-muted
              "
            >
              From concept to launch
            </p>

            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
