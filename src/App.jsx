import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";
import MostPopularServices from "./components/MostPopularServices";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <OurServices />
      <MostPopularServices />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
