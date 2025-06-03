import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                <Icon name="Plane" size={24} className="text-white" />
              </div>
              <span className="text-3xl font-bold font-montserrat">
                WiwiAir
              </span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              Ваш надёжный партнёр в небе. Комфортные перелёты, выгодные цены и
              высококлассный сервис по всему миру.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">
              Быстрые ссылки
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Поиск рейсов
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Управление бронированием
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Онлайн регистрация
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Статус рейса
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Багаж
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Услуги в полёте
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Phone" size={18} className="text-sky-400 mt-1" />
                <div>
                  <p className="text-slate-300">8 800 123-45-67</p>
                  <p className="text-sm text-slate-400">Бесплатно по России</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Mail" size={18} className="text-sky-400 mt-1" />
                <div>
                  <p className="text-slate-300">info@wiwiair.com</p>
                  <p className="text-sm text-slate-400">Служба поддержки</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={18} className="text-sky-400 mt-1" />
                <div>
                  <p className="text-slate-300">24/7</p>
                  <p className="text-sm text-slate-400">Круглосуточно</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-bold font-montserrat mb-4">
              Подписка на новости
            </h3>
            <p className="text-slate-300 mb-4">
              Получайте лучшие предложения и новости первыми
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-l-lg focus:outline-none focus:border-sky-500 text-white"
              />
              <button className="bg-sky-500 hover:bg-sky-600 px-6 py-2 rounded-r-lg transition-colors">
                <Icon name="Send" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 WiwiAir. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                Возврат билетов
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
