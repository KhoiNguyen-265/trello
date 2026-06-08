import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

function Boards() {
  return (
    <>
      <BoardBar />
      <div className="flex h-[calc(100vh-var(--board-bar-height)-var(--header-height))] py-2.5">
        <div className="flex h-full w-full overflow-x-auto overflow-y-hidden bg-inherit">
          <BoardContent />
          <BoardContent />
        </div>
      </div>
    </>
  );
}

export default Boards;
