import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
// import About from "../sections/About";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import AboutAlternative from "../sections/AboutAlternative";
import Clients from "../sections/Clients";
import Process from "../sections/Process";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        {/* <About /> */}
        <AboutAlternative/>
        <Services />
         <Clients />
        <Process />
        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;