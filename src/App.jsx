import { useState, useEffect } from "react";
import NavBar from "./components/common/NavBar";
import DeckList from "./components/DeckList";
import NewDeckForm from "./components/NewDeckForm";
import { UserContext } from "./context/UserContext";
import { Route, Routes, useNavigate } from "react-router";
import Layout from "./layouts/Layout";
import DeckDetails from "./pages/DeckDetails";

const App = () => {
  const [decks, setDecks] = useState([]);
  const [user, setUser] = useState({
    name: "Amina Yusuf",
    avatarUrl: "/public/avatar.png"
  });
  const navigate = useNavigate();

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
      .then(newDeck => {
        setDecks(decks => [...decks, newDeck]);
        navigate("/");
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/decks/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log("Deck deleted!");
        setDecks(prev => prev.filter(deck => deck.id !== id));
      });
  }

  return (
    <UserContext value={user}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<DeckList decks={decks} onDelete={handleDelete} />}
          />
          <Route
            path="/decks/new"
            element={<NewDeckForm onCreate={handleCreate} />}
          />
          <Route path="/decks/:id" element={<DeckDetails />} />
        </Route>
      </Routes>
    </UserContext>
  );
};
export default App;
