import mockData from "@/apis/mock-data";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent/BoardContent";
function Boards() {
  return (
    <>
      <BoardBar board={mockData.board} />

      <BoardContent board={mockData.board} />
    </>
  );
}

export default Boards;
