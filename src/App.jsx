import { BrowserRouter, Routes, Route } from "react-router-dom";
import Element from "./components/Element";
import About from "./page/About";
import Category from "./page/Category";
import Contact from "./page/Contact";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
