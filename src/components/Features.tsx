import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description:
      "Доставляем по всей России от 1 дня. Пункты выдачи в каждом районе, курьерская доставка до двери",
  },
  {
    icon: "Shield",
    title: "Гарантия качества",
    description:
      "Проверяем каждый товар перед отправкой. Возврат и обмен в течение 14 дней без лишних вопросов",
  },
  {
    icon: "CreditCard",
    title: "Удобная оплата",
    description:
      "Оплачивайте как удобно: картой, наличными при получении, в рассрочку или частями",
  },
  {
    icon: "Users",
    title: "Миллионы продавцов",
    description:
      "Работаем с проверенными поставщиками со всего мира. Лучшие цены от производителей",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description:
      "Консультанты онлайн круглосуточно. Помогаем с выбором, заказом и решением любых вопросов",
  },
  {
    icon: "Percent",
    title: "Постоянные скидки",
    description:
      "Акции каждый день, персональные скидки, кэшбэк с покупок и программа лояльности",
  },
];

const MarketplaceFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаём удобный шопинг-опыт для миллионов покупателей, объединяя
            лучшие товары, выгодные цены и качественный сервис
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-wb-purple to-wb-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 font-montserrat">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-wb-purple to-wb-pink rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">
                150М+
              </div>
              <div className="text-purple-100">товаров в каталоге</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">
                300К+
              </div>
              <div className="text-purple-100">продавцов</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">
                50М+
              </div>
              <div className="text-purple-100">довольных покупателей</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">99%</div>
              <div className="text-purple-100">положительных отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceFeatures;
