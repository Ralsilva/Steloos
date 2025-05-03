import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedBirdProps {
  size?: number;
  color?: string;
  className?: string;
  fly?: boolean;
  onClick?: () => void;
}

export function AnimatedBird({
  size = 40,
  color = "#3B82F6",
  className = "",
  fly = false,
  onClick
}: AnimatedBirdProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(fly);
  const controls = useAnimation();
  
  useEffect(() => {
    if (isAnimating || fly) {
      controls.start({
        y: [0, -15, 0],
        rotateZ: [0, 5, 0, -5, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      });
    } else {
      controls.stop();
      controls.set({ y: 0, rotateZ: 0 });
    }
  }, [controls, isAnimating, fly]);
  
  const handleClick = () => {
    if (!fly) {
      setIsAnimating(prev => !prev);
    }
    if (onClick) onClick();
  };
  
  const primaryColor = isHovered ? "#60A5FA" : color;
  const secondaryColor = isHovered ? "#DBEAFE" : "#F8FAFC";
  
  return (
    <motion.div
      className={`inline-block ${fly ? "pointer-events-none" : "cursor-pointer"} ${className}`}
      animate={controls}
      whileHover={{ scale: fly ? 1 : 1.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bird body */}
        <motion.ellipse
          cx="25"
          cy="25"
          rx="15"
          ry="12"
          fill={primaryColor}
          animate={isAnimating || fly ? {
            scale: [1, 1.05, 1],
            transition: { duration: 1.5, repeat: Infinity }
          } : {}}
        />
        
        {/* Bird head */}
        <motion.circle
          cx="35"
          cy="20"
          r="8"
          fill={primaryColor}
          animate={isAnimating || fly ? {
            rotate: [0, 5, 0, -5, 0],
            transition: { duration: 3, repeat: Infinity }
          } : {}}
        />
        
        {/* Bird eye */}
        <circle cx="37" cy="18" r="2" fill="black" />
        
        {/* Bird beak */}
        <motion.path
          d="M43 20L50 18L43 22Z"
          fill="#FF9D5C"
          animate={isAnimating || fly ? {
            rotate: [0, -5, 0],
            transition: { duration: 1, repeat: Infinity }
          } : {}}
        />
        
        {/* Bird wings */}
        <motion.path
          d="M20 20C15 15 5 18 10 25"
          stroke={primaryColor}
          strokeWidth="5"
          fill="none"
          animate={isAnimating || fly ? {
            rotateX: [0, 40, 0],
            transition: { duration: 0.8, repeat: Infinity }
          } : {}}
        />
        
        <motion.path
          d="M20 30C15 35 5 32 10 25"
          stroke={primaryColor}
          strokeWidth="5"
          fill="none"
          animate={isAnimating || fly ? {
            rotateX: [0, -40, 0],
            transition: { duration: 0.8, repeat: Infinity, delay: 0.4 }
          } : {}}
        />
        
        {/* Bird tail */}
        <motion.path
          d="M10 25L2 20L2 30Z"
          fill={primaryColor}
          animate={isAnimating || fly ? {
            rotate: [0, 10, 0, -10, 0],
            transition: { duration: 2, repeat: Infinity }
          } : {}}
        />
      </svg>
    </motion.div>
  );
}

export default AnimatedBird;