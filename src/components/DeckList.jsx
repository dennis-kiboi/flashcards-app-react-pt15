import { useEffect, useState } from "react";
import DeckCard from "./DeckCard";

const DeckList = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/decks")
      .then(res => res.json())
      .then(data => setDecks(data));
  }, []);

  return (
    <div>
      <h1>Your Decks</h1>
      <small>Ready for a focused study session.</small>
      <div>
        {decks.map(deck => (
          <DeckCard key={deck.id} deck={deck} />
        ))}
      </div>
    </div>
  );
};
export default DeckList;
