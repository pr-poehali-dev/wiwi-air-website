import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/FlightSearch";
import PopularProducts from "@/components/Destinations";
import MarketplaceFeatures from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductCatalog />
      <PopularProducts />
      <MarketplaceFeatures />
      <Footer />
    </div>
  );
};

export default Index;
