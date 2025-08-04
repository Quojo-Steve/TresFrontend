import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
