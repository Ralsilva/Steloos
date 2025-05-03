import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Square, Play, Save, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface VoiceRecorderProps {
  onRecordingComplete?: (audioUrl: string, audioBlob: Blob) => void;
  className?: string;
}

export function VoiceRecorder({ onRecordingComplete, className }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    return () => {
      // Clean up on unmount
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      audioChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        
        if (onRecordingComplete) {
          onRecordingComplete(url, audioBlob);
        }
        
        // Stop all audio tracks
        stream.getAudioTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setIsPaused(false);
      setRecordingTime(0);
      
      // Start timer
      timerRef.current = window.setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
      
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast({
        title: "Erro no microfone",
        description: "Não foi possível acessar seu microfone. Verifique as permissões do navegador.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resetRecording = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setRecordingTime(0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      <div className="w-full max-w-xs bg-white rounded-xl p-4 shadow-md">
        <div className="flex flex-col items-center">
          {/* Recording Animation */}
          <div className="relative w-24 h-24 mb-4">
            <div
              className={cn(
                "absolute inset-0 rounded-full bg-primary/20",
                isRecording && !isPaused && "animate-ping"
              )}
            ></div>
            <div
              className={cn(
                "absolute inset-3 rounded-full bg-primary/30",
                isRecording && !isPaused && "animate-ping animation-delay-300"
              )}
            ></div>
            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-white">
              {isRecording ? (
                <span className="text-red-500 text-lg font-bold">
                  {formatTime(recordingTime)}
                </span>
              ) : (
                <Mic className="h-10 w-10 text-primary" />
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-3">
            {!isRecording && !audioUrl && (
              <Button
                onClick={startRecording}
                variant="default"
                size="icon"
                className="rounded-full bg-red-500 hover:bg-red-600 h-12 w-12"
              >
                <Mic className="h-6 w-6" />
              </Button>
            )}

            {isRecording && (
              <Button
                onClick={stopRecording}
                variant="outline"
                size="icon"
                className="rounded-full border-red-500 text-red-500 h-12 w-12"
              >
                <Square className="h-5 w-5" />
              </Button>
            )}

            {audioUrl && (
              <>
                <Button
                  onClick={() => {
                    const audio = new Audio(audioUrl);
                    audio.play();
                  }}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary text-primary h-12 w-12"
                >
                  <Play className="h-5 w-5" />
                </Button>

                <Button
                  onClick={resetRecording}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12"
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {audioUrl && (
        <div className="w-full max-w-xs">
          <audio src={audioUrl} controls className="w-full" />
        </div>
      )}
    </div>
  );
}