import { useEffect, useRef } from "react";

export default function MovingText(props) {
  const containerRef = useRef(null);

  const text = props.text;
  const sizeClass = props.size || "movingText"

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll("span");

    const move = (e) => {
      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();

        const dx = rect.left + rect.width / 2 - e.clientX;
        const dy = rect.top + rect.height / 2 - e.clientY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const radius = 150;

        if (distance < radius) {
          const force = (radius - distance) / radius;

          letter.style.transform =
            `translate(${dx * force}px, ${dy * force}px)`;
        } else {
          letter.style.transform = "translate(0,0)";
        }
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={containerRef} className={`text ${sizeClass}`}>
      {text.split("").map((char, i) => (
        <span key={i} className="letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}