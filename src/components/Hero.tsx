import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Clouds animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 animate-pulse">
          <Icon name="Cloud" size={60} className="text-white" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Icon name="Cloud" size={40} className="text-white" />
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="mb-6">
          <Icon
            name="Plane"
            size={80}
            className="mx-auto mb-4 text-white animate-bounce"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat leading-tight">
          Летайте с<span className="block text-yellow-300">WiwiAir</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Комфортные перелёты по всему миру. Надёжность, качество и лучшие цены
          в одном месте.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 px-8 py-3 text-lg font-semibold"
          >
            <Icon name="Search" size={20} className="mr-2" />
            Найти рейс
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 text-lg"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Управление бронированием
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
