import DeckCard from "./DeckCard";

const DeckList = ({ decks, onDelete }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold">Your Decks</h1>
      <small className="text-slate-500">
        Ready for a focused study session.
      </small>

      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-10">
        {decks.map(deck => (
          <div key={deck.id} className="w-full max-w-68">
            <DeckCard deck={deck} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default DeckList;
