import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <OurServices />
    </Router>
  );
}

export default App;
