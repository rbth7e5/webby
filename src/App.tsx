import React, {createContext, useState} from "react";
import CurrencySwitcher from "./CurrencySwitcher";
import ProductListPage from "./ProductListPage";
import {Currency} from "./types";
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";

export const CurrencyContext = createContext(Currency.SGD);

function App() {
  const [currency, setCurrency] = useState(Currency.SGD);
  return (
    <CurrencyContext.Provider value={currency}>
      <CurrencySwitcher style={{position: 'absolute', top: 64, left: 64}} currency={currency} setCurrency={setCurrency} />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />}/>
      </Routes>
    </CurrencyContext.Provider>
  );
}

export default App;
