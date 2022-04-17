export enum Currency {
  SGD = "SGD",
  MYR = "MYR",
}

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};
