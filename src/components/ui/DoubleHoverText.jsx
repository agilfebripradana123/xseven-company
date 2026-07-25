import { motion } from "framer-motion";

export default function DoubleHoverText({
  text,
  className = "",
}) {
  const transition = {
    duration: 0.45,
    ease: [0.215, 0.61, 0.355, 1],
  };

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`
        relative
        inline-flex
        overflow-hidden
        ${className}
      `}
    >
      {/* Invisible text untuk menentukan tinggi */}
      <span className="invisible">
        {text}
      </span>

      {/* Text pertama */}
      <motion.span
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-body
        "
        variants={{
          initial: {
            y: "0%",
          },
          hovered: {
            y: "-100%",
          },
        }}
        transition={transition}
      >
        {text}
      </motion.span>

      {/* Text kedua */}
      <motion.span
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-primary
        "
        variants={{
          initial: {
            y: "100%",
          },
          hovered: {
            y: "0%",
          },
        }}
        transition={transition}
      >
        {text}
      </motion.span>
    </motion.span>
  );
}