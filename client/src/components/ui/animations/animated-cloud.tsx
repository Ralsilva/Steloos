import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedCloudProps {
  size?: number;
  color?: string;
  className?: string;
  speed?: "slow" | "medium" | "fast";
  direction?: "left" | "right";
}

export function AnimatedCloud({
  size = 60,
  color = "#E6F0FF",
  className = "",
  speed = "medium",
  direction = "right"
}: AnimatedCloudProps) {
  const controls = useAnimation();
  
  const speedMap = {
    slow: 30,
    medium: 20,
    fast: 10
  };
  
  const durationSeconds = speedMap[speed];
  
  useEffect(() => {
    const startX = direction === "right" ? -100 : 100;
    const endX = direction === "right" ? 100 : -100;
    
    const animateCloud = async () => {
      await controls.start({
        x: [startX, endX],
        transition: {
          duration: durationSeconds,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };
    
    animateCloud();
  }, [controls, durationSeconds, direction]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={controls}
    >
      <svg 
        width={size} 
        height={size * 0.6} 
        viewBox="0 0 100 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M85 35C85 46.0457 76.0457 55 65 55H25C13.9543 55 5 46.0457 5 35C5 23.9543 13.9543 15 25 15C25.9247 15 26.8346 15.0652 27.7249 15.1907C31.0601 6.56095 39.5919 0.5 49.5 0.5C59.4081 0.5 67.9399 6.56095 71.2751 15.1907C72.1654 15.0652 73.0753 15 74 15C82.8366 15 90.3489 20.9333 93.0987 29.0001C89.5539 30.9616 87 34.6904 87 39C87 43.3096 89.5539 47.0384 93.0987 48.9999C88.3599 52.7943 82.0028 55 75 55H65C76.0457 55 85 46.0457 85 35Z"
          fill={color}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}

export default AnimatedCloud;