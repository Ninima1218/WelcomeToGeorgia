import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2 items-center">
      <button
        className={`text-sm px-2 py-1 rounded-md ${
          language === "en"
            ? "bg-primary text-white font-semibold"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`text-sm px-2 py-1 rounded-md ${
          language === "ru"
            ? "bg-primary text-white font-semibold"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        onClick={() => setLanguage("ru")}
        aria-label="Switch to Russian"
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;