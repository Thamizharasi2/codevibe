import { useEffect, useRef, useState } from "react";

export default function Counter({ end, label }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // slightly earlier on mobile
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    // Respect reduced motion (important for mobile + accessibility)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let start = 0;
    const duration = 1200; // slightly faster on mobile
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <div
      ref={counterRef}
      className="text-center px-2"
    >
      <h4 className="
        text-3xl sm:text-4xl md:text-5xl 
        font-extrabold 
        bg-gradient-to-r from-purple-600 to-indigo-600 
        bg-clip-text text-transparent
        leading-tight
      ">
        {count}<span className="text-xl align-top">+</span>
      </h4>

      <p className="mt-2 text-sm sm:text-base text-gray-600">
        {label}
      </p>
    </div>
  );
}
