import { useState } from "react";
import ArrowDown from "./Components/ArrowDown";
import Content from "./Components/Content";
import FormBox from "./Components/FormBox";
import Price from "./Components/Price";
import Produk from "./Components/Produk";
import Promo from "./Components/Promo";
import Testi from "./Components/Testi";

function App() {
  return (
    <div className="App">
      <Content />
      <Price />
      <ArrowDown />
      <Produk />
      <Testi />
      <Promo />
      <FormBox />
    </div>
  );
}

export default App;
