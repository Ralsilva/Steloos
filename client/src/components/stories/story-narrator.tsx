import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VoiceRecorder } from "@/components/ui/voice-recorder";
import { Mic, Share2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import StarAnimation from "@/components/ui/star-animation";
import { useTranslation } from "react-i18next";

interface StoryNarratorProps {
  storyTitle: string;
}

export default function StoryNarrator({ storyTitle }: StoryNarratorProps) {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);
  const { toast } = useToast();

  const handleRecordingComplete = (audioUrl: string, audioBlob: Blob) => {
    setRecordingUrl(audioUrl);
    setRecordingBlob(audioBlob);
  };

  const handleDownload = () => {
    if (recordingUrl && recordingBlob) {
      const link = document.createElement("a");
      link.href = recordingUrl;
      link.download = `Minha narração - ${storyTitle}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download iniciado!",
        description: "Sua narração está sendo baixada.",
        duration: 3000,
      });
    }
  };

  const handleShare = async () => {
    if (recordingBlob) {
      try {
        if (navigator.share) {
          const file = new File([recordingBlob], `Minha narração - ${storyTitle}.webm`, {
            type: "audio/webm",
          });
          
          await navigator.share({
            title: `Minha narração da estória "${storyTitle}"`,
            files: [file],
          });
        } else {
          toast({
            title: "Compartilhamento não disponível",
            description: "Seu navegador não suporta o compartilhamento. Tente baixar e compartilhar manualmente.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
        toast({
          title: "Erro ao compartilhar",
          description: "Ocorreu um erro ao tentar compartilhar sua narração.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border-dashed"
        >
          <Mic className="h-5 w-5 mr-2" />
          <span>{t('stories.narrator.title')}</span>
          <StarAnimation className="ml-2" size={20} />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-heading">{t('stories.childNarrator.title')}</DialogTitle>
          <DialogDescription className="text-center">
            {recordingUrl 
              ? t('stories.narrator.recordingComplete')
              : t('stories.narrator.instructions')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-4">
          <VoiceRecorder 
            onRecordingComplete={handleRecordingComplete} 
            className="mb-4"
          />
          
          {recordingUrl && (
            <div className="flex space-x-4 mt-4">
              <Button 
                variant="outline" 
                className="flex items-center" 
                onClick={handleDownload}
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar
              </Button>
              
              <Button 
                variant="default" 
                className="flex items-center" 
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}