import "./styles/App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Planes from "./pages/Planes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/planes" element={<Planes />} />
        {/* <Route path="/medios-pago" element={<MediosPago />} /> */}
      </Routes>
    </>
  );
}

export default App;
