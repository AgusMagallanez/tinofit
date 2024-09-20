import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        {/* <Route path="/medios-pago" element={<MediosPago />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
