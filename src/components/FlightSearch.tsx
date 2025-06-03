import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const categories = [
  { name: "Женщинам", icon: "Shirt", color: "from-pink-400 to-pink-600" },
  { name: "Мужчинам", icon: "User", color: "from-blue-400 to-blue-600" },
  { name: "Детям", icon: "Baby", color: "from-green-400 to-green-600" },
  { name: "Обувь", icon: "Footprints", color: "from-amber-400 to-amber-600" },
  { name: "Красота", icon: "Sparkles", color: "from-purple-400 to-purple-600" },
  { name: "Дом", icon: "Home", color: "from-emerald-400 to-emerald-600" },
  { name: "Спорт", icon: "Dumbbell", color: "from-red-400 to-red-600" },
  {
    name: "Электроника",
    icon: "Smartphone",
    color: "from-indigo-400 to-indigo-600",
  },
];

const ProductCatalog = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
            Каталог товаров
          </h2>
          <p className="text-lg text-gray-600">
            Более 150 миллионов товаров в одном месте
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-0">
                <div
                  className={`bg-gradient-to-br ${category.color} h-32 flex items-center justify-center relative overflow-hidden`}
                >
                  <Icon
                    name={category.icon as any}
                    size={48}
                    className="text-white group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-800 font-montserrat">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Тысячи товаров</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular brands */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-montserrat">
            Популярные бренды
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-4 rounded-lg shadow-md font-bold text-gray-700">
              NIKE
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md font-bold text-gray-700">
              ADIDAS
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md font-bold text-gray-700">
              ZARA
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md font-bold text-gray-700">
              H&M
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md font-bold text-gray-700">
              APPLE
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-md font-bold text-gray-700">
              SAMSUNG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
