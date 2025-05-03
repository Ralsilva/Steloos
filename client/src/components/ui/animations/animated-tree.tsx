import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTreeProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export function AnimatedTree({
  size = 80,
  className = "",
  onClick
}: AnimatedTreeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
    if (onClick) onClick();
  };
  
  return (
    <motion.div
      className={`inline-block cursor-pointer ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <svg
        width={size}
        height={size * 1.5}
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree trunk */}
        <motion.rect
          x="42.5"
          y="80"
          width="15"
          height="60"
          fill="#A47148"
          animate={isClicked ? {
            scaleY: [1, 1.02, 1],
            transition: { duration: 0.5 }
          } : {}}
        />
        
        {/* Tree foliage - multiple layers */}
        <motion.path
          d="M50 10L75 50H25L50 10Z"
          fill="#15803d"
          animate={isClicked ? {
            y: [0, -5, 0],
            transition: { duration: 0.5, delay: 0.1 }
          } : {}}
          whileHover={{ 
            fill: "#16a34a",
            transition: { duration: 0.2 } 
          }}
        />
        
        <motion.path
          d="M50 30L80 70H20L50 30Z"
          fill="#16a34a"
          animate={isClicked ? {
            y: [0, -3, 0],
            transition: { duration: 0.5, delay: 0.2 }
          } : {}}
          whileHover={{ 
            fill: "#22c55e",
            transition: { duration: 0.2 } 
          }}
        />
        
        <motion.path
          d="M50 50L85 90H15L50 50Z"
          fill="#22c55e"
          animate={isClicked ? {
            y: [0, -2, 0],
            transition: { duration: 0.5, delay: 0.3 }
          } : {}}
          whileHover={{ 
            fill: "#4ade80",
            transition: { duration: 0.2 } 
          }}
        />
        
        {/* Falling leaves animation when clicked */}
        {isClicked && (
          <>
            <motion.circle
              cx="30"
              cy="60"
              r="3"
              fill="#86efac"
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                y: [0, 50],
                x: [0, -20],
                rotate: [0, 360]
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            
            <motion.circle
              cx="70"
              cy="65"
              r="3"
              fill="#86efac"
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                y: [0, 50],
                x: [0, 15],
                rotate: [0, 360]
              }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            />
            
            <motion.circle
              cx="45"
              cy="40"
              r="2"
              fill="#86efac"
              initial={{ opacity: 1 }}
              animate={{
                opacity: 0,
                y: [0, 40],
                x: [0, -10],
                rotate: [0, 180]
              }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            />
          </>
        )}
        
        {/* Birds or decorations that appear on hover */}
        {isHovered && (
          <>
            <motion.circle
              cx="30"
              cy="45"
              r="3"
              fill="#f59e0b"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            <motion.circle
              cx="65"
              cy="55"
              r="3"
              fill="#f59e0b"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            />
          </>
        )}
      </svg>
    </motion.div>
  );
}

export default AnimatedTree;