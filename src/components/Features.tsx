import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Безопасность превыше всего",
    description:
      "Современный флот самолётов с высочайшими стандартами безопасности и регулярным техническим обслуживанием",
  },
  {
    icon: "Clock",
    title: "Пунктуальность",
    description:
      "Более 95% рейсов прибывают вовремя. Мы ценим ваше время и придерживаемся расписания",
  },
  {
    icon: "Heart",
    title: "Комфорт в полёте",
    description:
      "Удобные кресла, качественное питание и развлекательная система для приятного путешествия",
  },
  {
    icon: "Globe",
    title: "Глобальная сеть",
    description:
      "Более 150 направлений по всему миру с удобными стыковками и гибким расписанием",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description:
      "Круглосуточная служба поддержки на русском языке для помощи в любых вопросах",
  },
  {
    icon: "Zap",
    title: "Быстрая регистрация",
    description:
      "Онлайн-регистрация за 24 часа, мобильные посадочные талоны и быстрый проход в аэропорту",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-slate-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 font-montserrat">
            Почему выбирают WiwiAir
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы создаём незабываемые впечатления от путешествий, объединяя
            надёжность, комфорт и персональный подход к каждому пассажиру
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4 font-montserrat">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">15+</div>
              <div className="text-blue-100">лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">
                150+
              </div>
              <div className="text-blue-100">направлений</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">
                50M+
              </div>
              <div className="text-blue-100">довольных пассажиров</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-montserrat mb-2">95%</div>
              <div className="text-blue-100">рейсов вовремя</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
