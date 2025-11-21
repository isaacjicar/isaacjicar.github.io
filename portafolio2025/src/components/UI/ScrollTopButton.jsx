import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(y > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Volver arriba"
      className="
        fixed bottom-6 right-6 z-50
        rounded-full px-4 py-3
        shadow-lg
        bg-[#4C6CB3] text-white
        hover:scale-105 hover:bg-[#4C9FB3]
        transition-transform duration-200
      "
    >
      ↑
    </button>
  );
}
