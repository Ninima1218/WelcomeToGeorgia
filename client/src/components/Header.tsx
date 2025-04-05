import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  // Close mobile menu when the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-2">
                <span className="font-georgian text-xl">გე</span>
              </div>
              <h1 className="text-primary font-montserrat font-bold text-2xl">Discover Georgia</h1>
            </div>
          </Link>
        </div>

        <div className="flex items-center md:order-3">
          {/* Language Switcher */}
          <div className="mr-4">
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-georgian-dark focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-icons">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto md:order-2`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-montserrat font-medium">
            <li className="py-2 md:py-0">
              <Link href="/about">
                <span className={`block transition duration-150 cursor-pointer ${location === '/about' ? 'text-primary' : 'text-georgian-dark hover:text-primary'}`}>
                  {t("nav.about")}
                </span>
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/gallery">
                <span className={`block transition duration-150 cursor-pointer ${location === '/gallery' ? 'text-primary' : 'text-georgian-dark hover:text-primary'}`}>
                  {t("nav.gallery")}
                </span>
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/resorts">
                <span className={`block transition duration-150 cursor-pointer ${location === '/resorts' ? 'text-primary' : 'text-georgian-dark hover:text-primary'}`}>
                  {t("nav.resorts")}
                </span>
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/cuisine">
                <span className={`block transition duration-150 cursor-pointer ${location === '/cuisine' ? 'text-primary' : 'text-georgian-dark hover:text-primary'}`}>
                  {t("nav.cuisine")}
                </span>
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="/traditions">
                <span className={`block transition duration-150 cursor-pointer ${location === '/traditions' ? 'text-primary' : 'text-georgian-dark hover:text-primary'}`}>
                  {t("nav.traditions")}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
