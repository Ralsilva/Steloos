import { useEffect, useRef } from "react";

interface StarAnimationProps {
  size?: number;
  className?: string;
}

export default function StarAnimation({ size = 40, className = "" }: StarAnimationProps) {
  const starRef = useRef<SVGSVGElement>(null);
  
  // Efeito para animação de brilho aleatório
  useEffect(() => {
    if (!starRef.current) return;
    
    // Deixa a animação com tempo aleatório para cada estrela
    const randomDelay = Math.random() * 2;
    const randomDuration = 2 + Math.random() * 3;
    
    starRef.current.style.animationDelay = `${randomDelay}s`;
    starRef.current.style.animationDuration = `${randomDuration}s`;
    
    // Cria um pequeno movimento aleatório
    const interval = setInterval(() => {
      if (starRef.current) {
        const smallRandomMove = Math.random() * 3 - 1.5;
        starRef.current.style.transform = `translateY(${smallRandomMove}px)`;
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <svg
      ref={starRef}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-glow ${className}`}
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.3"
        className="animate-pulse"
      />
    </svg>
  );
}