export interface ComicsDetailModel {
  title: string;
  prices: ComicsDetailPrice[];
  dates: ComicsDetailDate[];
  id: number;
}

export interface ComicsDetailPrice {
  price: number;
  type: 'printPrice' | 'digitalPurchasePrice';
}

export interface ComicsDetailDate {
  date: string;
  type: "onsaleDate" | "focDate";
}
