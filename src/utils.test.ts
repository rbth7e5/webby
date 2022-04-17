import {getAmount} from './utils';
import {Currency} from "./types";

test('getAmount SGD', () => {
  expect(getAmount(Currency.SGD, 123000)).toBe(1230)
})
