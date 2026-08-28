const NavBar = ({setIsFormSelected}) => {
  function handleAddDeck() {
    setIsFormSelected(true);
  }
  
  
  return (
    <nav className="flex justify-between shadow py-5 px-20">
      <p className="text-2xl font-light">Flash<span className="font-bold text-teal-700">Learn</span></p>
      <button onClick={handleAddDeck} className="rounded-full shadow py-2 px-6">Add Deck</button>
    </nav>
  )
}
export default NavBar