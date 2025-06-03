import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FlightSearch from "@/components/FlightSearch";
import Destinations from "@/components/Destinations";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FlightSearch />
      <Destinations />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
