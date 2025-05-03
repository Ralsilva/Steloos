import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const languages = [
    { name: "Português", code: "pt-BR", flag: "🇧🇷" },
    { name: "English", code: "en", flag: "🇺🇸" },
  ];
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1.5 text-sm font-medium"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden md:inline">{currentLanguage.flag} {currentLanguage.name}</span>
          <span className="inline md:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`cursor-pointer ${language.code === i18n.language ? 'font-bold bg-muted' : ''}`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}