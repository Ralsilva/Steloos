import { useEffect, useState } from "react";

interface StarAnimationProps {
  size?: number;
  className?: string;
}

export default function StarAnimation({ size = 40, className = "" }: StarAnimationProps) {
  const [rotationAngle, setRotationAngle] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle(prevAngle => (prevAngle + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`rainbow-animation ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      >
        <path
          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
          fill="#FFD700"
          stroke="#FF9D5C"
          strokeWidth="1"
        />
        <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
