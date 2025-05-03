import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveStoryProps {
  content: string;
  title: string;
  categoryId: string;
}

export default function InteractiveStory({ content, title, categoryId }: InteractiveStoryProps) {
  const { t } = useTranslation();
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [soundsEnabled, setSoundsEnabled] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  // Lazy load ambient music based on category
  const categoryMusicMap: Record<string, string> = {
    amor: '/sounds/ambient/loving.mp3',
    paz: '/sounds/ambient/peaceful.mp3',
    sabedoria: '/sounds/ambient/wisdom.mp3',
    bondade: '/sounds/ambient/kindness.mp3',
    protecao: '/sounds/ambient/protection.mp3',
    natureza: '/sounds/ambient/nature.mp3',
    familia: '/sounds/ambient/family.mp3',
    amizade: '/sounds/ambient/friendship.mp3',
  };

  // Map of sound effects for interactive elements
  const soundEffects = {
    star: '/sounds/effects/star.mp3',
    magic: '/sounds/effects/magic.mp3',
    animal: '/sounds/effects/animal.mp3',
    water: '/sounds/effects/water.mp3',
    wind: '/sounds/effects/wind.mp3',
    birds: '/sounds/effects/birds.mp3',
    laugh: '/sounds/effects/child-laugh.mp3',
  };

  // Animation patterns for interactive elements
  const animationPatterns = [
    'animate-float',
    'animate-pulse-gentle',
    'animate-wiggle',
    'animate-sparkle',
    'animate-spin-slow',
  ];

  useEffect(() => {
    if (content) {
      // Split content into paragraphs
      const contentParagraphs = content.split('\n\n');
      setParagraphs(contentParagraphs);
      
      // Initialize with first paragraph visible
      setVisibleParagraphs(1);
    }
  }, [content]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // Auto-scroll effect when new paragraphs become visible
    if (visibleParagraphs > 0 && visibleParagraphs <= paragraphs.length) {
      // When a new paragraph becomes visible, scroll to it
      const currentParagraph = document.getElementById(`paragraph-${visibleParagraphs - 1}`);
      if (currentParagraph) {
        currentParagraph.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    // Clear interval on component unmount
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [visibleParagraphs, paragraphs.length]);

  useEffect(() => {
    // Set up background music
    if (musicEnabled && categoryId && categoryMusicMap[categoryId]) {
      if (!bgMusicRef.current) {
        bgMusicRef.current = new Audio(categoryMusicMap[categoryId]);
        bgMusicRef.current.loop = true;
        bgMusicRef.current.volume = 0.3;
      }
      
      bgMusicRef.current.play().catch(err => {
        console.error('Error playing background music:', err);
      });
    } else if (bgMusicRef.current) {
      bgMusicRef.current.pause();
    }
    
    // Clean up audio on unmount
    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
    };
  }, [musicEnabled, categoryId]);

  const playSound = (soundName: keyof typeof soundEffects) => {
    if (!soundsEnabled) return;
    
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    audioRef.current = new Audio(soundEffects[soundName]);
    audioRef.current.volume = 0.6;
    audioRef.current.play().catch(err => {
      console.error('Error playing sound effect:', err);
    });
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
      setFullscreenMode(true);
    } else {
      document.exitFullscreen();
      setFullscreenMode(false);
    }
  };

  const handleNextParagraph = () => {
    if (visibleParagraphs < paragraphs.length) {
      setVisibleParagraphs(prev => prev + 1);
      
      // Play page turn sound if enabled
      if (soundsEnabled) {
        const pageSound = new Audio('/sounds/effects/page-turn.mp3');
        pageSound.volume = 0.3;
        pageSound.play().catch(err => {
          console.error('Error playing page turn sound:', err);
        });
      }
    }
  };

  // Detect and replace special words with interactive elements
  const processText = (text: string, index: number) => {
    // Keywords that will trigger interactive elements
    const interactiveWords = {
      estrela: 'star',
      estrelas: 'star',
      estrelinha: 'star',
      pássaro: 'birds',
      pássaros: 'birds',
      passarinho: 'birds',
      magia: 'magic',
      mágico: 'magic',
      mágica: 'magic',
      água: 'water',
      rio: 'water',
      mar: 'water',
      vento: 'wind',
      brisa: 'wind',
      animal: 'animal',
      animais: 'animal',
      risada: 'laugh',
      sorriso: 'laugh',
      riso: 'laugh',
    };
    
    // English translations for detection
    const englishWords = {
      star: 'star',
      stars: 'star',
      little_star: 'star',
      bird: 'birds',
      birds: 'birds',
      magic: 'magic',
      magical: 'magic',
      water: 'water',
      river: 'water',
      sea: 'water',
      wind: 'wind',
      breeze: 'wind',
      animal: 'animal',
      animals: 'animal',
      laugh: 'laugh',
      smile: 'laugh',
      laughter: 'laugh',
    };
    
    // Merge dictionaries based on current language
    const wordMap = { ...interactiveWords, ...englishWords };
    
    let processedText = text;
    let wordCount = 0;
    
    // Replace interactive words with clickable spans
    Object.entries(wordMap).forEach(([word, soundType]) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      processedText = processedText.replace(regex, (match) => {
        wordCount++;
        // Limit interactive elements per paragraph to avoid clutter
        if (wordCount > 3) return match;
        
        // Select a random animation for this element
        const animationClass = animationPatterns[
          Math.floor(Math.random() * animationPatterns.length)
        ];
        
        return `<span 
          class="interactive-element ${animationClass} font-medium cursor-pointer text-primary" 
          data-sound="${soundType}"
        >${match}</span>`;
      });
    });
    
    return {
      __html: processedText,
    };
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "prose prose-lg max-w-none transition-all duration-500",
        fullscreenMode && "bg-gradient-to-b from-white to-amber-50 p-8 min-h-screen flex flex-col"
      )}
    >
      <div className="controls-bar flex items-center justify-end gap-2 mb-4 sticky top-0 bg-white/80 backdrop-blur-sm p-2 rounded-lg z-10">
        <Button
          size="sm"
          variant={soundsEnabled ? "default" : "outline"}
          onClick={() => setSoundsEnabled(!soundsEnabled)}
          className="rounded-full"
          title={soundsEnabled ? t('stories.interactive.soundsOn') : t('stories.interactive.soundsOff')}
        >
          {soundsEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </Button>
        
        <Button
          size="sm"
          variant={musicEnabled ? "default" : "outline"}
          onClick={() => setMusicEnabled(!musicEnabled)}
          className="rounded-full"
          title={musicEnabled ? t('stories.interactive.musicOn') : t('stories.interactive.musicOff')}
        >
          <Music size={16} />
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={toggleFullscreen}
          className="rounded-full"
          title={t('stories.interactive.toggleFullscreen')}
        >
          <Maximize size={16} />
        </Button>
      </div>
      
      <div className={cn(
        "interactive-content",
        fullscreenMode && "flex-1 overflow-y-auto"
      )}>
        {paragraphs.slice(0, visibleParagraphs).map((paragraph, i) => (
          <div
            key={i}
            id={`paragraph-${i}`}
            className={cn(
              "interactive-paragraph mb-6 opacity-0 translate-y-4",
              "animate-in fade-in-50 slide-in-from-bottom-4 duration-700 fill-mode-forwards",
              i === visibleParagraphs - 1 && "animate-highlight"
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p 
              dangerouslySetInnerHTML={processText(paragraph, i)}
              onClick={(e) => {
                // Handle clicks on interactive elements
                if ((e.target as HTMLElement).classList.contains('interactive-element')) {
                  const soundType = (e.target as HTMLElement).getAttribute('data-sound');
                  if (soundType && soundType in soundEffects) {
                    playSound(soundType as keyof typeof soundEffects);
                  }
                  
                  // Add visual effect on click
                  (e.target as HTMLElement).classList.add('effect-clicked');
                  setTimeout(() => {
                    (e.target as HTMLElement).classList.remove('effect-clicked');
                  }, 700);
                }
              }}
            />
          </div>
        ))}
      </div>
      
      {visibleParagraphs < paragraphs.length && (
        <div className="flex justify-center my-8">
          <Button 
            onClick={handleNextParagraph}
            className="px-8 py-6 rounded-full text-lg shadow-lg animate-pulse-slow"
          >
            {t('stories.interactive.continueReading')}
          </Button>
        </div>
      )}
    </div>
  );
}