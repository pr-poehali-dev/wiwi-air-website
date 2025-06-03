import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const destinations = [
  {
    city: "Стамбул",
    country: "Турция",
    price: "от 15,000 ₽",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400",
    popular: true,
  },
  {
    city: "Париж",
    country: "Франция",
    price: "от 25,000 ₽",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400",
  },
  {
    city: "Дубай",
    country: "ОАЭ",
    price: "от 28,000 ₽",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400",
  },
  {
    city: "Токио",
    country: "Япония",
    price: "от 45,000 ₽",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
  },
  {
    city: "Нью-Йорк",
    country: "США",
    price: "от 55,000 ₽",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400",
  },
  {
    city: "Лондон",
    country: "Великобритания",
    price: "от 22,000 ₽",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
  },
];

const Destinations = () => {
  return (
    <section className="py-16 bg-white" id="destinations">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 font-montserrat">
            <Icon name="Globe" size={40} className="inline mr-3 text-sky-500" />
            Популярные направления
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Откройте для себя удивительные места по всему миру с лучшими
            предложениями от WiwiAir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {destination.popular && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                    <Icon name="Star" size={14} className="inline mr-1" />
                    Популярно
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 font-montserrat">
                      {destination.city}
                    </h3>
                    <p className="text-slate-600">{destination.country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-sky-500">
                      {destination.price}
                    </p>
                    <p className="text-sm text-slate-500">за человека</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Icon name="Plane" size={16} className="mr-2" />
                    Прямой рейс
                  </div>
                  <button className="text-sky-500 hover:text-sky-600 font-semibold text-sm transition-colors">
                    Подробнее →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            <Icon name="MapPin" size={20} className="inline mr-2" />
            Посмотреть все направления
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
