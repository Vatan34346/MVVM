import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./Presentation/View/Product/List/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductNew from "./Presentation/View/Product/New/ProductNew";
import ProductDetail from "./Presentation/View/Product/Detail/ProductDetail";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Paul");
    console.log("test");
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/new" element={<ProductNew />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
