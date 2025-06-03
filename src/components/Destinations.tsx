import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const products = [
  {
    title: "Женская куртка осень-зима",
    price: "2,990 ₽",
    oldPrice: "5,980 ₽",
    discount: "-50%",
    rating: 4.8,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    popular: true,
  },
  {
    title: "Кроссовки мужские Nike",
    price: "7,450 ₽",
    oldPrice: "9,990 ₽",
    discount: "-25%",
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    title: "Платье женское летнее",
    price: "1,590 ₽",
    oldPrice: "2,890 ₽",
    discount: "-45%",
    rating: 4.7,
    reviews: 654,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
  },
  {
    title: "Рюкзак городской",
    price: "3,200 ₽",
    oldPrice: "4,500 ₽",
    discount: "-29%",
    rating: 4.6,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
  },
  {
    title: "Смартфон Samsung Galaxy",
    price: "24,990 ₽",
    oldPrice: "34,990 ₽",
    discount: "-29%",
    rating: 4.8,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
  {
    title: "Часы мужские классические",
    price: "5,790 ₽",
    oldPrice: "8,990 ₽",
    discount: "-36%",
    rating: 4.5,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
  },
];

const PopularProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            <Icon
              name="TrendingUp"
              size={40}
              className="inline mr-3 text-wb-purple"
            />
            Популярные товары
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Самые покупаемые товары с отличными отзывами и выгодными ценами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.popular && (
                  <div className="absolute top-3 left-3 bg-wb-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Icon name="TrendingUp" size={14} className="inline mr-1" />
                    Хит
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                  {product.discount}
                </div>
                <Button
                  size="sm"
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-wb-purple hover:bg-wb-purple hover:text-white"
                >
                  <Icon name="ShoppingCart" size={16} />
                </Button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">
                    {product.reviews} отзывов
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-wb-purple">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-wb-purple hover:bg-wb-dark text-white"
                  >
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-wb-purple to-wb-pink hover:from-wb-dark hover:to-wb-purple text-white px-12 py-3"
          >
            <Icon name="Grid3X3" size={20} className="mr-2" />
            Посмотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
