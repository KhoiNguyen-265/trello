import Card from "./Card/Card";

function ListCards({ cards }) {
  return (
    <div className="flex min-h-0 flex-auto flex-col gap-3 overflow-y-auto py-1 pr-1.5 pl-1.5">
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </div>
  );
}

export default ListCards;
