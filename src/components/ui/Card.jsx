export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        rounded-[28px]
        border border-border
        bg-card
        p-6

        shadow-sm

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        sm:p-8

        ${className}
      `}
    >
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20

          h-48
          w-48

          rounded-full
          bg-primary/5
          blur-[70px]

          transition-all
          duration-700

          group-hover:scale-125
          group-hover:bg-primary/15
        "
      />

      {/* Top Highlight */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0

          h-px
          w-0
          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-primary
          to-transparent

          transition-all
          duration-700

          group-hover:w-[65%]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}