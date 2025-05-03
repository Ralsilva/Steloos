import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  AnimatedStar, 
  AnimatedCloud, 
  AnimatedBird, 
  AnimatedTree, 
  AnimatedButterfly 
} from "./animations";

interface AnimatedSceneProps {
  theme?: 'nature' | 'sky' | 'forest' | 'peace' | 'friendship' | 'wisdom' | 'love';
  interactive?: boolean;
  className?: string;
  onElementClick?: (element: string) => void;
}

export function AnimatedScene({
  theme = 'nature',
  interactive = true,
  className = "",
  onElementClick
}: AnimatedSceneProps) {
  const [activeElements, setActiveElements] = useState<string[]>([]);
  const [isNight, setIsNight] = useState(false);
  
  const handleElementClick = (element: string) => {
    // Add the element to active elements
    if (!activeElements.includes(element)) {
      setActiveElements(prev => [...prev, element]);
    }
    
    // Call the callback if provided
    if (onElementClick) {
      onElementClick(element);
    }
    
    // Remove the element after some time
    setTimeout(() => {
      setActiveElements(prev => prev.filter(e => e !== element));
    }, 3000);
  };
  
  // Change day/night for certain themes
  useEffect(() => {
    if (theme === 'peace' || theme === 'wisdom') {
      const interval = setInterval(() => {
        setIsNight(prev => !prev);
      }, 10000); // Change every 10 seconds
      
      return () => clearInterval(interval);
    } else {
      setIsNight(false);
    }
  }, [theme]);
  
  // Background color based on theme and day/night
  const getBgColor = () => {
    if (isNight) {
      return "bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-800";
    }
    
    switch (theme) {
      case 'sky':
        return "bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100";
      case 'forest':
        return "bg-gradient-to-b from-emerald-200 via-emerald-100 to-lime-100";
      case 'peace':
        return "bg-gradient-to-b from-blue-200 via-indigo-100 to-purple-100";
      case 'friendship':
        return "bg-gradient-to-b from-orange-100 via-amber-100 to-yellow-100";
      case 'wisdom':
        return "bg-gradient-to-b from-purple-200 via-purple-100 to-indigo-100";
      case 'love':
        return "bg-gradient-to-b from-rose-200 via-pink-100 to-red-100";
      case 'nature':
      default:
        return "bg-gradient-to-b from-sky-200 via-blue-100 to-teal-100";
    }
  };

  return (
    <motion.div
      className={`w-full h-96 relative overflow-hidden rounded-lg ${getBgColor()} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sky elements - stars appear at night */}
      {isNight && (
        <>
          <AnimatedStar 
            className="absolute top-[10%] right-[10%]" 
            size={30} 
            onClick={interactive ? () => handleElementClick('star') : undefined}
          />
          <AnimatedStar 
            className="absolute top-[20%] left-[20%]" 
            size={20} 
            color="#FFDD00" 
            delay={0.3}
            onClick={interactive ? () => handleElementClick('star') : undefined}
          />
          <AnimatedStar 
            className="absolute top-[15%] left-[50%]" 
            size={15} 
            color="#FFFFFF" 
            delay={0.5}
            onClick={interactive ? () => handleElementClick('star') : undefined}
          />
          <AnimatedStar 
            className="absolute top-[25%] right-[30%]" 
            size={25} 
            delay={0.7}
            onClick={interactive ? () => handleElementClick('star') : undefined}
          />
        </>
      )}
      
      {/* Clouds appear in most scenes */}
      {(theme === 'sky' || theme === 'nature' || theme === 'peace' || theme === 'friendship') && (
        <>
          <AnimatedCloud 
            className="top-[10%] left-0" 
            size={80} 
            color={isNight ? "#334155" : "#FFFFFF"} 
            direction="right" 
            speed="slow" 
          />
          <AnimatedCloud 
            className="top-[25%] right-0" 
            size={60} 
            color={isNight ? "#334155" : "#FFFFFF"} 
            direction="left" 
            speed="medium" 
          />
        </>
      )}
      
      {/* Birds for sky, nature, freedom themes */}
      {(theme === 'sky' || theme === 'nature' || theme === 'peace') && (
        <>
          <AnimatedBird 
            className="absolute top-[30%] left-[20%]" 
            size={40} 
            color="#3B82F6" 
            fly={activeElements.includes('bird')} 
            onClick={interactive ? () => handleElementClick('bird') : undefined}
          />
          <AnimatedBird 
            className="absolute top-[20%] right-[30%]" 
            size={30} 
            color="#2563EB" 
            fly={activeElements.includes('bird')} 
            onClick={interactive ? () => handleElementClick('bird') : undefined}
          />
        </>
      )}
      
      {/* Trees for forest, nature themes */}
      {(theme === 'forest' || theme === 'nature') && (
        <>
          <AnimatedTree 
            className="absolute bottom-0 left-[10%]" 
            size={70} 
            onClick={interactive ? () => handleElementClick('tree') : undefined}
          />
          <AnimatedTree 
            className="absolute bottom-0 left-[30%]" 
            size={90} 
            onClick={interactive ? () => handleElementClick('tree') : undefined}
          />
          <AnimatedTree 
            className="absolute bottom-0 right-[20%]" 
            size={80} 
            onClick={interactive ? () => handleElementClick('tree') : undefined}
          />
        </>
      )}
      
      {/* Butterflies for love, nature, friendship themes */}
      {(theme === 'love' || theme === 'nature' || theme === 'friendship') && (
        <>
          <AnimatedButterfly 
            className="absolute top-[40%] left-[40%]" 
            size={40} 
            color="#EC4899" 
            flying={activeElements.includes('butterfly')} 
            onClick={interactive ? () => handleElementClick('butterfly') : undefined}
          />
          <AnimatedButterfly 
            className="absolute top-[35%] right-[25%]" 
            size={35} 
            color="#F472B6" 
            flying={activeElements.includes('butterfly')} 
            onClick={interactive ? () => handleElementClick('butterfly') : undefined}
          />
        </>
      )}
      
      {/* Ground or landscape element based on theme */}
      <div className="absolute bottom-0 w-full h-[30%]">
        {theme === 'forest' && (
          <motion.div
            className="w-full h-full bg-gradient-to-t from-emerald-800 to-emerald-700"
            animate={activeElements.includes('ground') ? {
              y: [0, -5, 0],
              transition: { duration: 1 }
            } : {}}
            onClick={interactive ? () => handleElementClick('ground') : undefined}
          />
        )}
        
        {theme === 'nature' && (
          <motion.div
            className="w-full h-full bg-gradient-to-t from-emerald-600 to-green-500"
            animate={activeElements.includes('ground') ? {
              y: [0, -5, 0],
              transition: { duration: 1 }
            } : {}}
            onClick={interactive ? () => handleElementClick('ground') : undefined}
          />
        )}
        
        {(theme === 'peace' || theme === 'sky') && (
          <motion.div
            className="w-full h-full bg-gradient-to-t from-blue-600 to-blue-400"
            animate={activeElements.includes('ground') ? {
              y: [0, -5, 0],
              transition: { duration: 1 }
            } : {}}
            onClick={interactive ? () => handleElementClick('ground') : undefined}
          />
        )}
        
        {(theme === 'friendship' || theme === 'love' || theme === 'wisdom') && (
          <motion.div
            className="w-full h-full bg-gradient-to-t from-amber-600 to-amber-400"
            animate={activeElements.includes('ground') ? {
              y: [0, -5, 0],
              transition: { duration: 1 }
            } : {}}
            onClick={interactive ? () => handleElementClick('ground') : undefined}
          />
        )}
      </div>
    </motion.div>
  );
}

export default AnimatedScene;