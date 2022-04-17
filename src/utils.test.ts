import { getAmount, EXCHANGE_RATE } from "./utils";
import { Currency } from "./types";

test("getAmount SGD", () => {
  expect(getAmount(Currency.SGD, 123000)).toBe(1230);
});

test("getAmount MYR", () => {
  expect(getAmount(Currency.MYR, 123000)).toBe(1230 * EXCHANGE_RATE);
});

test("getAmount negative price", () => {
  expect(() => getAmount(Currency.SGD, -10000)).toThrow(
    new Error("Price cannot be negative")
  );
});
