import { Route, Routes } from "react-router-dom";
import About from "../pages/abt/about";
import Home from "../pages/home/Home";
import Categories from "../pages/cat/Categories";
export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  );
}
