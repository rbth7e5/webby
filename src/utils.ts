import {Currency} from "./types";

export const renderPrice = (price: number, currency: Currency): string => {
  const EXCHANGE_RATE = 3.1;
  switch (currency) {
    case Currency.MYR:
      return `MYR ${price * EXCHANGE_RATE}`;
    case Currency.SGD:
      return `SGD ${price}`;
    default:
      return `SGD ${price}`;
  }
}