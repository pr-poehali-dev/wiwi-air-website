import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-wb-purple to-wb-pink rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold font-montserrat">
                Wildberries
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Интернет-магазин модной одежды, обуви и аксессуаров. Более 150
              миллионов товаров для всей семьи.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wb-purple transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wb-purple transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wb-purple transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Покупателям */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">
              Покупателям
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Как сделать заказ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Способы оплаты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Возврат товара
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Правила продажи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>

          {/* Партнёрам */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">
              Партнёрам
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Продавайте на WB
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Курьерам
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Пункты выдачи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Франшиза
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-wb-pink transition-colors"
                >
                  Реклама на сайте
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">Контакты</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Icon name="Phone" size={18} className="text-wb-pink mt-1" />
                <div>
                  <p className="text-gray-300">8 800 505-87-87</p>
                  <p className="text-gray-400">Бесплатно по России</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Mail" size={18} className="text-wb-pink mt-1" />
                <div>
                  <p className="text-gray-300">info@wildberries.ru</p>
                  <p className="text-gray-400">Служба поддержки</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={18} className="text-wb-pink mt-1" />
                <div>
                  <p className="text-gray-300">Ежедневно</p>
                  <p className="text-gray-400">с 7:00 до 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Download */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-300">Скачайте наше приложение:</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Smartphone" size={20} className="text-wb-pink" />
                  <span className="text-sm">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Smartphone" size={20} className="text-wb-pink" />
                  <span className="text-sm">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Wildberries. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-wb-pink transition-colors"
              >
                Пользовательское соглашение
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-wb-pink transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-wb-pink transition-colors"
              >
                Обработка персональных данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
