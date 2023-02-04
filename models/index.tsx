export interface CardsDetails {
  id: number,
  img: string;
  title: string;
  link: string;
}

export interface ListPropsLanding {
  cards: CardsDetails[],
}