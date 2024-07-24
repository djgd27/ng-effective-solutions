import Hero from "../components/landing/Hero";
import ServiceArea from "../components/landing/ServiceAreas";
import HowItWorks from "../components/landing/HowItWorks";
import WhyUs from "../components/landing/WhyUs";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1">
          <ServiceArea />
        </div>
        <div className="flex-1">
          <HowItWorks />
        </div>
      </div>
      <WhyUs />
    </div>
  );
};
