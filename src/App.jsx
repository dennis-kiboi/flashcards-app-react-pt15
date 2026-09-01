import { useState, useEffect } from "react";
import NavBar from "./components/common/NavBar";
import DeckList from "./components/DeckList";
import NewDeckForm from "./components/NewDeckForm";

const App = () => {
  const [isFormSelected, setIsFormSelected] = useState(false);
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/decks")
      .then(res => res.json())
      .then(data => setDecks(data));
  }, []);

  function handleCreate(formData) {
    fetch("http://localhost:3000/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newDeck => setDecks(decks => [...decks, newDeck]));
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar setIsFormSelected={setIsFormSelected} />
      {/* {isFormSelected === false ? (
        <DeckList />
      ) : (
        <NewDeckForm setIsFormSelected={setIsFormSelected} />
      )} */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DeckList decks={decks} />
        <NewDeckForm onCreate={handleCreate} />
      </main>
    </div>
  );
};
export default App;
