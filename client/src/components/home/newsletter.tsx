import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira seu email.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/newsletter", { email });
      
      toast({
        title: "Sucesso!",
        description: "Obrigado por se inscrever em nossa newsletter!",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível completar seu cadastro. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-10 mb-10 text-white shadow-md">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Receba Histórias Novas</h2>
        <p className="text-lg mb-6">
          Cadastre-se para receber nossas novas histórias e atividades diretamente no seu email.
        </p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-text h-auto"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-secondary hover:text-accent font-bold py-3 px-6 rounded-xl transition-colors h-auto"
          >
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </div>
    </section>
  );
}
