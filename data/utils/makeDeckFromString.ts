interface Card {
  name: string
  ptcgoCode: string
  number:string
}
interface Deck {
  cards: Card[]
}
export function makeDeckFromString  (decks:string)  {
  const spaces = decks.split('\n');
  const regex = /^\*\s/i;
  const cards = spaces.filter((line) => regex.test(line)); // [ "* 4 Eevee AOR 63",  "* 2 Kangaskhan FCO 75",  "* 4 Rattata BKP 87"]
  const deck:Deck = { cards: [] };
  cards.forEach((card) => {
    const splited = card.split(' ');
    const name = splited[2];
    const ptcgoCode = splited[3];
    const number = splited[4];
    const amount = Number(splited[1]);
    Array.from({ length: amount }).forEach((card) => {
      deck.cards.push({
        name,
        ptcgoCode,
        number,
      });
    });
  });
  return deck;
}
