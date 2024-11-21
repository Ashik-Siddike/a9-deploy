import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import HowItWorks from "../components/home/HowItWorks";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Banner />
      <About />
      <HowItWorks />
      <Statistics />
      <Testimonials />
    </div>
  );
};

export default Home; 