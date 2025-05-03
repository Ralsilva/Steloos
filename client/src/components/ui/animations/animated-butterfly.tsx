import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedButterflyProps {
  size?: number;
  color?: string;
  className?: string;
  flying?: boolean;
  onClick?: () => void;
}

export function AnimatedButterfly({
  size = 40,
  color = "#EC4899",
  className = "",
  flying = false,
  onClick
}: AnimatedButterflyProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlying, setIsFlying] = useState(flying);
  const controls = useAnimation();
  
  useEffect(() => {
    let flyInterval: NodeJS.Timeout | null = null;
    
    if (isFlying || flying) {
      // Random flight path
      const flyAround = async () => {
        const randomX = Math.random() * 100 - 50; // -50 to 50
        const randomY = Math.random() * 60 - 30; // -30 to 30
        const randomDuration = 2 + Math.random() * 3; // 2-5 seconds
        
        await controls.start({
          x: randomX,
          y: randomY,
          rotate: randomX > 0 ? 15 : -15,
          transition: {
            duration: randomDuration,
            ease: "easeInOut"
          }
        });
        
        if (isFlying || flying) flyAround();
      };
      
      flyAround();
    } else {
      controls.stop();
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: { duration: 0.5 }
      });
    }
    
    return () => {
      if (flyInterval) clearInterval(flyInterval);
    };
  }, [controls, isFlying, flying]);
  
  const handleClick = () => {
    if (!flying) {
      setIsFlying(prev => !prev);
    }
    if (onClick) onClick();
  };
  
  // Colors based on state
  const primaryColor = isHovered ? "#F472B6" : color;
  const secondaryColor = isHovered ? "#FBCFE8" : "#FCE7F3";
  
  return (
    <motion.div
      className={`inline-block ${flying ? "pointer-events-none" : "cursor-pointer"} ${className}`}
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Butterfly body */}
        <motion.path
          d="M30 10 L30 40"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Butterfly head */}
        <motion.circle
          cx="30"
          cy="8"
          r="4"
          fill="#000000"
        />
        
        {/* Butterfly antennas */}
        <motion.path
          d="M28 6 L25 1"
          stroke="#000000"
          strokeWidth="1"
          strokeLinecap="round"
          animate={isFlying || flying ? {
            rotate: [0, 10, 0, -10, 0],
            transition: { duration: 2, repeat: Infinity }
          } : {}}
        />
        
        <motion.path
          d="M32 6 L35 1"
          stroke="#000000"
          strokeWidth="1"
          strokeLinecap="round"
          animate={isFlying || flying ? {
            rotate: [0, -10, 0, 10, 0],
            transition: { duration: 2, repeat: Infinity }
          } : {}}
        />
        
        {/* Butterfly wings */}
        <motion.path
          d="M30 15 C20 0 0 10 15 25 C0 40 20 50 30 35"
          fill={primaryColor}
          animate={isFlying || flying ? {
            scale: [1, 0.8, 1],
            rotate: [0, -15, 0],
            transition: { duration: 0.4, repeat: Infinity }
          } : {}}
        />
        
        <motion.path
          d="M30 15 C40 0 60 10 45 25 C60 40 40 50 30 35"
          fill={primaryColor}
          animate={isFlying || flying ? {
            scale: [1, 0.8, 1],
            rotate: [0, 15, 0],
            transition: { duration: 0.4, repeat: Infinity }
          } : {}}
        />
        
        {/* Wing patterns */}
        <motion.circle cx="20" cy="20" r="3" fill={secondaryColor} />
        <motion.circle cx="40" cy="20" r="3" fill={secondaryColor} />
        <motion.circle cx="23" cy="30" r="2" fill={secondaryColor} />
        <motion.circle cx="37" cy="30" r="2" fill={secondaryColor} />
      </svg>
    </motion.div>
  );
}

export default AnimatedButterfly;