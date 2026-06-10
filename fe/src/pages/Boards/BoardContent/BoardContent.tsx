import { mapOrder } from "@/utils/sorts";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <div className="flex h-[calc(100vh-var(--board-bar-height)-var(--header-height))] py-2.5">
      <ListColumns columns={orderedColumns} />
    </div>
  );
}

export default BoardContent;
