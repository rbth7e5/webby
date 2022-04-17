import Container from "@mui/material/Container";
import {createContext, useState} from "react";
import CurrencySwitcher from "./CurrencySwitcher";
import {Currency} from "./types";
import ProductListPage from "./ProductListPage";

export const CurrencyContext = createContext(Currency.SGD);

function App() {
  const [currency, setCurrency] = useState(Currency.SGD);
  return (
    <CurrencyContext.Provider value={currency}>
      <Container>
        <CurrencySwitcher style={{position: 'absolute', top: 64, left: 64}} currency={currency} setCurrency={setCurrency} />
        <ProductListPage />
      </Container>
    </CurrencyContext.Provider>
  );
}

export default App;
