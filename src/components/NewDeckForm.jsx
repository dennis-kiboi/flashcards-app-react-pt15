import { useState } from "react";

const NewDeckForm = ({ setIsFormSelected, setDecks }) => {
  const [deckTitle, setDeckTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleBackClick() {
    setIsFormSelected(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: deckTitle,
        description: description
      })
    })
      .then(res => res.json())
      .then(newDeck => setDecks(decks => [...decks, newDeck]));

    setDeckTitle("");
    setDescription("");
    console.log("Last line was executed!!")
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      {/* <button
        className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        onClick={handleBackClick}
        type="button"
      >
        Back
      </button> */}

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-teal-700">
          New deck
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-800">
          Create New Deck
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Set up a new collection of flashcards for your studies.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="deck-title"
              className="block text-sm font-medium text-slate-700"
            >
              Deck Title
            </label>
            <input
              type="text"
              name="deck-title"
              id="deck-title"
              required
              value={deckTitle}
              onChange={e => setDeckTitle(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-teal-200/80"
              placeholder="e.g. Spanish Vocabulary"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-700"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-teal-200/80"
              placeholder="Add a quick overview of the deck"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Create Deck
          </button>
        </form>
      </div>
    </section>
  );
};
export default NewDeckForm;
