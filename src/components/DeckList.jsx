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
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold">Your Decks</h1>
      <small className="text-slate-500">
        Ready for a focused study session.
      </small>

      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-10">
        {decks.map(deck => (
          <div key={deck.id} className="w-full max-w-68">
            <DeckCard deck={deck} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default DeckList;
