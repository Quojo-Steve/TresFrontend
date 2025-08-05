import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurServices from "./components/OurServices";
import MostPopularServices from "./components/MostPopularServices";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <OurServices />
      <MostPopularServices />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
