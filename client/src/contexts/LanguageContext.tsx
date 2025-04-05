import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About the Country",
    "nav.gallery": "Gallery",
    "nav.resorts": "Resorts",
    "nav.cuisine": "Cuisine",
    "nav.traditions": "Traditions",
    
    // Home Page
    "home.hero.title": "Discover the Heart of the Caucasus",
    "home.hero.subtitle": "Experience the unique culture, breathtaking landscapes, and legendary hospitality of Georgia.",
    "home.hero.button": "Plan Your Journey",
    "home.weather.title": "Weather in Georgia",
    "home.map.title": "Map of Georgia",
    "home.map.description": "Georgia is located at the crossroads of Eastern Europe and Western Asia, bordered by the Black Sea to the west, Russia to the north, Turkey and Armenia to the south, and Azerbaijan to the southeast.",
    "home.alphabet.title": "Georgian Alphabet",
    "home.alphabet.description": "The unique Georgian alphabet, one of the world's 14 alphabets:",
    "home.alphabet.fact": "The Georgian alphabet consists of 33 unique characters and is one of the oldest writing systems in the world.",
    "home.explore.title": "Explore Georgia",
    "home.cta.title": "Ready to Experience Georgia?",
    "home.cta.description": "Start planning your journey to discover the breathtaking landscapes, rich history, and warm hospitality of this hidden gem in the Caucasus.",
    "home.cta.button": "Plan Your Visit",
    
    // Sections
    "section.about.title": "About Georgia",
    "section.about.btn": "Learn More",
    "section.gallery.title": "Gallery",
    "section.gallery.btn": "View Gallery",
    "section.resorts.title": "Resorts of Georgia",
    "section.resorts.btn": "Explore Resorts",
    "section.cuisine.title": "Georgian Cuisine",
    "section.cuisine.btn": "Taste Georgia",
    "section.traditions.title": "Traditions",
    "section.traditions.btn": "Discover Traditions",
    
    // Footer
    "footer.about": "Your guide to experiencing the heart of the Caucasus region with its rich history, diverse landscapes, and legendary hospitality.",
    "footer.explore": "Explore",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved.",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.about": "О Стране",
    "nav.gallery": "Галерея",
    "nav.resorts": "Курорты",
    "nav.cuisine": "Кухня",
    "nav.traditions": "Традиции",
    
    // Home Page
    "home.hero.title": "Откройте для себя сердце Кавказа",
    "home.hero.subtitle": "Познакомьтесь с уникальной культурой, захватывающими пейзажами и легендарным гостеприимством Грузии.",
    "home.hero.button": "Спланировать путешествие",
    "home.weather.title": "Погода в Грузии",
    "home.map.title": "Карта Грузии",
    "home.map.description": "Грузия расположена на перекрестке Восточной Европы и Западной Азии, граничит с Черным морем на западе, Россией на севере, Турцией и Арменией на юге, и Азербайджаном на юго-востоке.",
    "home.alphabet.title": "Грузинский алфавит",
    "home.alphabet.description": "Уникальный грузинский алфавит, один из 14 алфавитов мира:",
    "home.alphabet.fact": "Грузинский алфавит состоит из 33 уникальных символов и является одной из древнейших письменных систем в мире.",
    "home.explore.title": "Исследуйте Грузию",
    "home.cta.title": "Готовы познать Грузию?",
    "home.cta.description": "Начните планировать свое путешествие, чтобы открыть для себя захватывающие пейзажи, богатую историю и теплое гостеприимство этой жемчужины Кавказа.",
    "home.cta.button": "Спланировать визит",
    
    // Sections
    "section.about.title": "О Грузии",
    "section.about.btn": "Узнать больше",
    "section.gallery.title": "Галерея",
    "section.gallery.btn": "Смотреть галерею",
    "section.resorts.title": "Курорты Грузии",
    "section.resorts.btn": "Изучить курорты",
    "section.cuisine.title": "Грузинская кухня",
    "section.cuisine.btn": "Вкус Грузии",
    "section.traditions.title": "Традиции",
    "section.traditions.btn": "Открыть традиции",
    
    // Footer
    "footer.about": "Ваш путеводитель по сердцу Кавказского региона с его богатой историей, разнообразными ландшафтами и легендарным гостеприимством.",
    "footer.explore": "Изучить",
    "footer.resources": "Ресурсы",
    "footer.contact": "Контакты",
    "footer.copyright": "Все права защищены.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};