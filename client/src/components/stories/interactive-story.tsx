import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Volume2, VolumeX, Music, 
  Maximize, Minimize, Star, Sparkles
} from "lucide-react";
import StarAnimation from "@/components/ui/star-animation";
import AnimatedScene from "@/components/ui/animated-scene";
import { categoryInfo } from "@/lib/data";

// Palavras-chave para efeitos de som e animações
const INTERACTIVE_KEYWORDS = {
  star: ["estrela", "estrelas", "esteloo", "brilho", "luz", "luzes", "brilhante", "star", "stars", "light", "shine"],
  magic: ["magia", "mágico", "mágica", "encanto", "encantado", "milagre", "feitiço", "magic", "magical", "spell", "enchanted", "miracle"],
  animals: ["animal", "animais", "cachorro", "gato", "pássaro", "borboleta", "animals", "dog", "cat", "bird", "butterfly"],
  water: ["água", "rio", "mar", "lago", "oceano", "chuva", "water", "river", "sea", "lake", "ocean", "rain"],
  wind: ["vento", "brisa", "ar", "sopro", "ventania", "wind", "breeze", "air", "blow"],
  birds: ["pássaro", "pássaros", "passarinho", "ave", "aves", "bird", "birds"],
  laughter: ["riso", "risada", "gargalhada", "alegria", "laughter", "laugh", "joy", "happy", "feliz", "alegre"],
};

// Mapeamento de categorias para sons ambiente
const CATEGORY_AMBIENT_SOUNDS: Record<string, string> = {
  "amor": "loving.mp3",
  "paz": "peaceful.mp3",
  "sabedoria": "wisdom.mp3",
  "bondade": "kindness.mp3",
  "protecao": "protection.mp3",
  "natureza": "nature.mp3",
  "familia": "family.mp3",
  "amizade": "friendship.mp3",
};

interface InteractiveStoryProps {
  content: string;
  title: string;
  categoryId: string;
}

export default function InteractiveStory({ content, title, categoryId }: InteractiveStoryProps) {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  
  // Dividir o conteúdo em parágrafos
  const paragraphs = content.split('\n\n');
  const pages: string[] = [];
  let currentPageContent: string[] = [];
  
  // Criar páginas com no máximo 3 parágrafos cada
  for (let i = 0; i < paragraphs.length; i++) {
    currentPageContent.push(paragraphs[i]);
    if (currentPageContent.length === 3 || i === paragraphs.length - 1) {
      pages.push(currentPageContent.join('\n\n'));
      currentPageContent = [];
    }
  }
  
  // Efeito para tocar música de fundo quando o modo interativo está ativo
  useEffect(() => {
    if (isActive && musicEnabled) {
      // Tentar carregar a música de fundo para a categoria
      const categorySound = CATEGORY_AMBIENT_SOUNDS[categoryId] || "peaceful.mp3";
      const audioPath = `/sounds/ambient/${categorySound}`;
      
      try {
        const audio = new Audio(audioPath);
        audio.volume = 0.2;
        audio.loop = true;
        
        // Verificar se o arquivo existe
        audio.addEventListener('error', () => {
          const errorMsg = i18n.language === 'pt-BR'
            ? `Música ambiente não encontrada: ${audioPath}`
            : `Ambient music not found: ${audioPath}`;
          console.warn(errorMsg);
        });
        
        // Tocar a música
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            const errorMsg = i18n.language === 'pt-BR'
              ? "Reprodução automática bloqueada pelo navegador:"
              : "Autoplay blocked by browser:";
            console.warn(errorMsg, error);
          });
        }
        
        musicRef.current = audio;
      } catch (error) {
        const errorMsg = i18n.language === 'pt-BR'
          ? "Erro ao carregar música ambiente:"
          : "Error loading ambient music:";
        console.error(errorMsg, error);
      }
    }
    
    // Limpar ao desmontar ou desativar
    return () => {
      if (musicRef.current) {
        musicRef.current.pause();
        musicRef.current = null;
      }
    };
  }, [isActive, musicEnabled, categoryId]);
  
  // Alternar o modo de tela cheia
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        const errorMsg = i18n.language === 'pt-BR'
          ? `Erro ao tentar entrar em tela cheia:`
          : `Error entering fullscreen:`;
        console.warn(errorMsg, err.message);
      });
    } else {
      document.exitFullscreen();
    }
  };
  
  // Monitorar mudanças no estado de tela cheia
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  // Efeito para tocar som de página ao virar
  useEffect(() => {
    if (isActive && soundsEnabled && currentPage > 0) {
      try {
        const pageSound = new Audio('/sounds/effects/page-turn.mp3');
        pageSound.volume = 0.5;
        pageSound.play().catch(err => {
          const errorMsg = i18n.language === 'pt-BR'
            ? "Erro ao tocar som de página:"
            : "Error playing page sound:";
          console.warn(errorMsg, err);
        });
      } catch (error) {
        const errorMsg = i18n.language === 'pt-BR'
          ? "Som de virar página não encontrado"
          : "Page turn sound not found";
        console.warn(errorMsg);
      }
    }
  }, [currentPage, isActive, soundsEnabled, i18n.language]);
  
  // Função para reproduzir um efeito sonoro
  const playSound = (soundName: string) => {
    if (!isActive || !soundsEnabled) return;
    
    try {
      const audio = new Audio(`/sounds/effects/${soundName}.mp3`);
      audio.volume = 0.6;
      audio.play().catch(err => {
        const errorMsg = i18n.language === 'pt-BR' 
          ? `Erro ao tocar som ${soundName}:` 
          : `Error playing sound ${soundName}:`;
        console.warn(errorMsg, err);
      });
    } catch (error) {
      const errorMsg = i18n.language === 'pt-BR' 
        ? `Som não encontrado: ${soundName}` 
        : `Sound not found: ${soundName}`;
      console.warn(errorMsg);
    }
  };
  
  // Função para verificar e reproduzir sons baseados em palavras-chave
  const processTextForInteractivity = (text: string) => {
    const words = text.toLowerCase().split(/\s+/);
    let processedText = text;
    
    // Adicionar marcadores para efeitos
    words.forEach(word => {
      if (INTERACTIVE_KEYWORDS.star.includes(word)) {
        playSound("star");
        processedText = processedText.replace(
          new RegExp(`\\b${word}\\b`, 'i'),
          `<span class="interactive-highlight star-word">${word}</span>`
        );
      } else if (INTERACTIVE_KEYWORDS.magic.includes(word)) {
        playSound("magic");
        processedText = processedText.replace(
          new RegExp(`\\b${word}\\b`, 'i'),
          `<span class="interactive-highlight magic-word">${word}</span>`
        );
      } else if (INTERACTIVE_KEYWORDS.animals.includes(word)) {
        playSound("animal");
        processedText = processedText.replace(
          new RegExp(`\\b${word}\\b`, 'i'),
          `<span class="interactive-highlight animal-word">${word}</span>`
        );
      } else if (INTERACTIVE_KEYWORDS.water.includes(word)) {
        playSound("water");
        processedText = processedText.replace(
          new RegExp(`\\b${word}\\b`, 'i'),
          `<span class="interactive-highlight water-word">${word}</span>`
        );
      } else if (INTERACTIVE_KEYWORDS.wind.includes(word)) {
        playSound("wind");
        processedText = processedText.replace(
          new RegExp(`\\b${word}\\b`, 'i'),
          `<span class="interactive-highlight wind-word">${word}</span>`
        );
      } else if (INTERACTIVE_KEYWORDS.birds.includes(word)) {
        playSound("birds");
        processedText = processedText.replace(
          new RegExp(`\\b${word}\\b`, 'i'),
          `<span class="interactive-highlight bird-word">${word}</span>`
        );
      } else if (INTERACTIVE_KEYWORDS.laughter.includes(word)) {
        playSound("child-laugh");
        processedText = processedText.replace(
          new RegExp(`\\b${word}\\b`, 'i'),
          `<span class="interactive-highlight laugh-word">${word}</span>`
        );
      }
    });
    
    return processedText;
  };
  
  // Mapeamento de categoria para tema da cena animada
  const getCategoryTheme = (categoryId: string): 'nature' | 'sky' | 'forest' | 'peace' | 'friendship' | 'wisdom' | 'love' => {
    switch(categoryId) {
      case 'amor': return 'love';
      case 'paz': return 'peace';
      case 'sabedoria': return 'wisdom';
      case 'bondade': return 'friendship';
      case 'protecao': return 'peace';
      case 'natureza': return 'nature';
      case 'familia': return 'love';
      case 'amizade': return 'friendship';
      default: return 'nature';
    }
  };
  
  // Tratamento de elementos animados clicados
  const handleAnimatedElementClick = (element: string) => {
    switch(element) {
      case 'star':
        playSound('star');
        break;
      case 'bird':
        playSound('birds');
        break;
      case 'butterfly':
        playSound('magic');
        break;
      case 'tree':
        playSound('nature');
        break;
      default:
        playSound('water');
    }
  };
  
  // Render do conteúdo interativo
  const renderInteractiveContent = () => {
    if (!isActive) return null;
    
    const currentContent = pages[currentPage];
    const paragraphsToDisplay = currentContent.split('\n\n');
    const categoryTheme = getCategoryTheme(categoryId);
    
    return (
      <div className="interactive-content-wrapper p-6 rounded-lg border border-amber-200 bg-gradient-to-b from-amber-50 to-white shadow-inner">
        <div className="mb-4 flex justify-between items-center">
          <h4 className="font-bold text-xl">{title}</h4>
          <div className="text-sm text-gray-500">
            {t('common.page')} {currentPage + 1} / {pages.length}
          </div>
        </div>
        
        {/* Cena animada interativa */}
        <AnimatedScene 
          theme={categoryTheme} 
          className="mb-6"
          interactive={soundsEnabled}
          onElementClick={soundsEnabled ? handleAnimatedElementClick : undefined}
        />
        
        <div className="prose prose-amber max-w-none my-4">
          {paragraphsToDisplay.map((paragraph: string, idx: number) => (
            <p 
              key={idx} 
              className="relative" 
              dangerouslySetInnerHTML={{ 
                __html: processTextForInteractivity(paragraph) 
              }}
            />
          ))}
        </div>
        
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
          >
            ← {t('common.previous')}
          </Button>
          
          <Button
            variant="default"
            onClick={() => setCurrentPage(prev => Math.min(pages.length - 1, prev + 1))}
            disabled={currentPage === pages.length - 1}
          >
            {t('common.next')} →
          </Button>
        </div>
      </div>
    );
  };
  
  return (
    <div ref={containerRef} className={`interactive-story ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      {!isActive ? (
        <Button
          onClick={() => setIsActive(true)}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {t('stories.interactive.enableInteractive')}
        </Button>
      ) : (
        <div className="interactive-container">
          <div className="interactive-controls mb-4 flex flex-wrap gap-4 justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsActive(false)}
              className="border-amber-300 text-amber-700"
            >
              {t('stories.interactive.disableInteractive')}
            </Button>
            
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="sounds-toggle"
                  checked={soundsEnabled}
                  onCheckedChange={setSoundsEnabled}
                />
                <Label htmlFor="sounds-toggle" className="text-sm flex items-center">
                  {soundsEnabled ? (
                    <>
                      <Volume2 className="h-4 w-4 mr-1" />
                      {t('stories.interactive.soundsOn')}
                    </>
                  ) : (
                    <>
                      <VolumeX className="h-4 w-4 mr-1" />
                      {t('stories.interactive.soundsOff')}
                    </>
                  )}
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="music-toggle"
                  checked={musicEnabled}
                  onCheckedChange={checked => {
                    setMusicEnabled(checked);
                    if (!checked && musicRef.current) {
                      musicRef.current.pause();
                    } else if (checked && musicRef.current) {
                      musicRef.current.play().catch(err => {
                        const errorMsg = i18n.language === 'pt-BR'
                          ? "Erro ao retomar a música:"
                          : "Error resuming music:";
                        console.warn(errorMsg, err);
                      });
                    }
                  }}
                />
                <Label htmlFor="music-toggle" className="text-sm flex items-center">
                  {musicEnabled ? (
                    <>
                      <Music className="h-4 w-4 mr-1" />
                      {t('stories.interactive.musicOn')}
                    </>
                  ) : (
                    <>
                      <Music className="h-4 w-4 mr-1 opacity-50" />
                      {t('stories.interactive.musicOff')}
                    </>
                  )}
                </Label>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="h-8 w-8"
                title={t('stories.interactive.toggleFullscreen')}
              >
                {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          {renderInteractiveContent()}
          
          {/* Animações flutuantes */}
          <div className="star-animations absolute top-0 left-0 w-full h-full pointer-events-none">
            <StarAnimation 
              size={30} 
              className="absolute top-[10%] right-[10%] text-amber-400 animate-float" 
            />
            <StarAnimation 
              size={20} 
              className="absolute top-[30%] left-[5%] text-amber-300 animate-float-delayed" 
            />
            <StarAnimation 
              size={25} 
              className="absolute bottom-[20%] right-[15%] text-amber-500 animate-float-slow" 
            />
          </div>
        </div>
      )}
    </div>
  );
}