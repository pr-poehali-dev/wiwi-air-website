import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
              <Icon name="Plane" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800 font-montserrat">
              WiwiAir
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#flights"
              className="text-slate-600 hover:text-sky-500 transition-colors"
            >
              Рейсы
            </a>
            <a
              href="#destinations"
              className="text-slate-600 hover:text-sky-500 transition-colors"
            >
              Направления
            </a>
            <a
              href="#services"
              className="text-slate-600 hover:text-sky-500 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-slate-600 hover:text-sky-500 transition-colors"
            >
              О нас
            </a>
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm" className="bg-sky-500 hover:bg-sky-600">
              Регистрация
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-slate-600"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#flights"
                className="text-slate-600 hover:text-sky-500 transition-colors"
              >
                Рейсы
              </a>
              <a
                href="#destinations"
                className="text-slate-600 hover:text-sky-500 transition-colors"
              >
                Направления
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-sky-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-sky-500 transition-colors"
              >
                О нас
              </a>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm">
                  Войти
                </Button>
                <Button size="sm" className="bg-sky-500 hover:bg-sky-600">
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
