const NewDeckForm = ({setIsFormSelected}) => {
  function handleBackClick() {
    setIsFormSelected(false);
  }
  
  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      NewDeckForm
    </div>
  )
}
export default NewDeckForm