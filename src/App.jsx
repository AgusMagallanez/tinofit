import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutMePage from "./pages/AboutMe";
import PlanesPage from "./pages/Planes";
import PaymentMethodsPage from "./pages/PaymentMethods";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acerca-de" element={<AboutMePage />} />
        <Route path="/planes" element={<PlanesPage />} />
        <Route path="/medios-pago" element={<PaymentMethodsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
