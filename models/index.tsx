export interface CardsDetails {
  id: number,
  img: string;
  title: string;
  link: string;
}

export interface CoinsData {
  availableSupply: number;
  contractAddress: string;
  decimals: number;
  icon: string;
  id: string;
  marketCap: number;
  name: string;
  price: number;
  priceBtc: number;
  priceChange1d: number;
  priceChange1w: number;
  rank: number;
  symbol: string;
  totalSupply: number;
  twitterUrl: string;
  volume: number;
  websiteUrl: string;
  exp: string[];
  listPrice: number[];
}

export interface PropsHome {
  data: CoinsData[];
}