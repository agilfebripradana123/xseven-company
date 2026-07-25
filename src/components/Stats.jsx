import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Proyek Selesai",
  },
  {
    value: 30,
    suffix: "+",
    label: "Klien Puas",
  },
  {
    value: 5,
    suffix: "+",
    label: "Tahun Pengalaman",
  },
  {
    value: 98,
    suffix: "%",
    label: "Kepuasan Klien",
  },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 1500;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="
        relative
        bg-background
        px-4
        py-8
        sm:px-6
        lg:px-8
        lg:py-10
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-40
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[80px]
        "
      />

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
          ease: [0.215, 0.61, 0.355, 1],
        }}
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[28px]
          border
          border-border
          bg-card
          shadow-[0_15px_50px_rgba(0,0,0,0.08)]
        "
      >
        {/* top glow line */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[60%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-primary/60
            to-transparent
          "
        />

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                flex
                min-h-[130px]
                flex-col
                items-center
                justify-center
                px-4
                py-6
                text-center

                border-border

                odd:border-r
                [&:nth-child(-n+2)]:border-b

                lg:min-h-[150px]
                lg:border-b-0
                lg:border-r

                lg:last:border-r-0
              "
            >
              {/* Hover background */}

              <div
                className="
                  absolute
                  inset-2
                  rounded-2xl
                  bg-primary/0
                  transition-all
                  duration-500
                  group-hover:bg-primary/5
                "
              />

              {/* Dot */}

              <div
                className="
                  relative
                  mb-3
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-primary
                  shadow-[0_0_12px_rgba(245,158,11,0.8)]
                  transition-transform
                  duration-300
                  group-hover:scale-150
                "
              />

              {/* Number */}

              <h3
                className="
                  relative
                  text-3xl
                  font-bold
                  tracking-[-0.04em]
                  text-heading

                  sm:text-4xl
                  lg:text-[42px]
                "
              >
                <Counter value={item.value} suffix={item.suffix} />
              </h3>

              {/* Label */}

              <p
                className="
                  relative
                  mt-2
                  text-[11px]
                  font-medium
                  text-muted

                  sm:text-xs
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
