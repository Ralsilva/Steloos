import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedStarProps {
  size?: number;
  color?: string;
  delay?: number;
  onClick?: () => void;
  className?: string;
}

export function AnimatedStar({ 
  size = 40, 
  color = "#FFB347", 
  delay = 0,
  onClick,
  className = ""
}: AnimatedStarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 700);
    if (onClick) onClick();
  };
  
  return (
    <motion.div
      className={`inline-block cursor-pointer ${className}`}
      initial={{ scale: 0 }}
      animate={{ 
        scale: isClicked ? [1, 1.4, 1] : 1,
        rotate: isClicked ? [0, 15, -15, 0] : 0,
      }}
      transition={{ 
        duration: isClicked ? 0.7 : 0.5,
        delay: delay,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ 
        scale: isClicked ? 1 : 1.1,
        rotate: isClicked ? 0 : [0, 5, -5, 0],
        transition: { 
          duration: 0.3,
          repeat: isClicked ? 0 : Infinity,
          repeatType: "reverse"
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 51 48" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M25.5 0L31.3 18.4H50.5L35.1 29.8L40.9 48.2L25.5 36.8L10.1 48.2L15.9 29.8L0.5 18.4H19.7L25.5 0Z"
          fill={isHovered ? "#FFC857" : color}
          animate={{ 
            fill: isClicked ? ["#FFC857", "#FFDD00", "#FFC857"] : (isHovered ? "#FFC857" : color) 
          }}
          transition={{ duration: 0.5 }}
        />
        {isClicked && (
          <motion.path
            d="M25.5 0L31.3 18.4H50.5L35.1 29.8L40.9 48.2L25.5 36.8L10.1 48.2L15.9 29.8L0.5 18.4H19.7L25.5 0Z"
            fill="transparent"
            stroke="#FFDD00"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: [1, 1.8],
              opacity: [1, 0]
            }}
            transition={{ 
              duration: 0.7,
              ease: "easeOut"
            }}
          />
        )}
      </svg>
    </motion.div>
  );
}

export default AnimatedStar;