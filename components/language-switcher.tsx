"use client";

import { useTranslations } from '@/hooks/use-translations';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { Locale } from '@/lib/translations';

const locales: Locale[] = ['en', 'fr', 'it'];

const languageNames = {
  en: 'English',
  fr: 'Français',
  it: 'Italiano'
};

const languageFlags = {
  en: '🇺🇸',
  fr: '🇫🇷',
  it: '🇮🇹'
};

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    console.log('Language change requested:', newLocale);
    
    // Change the language using our custom hook
    changeLanguage(newLocale);
    
    // Get the current path without locale
    let pathWithoutLocale = pathname;
    
    // Remove the current locale from the pathname if it exists
    if (currentLanguage && pathname && pathname.startsWith(`/${currentLanguage}`)) {
      pathWithoutLocale = pathname.replace(`/${currentLanguage}`, '') || '/';
    }
    
    // Handle root path
    if (pathWithoutLocale === '/') {
      pathWithoutLocale = '';
    }
    
    // Navigate to the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    console.log('Navigating to:', newPath);
    
    // Close dropdown and navigate
    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
        <span className="text-lg">{languageFlags[currentLanguage]}</span>
        <span className="hidden sm:inline">{languageNames[currentLanguage]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`cursor-pointer flex items-center gap-3 ${currentLanguage === lang ? 'bg-accent' : 'hover:bg-accent'}`}
          >
            <span className="text-lg">{languageFlags[lang]}</span>
            <span>{languageNames[lang]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
