import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-border
        bg-card
        text-heading
        transition-all duration-300
        hover:border-primary
        hover:text-primary
      "
      aria-label="Change theme"
    >
      {theme === "dark" ? (
        <FiSun size={19} />
      ) : (
        <FiMoon size={19} />
      )}
    </button>
  );
}