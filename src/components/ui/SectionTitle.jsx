export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        transition-all
        duration-300
        hover:border-primary/40
        hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
