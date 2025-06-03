import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-4">
            <span>Покупайте у 300 000 продавцов</span>
            <span>•</span>
            <span>Бесплатная доставка от 999 ₽</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-wb-purple">
              Продавайте на WB
            </a>
            <a href="#" className="hover:text-wb-purple">
              Работа в WB
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-wb-purple to-wb-pink rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-2xl font-bold text-wb-purple font-montserrat">
              Wildberries
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                placeholder="Найти среди 150 млн товаров"
                className="pl-4 pr-12 h-12 border-2 border-gray-200 focus:border-wb-purple rounded-xl"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-wb-purple hover:bg-wb-dark h-10 px-4 rounded-lg"
              >
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex flex-col items-center p-2"
            >
              <Icon name="MapPin" size={20} className="text-wb-purple" />
              <span className="text-xs">Адреса</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center p-2"
            >
              <Icon name="User" size={20} className="text-wb-purple" />
              <span className="text-xs hidden md:block">Войти</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center p-2 relative"
            >
              <Icon name="ShoppingCart" size={20} className="text-wb-purple" />
              <span className="text-xs hidden md:block">Корзина</span>
              <span className="absolute -top-1 -right-1 bg-wb-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon
                name={isMenuOpen ? "X" : "Menu"}
                size={24}
                className="text-wb-purple"
              />
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              placeholder="Поиск товаров"
              className="pl-4 pr-12 h-10 border-2 border-gray-200 focus:border-wb-purple rounded-lg"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 bg-wb-purple hover:bg-wb-dark h-8 px-3"
            >
              <Icon name="Search" size={16} />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="hidden md:flex items-center space-x-8 py-3 border-t">
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Женщинам
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Мужчинам
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Детям
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Обувь
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Аксессуары
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Красота
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Дом
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-wb-purple font-medium"
          >
            Электроника
          </a>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-wb-purple font-medium"
              >
                Женщинам
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-wb-purple font-medium"
              >
                Мужчинам
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-wb-purple font-medium"
              >
                Детям
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-wb-purple font-medium"
              >
                Обувь
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-wb-purple font-medium"
              >
                Красота
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
