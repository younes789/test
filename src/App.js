import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Notfoundpage from "./components/Notfoundpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
