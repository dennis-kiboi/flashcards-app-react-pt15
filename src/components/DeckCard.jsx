const DeckCard = ({ deck }) => {
  return (
    <div>
      <h2>{deck.title}</h2>
      <p>{deck.description}</p>
    </div>
  );
};
export default DeckCard;
