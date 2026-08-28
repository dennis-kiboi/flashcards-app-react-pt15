import { useState } from "react";

const NewDeckForm = ({ setIsFormSelected }) => {
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
      .then(newDeck => console.log(newDeck));
  }

  return (
    <div>
      <button className="block" onClick={handleBackClick}>
        Back
      </button>
      <h1>Create New Deck</h1>
      <p>Set up a new collection of flashcards for your studies.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="deck-title">Deck Title</label>
          <input
            type="text"
            name="deck-title"
            id="deck-title"
            required
            value={deckTitle}
            onChange={e => setDeckTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <input type="submit" value="Create Deck" />
      </form>
    </div>
  );
};
export default NewDeckForm;
