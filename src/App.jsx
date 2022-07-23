import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Brand from "./page/Brand";
import Contact from "./page/Contact";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
