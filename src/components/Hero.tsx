import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-wb-light to-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Large banner */}
          <div className="lg:col-span-2 relative bg-gradient-to-r from-wb-purple to-wb-pink rounded-2xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                Мега скидки
                <span className="block text-yellow-300">до 80%</span>
              </h1>
              <p className="text-xl mb-6 text-purple-100">
                На 2 миллиона товаров от проверенных продавцов
              </p>
              <Button
                size="lg"
                className="bg-white text-wb-purple hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Icon name="Percent" size={20} className="mr-2" />
                Смотреть скидки
              </Button>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -right-20 -bottom-10 w-60 h-60 bg-white/5 rounded-full"></div>
          </div>

          {/* Side banners */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 text-center">
              <Icon
                name="Truck"
                size={40}
                className="mx-auto mb-3 text-wb-pink"
              />
              <h3 className="font-bold text-gray-800 mb-2">Быстрая доставка</h3>
              <p className="text-sm text-gray-600">От 1 дня по всей России</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center">
              <Icon
                name="Shield"
                size={40}
                className="mx-auto mb-3 text-wb-purple"
              />
              <h3 className="font-bold text-gray-800 mb-2">
                Гарантия качества
              </h3>
              <p className="text-sm text-gray-600">Возврат в течение 14 дней</p>
            </div>
          </div>
        </div>

        {/* Promo cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-500 text-white rounded-xl p-4 text-center">
            <Icon name="Zap" size={24} className="mx-auto mb-2" />
            <div className="font-bold">Молниеносные скидки</div>
            <div className="text-sm opacity-90">Каждый час</div>
          </div>
          <div className="bg-green-500 text-white rounded-xl p-4 text-center">
            <Icon name="Gift" size={24} className="mx-auto mb-2" />
            <div className="font-bold">Подарки</div>
            <div className="text-sm opacity-90">К покупкам</div>
          </div>
          <div className="bg-blue-500 text-white rounded-xl p-4 text-center">
            <Icon name="Star" size={24} className="mx-auto mb-2" />
            <div className="font-bold">Топ бренды</div>
            <div className="text-sm opacity-90">Лучшие цены</div>
          </div>
          <div className="bg-orange-500 text-white rounded-xl p-4 text-center">
            <Icon name="Clock" size={24} className="mx-auto mb-2" />
            <div className="font-bold">24/7</div>
            <div className="text-sm opacity-90">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
