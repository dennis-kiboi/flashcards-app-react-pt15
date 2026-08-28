import { useState } from "react";
import NavBar from "./components/common/NavBar";
import DeckList from "./components/DeckList";
import NewDeckForm from "./components/NewDeckForm";

const App = () => {
  const [isFormSelected, setIsFormSelected] = useState(false);

  return (
    <>
      <NavBar setIsFormSelected={setIsFormSelected} />
      {isFormSelected === false ? (
        <DeckList />
      ) : (
        <NewDeckForm setIsFormSelected={setIsFormSelected} />
      )}
    </>
  );
};
export default App;
