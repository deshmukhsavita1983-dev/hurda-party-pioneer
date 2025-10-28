import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useState } from "react";

type Language = "en" | "mr" | "hi";

interface LanguageSwitcherProps {
  onLanguageChange?: (lang: Language) => void;
}

const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  const languages = {
    en: { name: "English", flag: "🇬🇧" },
    mr: { name: "मराठी", flag: "🇮🇳" },
    hi: { name: "हिंदी", flag: "🇮🇳" },
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    onLanguageChange?.(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languages[currentLang].flag}</span>
          <span className="hidden md:inline">{languages[currentLang].name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            className="gap-2 cursor-pointer"
          >
            <span>{flag}</span>
            <span>{name}</span>
            {currentLang === code && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
