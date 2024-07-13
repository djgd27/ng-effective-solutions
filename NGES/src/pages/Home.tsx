import Hero from "../components/landing/Hero";
import WhyUs from "../components/landing/WhyUs";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyUs />
    </div>
  );
};
