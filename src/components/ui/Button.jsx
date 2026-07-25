export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyle = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-semibold
    whitespace-nowrap
    transition-all
    duration-300
    active:scale-[0.97]
  `;

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variants = {
    primary: `
      border border-primary
      bg-primary
      text-stone-950
      hover:border-accent
      hover:bg-accent
      hover:shadow-[0_0_25px_rgba(245,158,11,0.20)]
    `,

    secondary: `
      border border-border
      bg-card
      text-heading
      hover:border-primary
      hover:bg-primary/5
      hover:text-primary
    `,

    ghost: `
      border border-transparent
      bg-transparent
      text-body
      hover:bg-primary/10
      hover:text-primary
    `,
  };

  return (
    <button
      className={`
        ${baseStyle}
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
