import type { IBoard } from "@/types/board";
import { mapOrder } from "@/utils/sorts";
import type { DragEndEvent, DragOverEvent } from "@dnd-kit/react";
import { DragDropProvider } from "@dnd-kit/react";
import { useState } from "react";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent({ board }: { board: IBoard }) {
  const [boardData, setBoardData] = useState<IBoard>(board);

  // Sắp xếp các Column theo thứ tự columnOrderIds ban đầu để hiển thị ra UI
  const orderedColumns = mapOrder(
    boardData?.columns,
    boardData?.columnOrderIds,
    "_id",
  );

  /**
   * Hàm xử lý logic TRONG KHI kéo (Drag Over)
   * Giúp xử lý các kịch bản: Kéo Card từ Column này sang Column khác, dịch chuyển Card trong cùng một Column
   */
  const handleDragOver = (event: DragOverEvent) => {
    const { source, target } = event.operation;

    // Nếu không tìm thấy đối tượng kéo hoặc mục tiêu hovered qua thì không làm gì cả
    if (!source || !target) return;

    // Phân biệt kéo Card (item) hay kéo cả Column
    // Lưu ý: Đảm bảo phía các component con (Card, Column) bạn đã truyền thuộc tính 'type' vào useSortable
    if (source.type === "card") {
      // Logic xử lý hoán đổi card tạm thời giữa các container (Columns) tại đây nếu cần hiển thị mượt mà
      // (Hoặc bạn có thể dùng helper xử lý mảng IDs riêng biệt phù hợp với interface IBoard)
    }
  };

  /**
   * Hàm xử lý logic KHI THẢ (Drag End)
   * Định đoạt vị trí cuối cùng của Card hoặc Column và cập nhật lại State chuẩn
   */
  const handleDragEnd = (event: DragEndEvent) => {
    const { source, target } = event.operation;

    // Nếu kéo ra ngoài không trúng mục tiêu nào hoặc drag bị hủy (nhấn Escape)
    if (!source || !target || event.canceled) return;

    console.log("Thả thành công:", { source, target });

    // Trường hợp 1: Hành động kéo thả là di chuyển COLUMN
    if (source.type === "column") {
      if (source.id !== target.id) {
        // Tìm vị trí cũ và vị trí mới trong mảng columnOrderIds
        const oldIndex = boardData.columnOrderIds.indexOf(source.id as string);
        const newIndex = boardData.columnOrderIds.indexOf(target.id as string);

        if (oldIndex !== -1 && newIndex !== -1) {
          // Tạo bản sao mới cho mảng columnOrderIds để tránh mutate state trực tiếp
          const nextColumnOrderIds = [...boardData.columnOrderIds];
          // Cắt và di dời phần tử vị trí cũ sang vị trí mới
          const [movedColumnId] = nextColumnOrderIds.splice(oldIndex, 1);
          nextColumnOrderIds.splice(newIndex, 0, movedColumnId);

          // Cập nhật lại state của Board
          setBoardData((prev) => ({
            ...prev,
            columnOrderIds: nextColumnOrderIds,
          }));
        }
      }
    }

    // Trường hợp 2: Hành động kéo thả là di chuyển CARD
    if (source.type === "card") {
      // Logic cập nhật cardOrderIds bên trong column cụ thể khi thả chuột dứt điểm
    }
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      <div className="flex h-[calc(100vh-var(--board-bar-height)-var(--header-height))] overflow-x-auto overflow-y-hidden py-2.5 selection:bg-none">
        <ListColumns columns={orderedColumns} />
      </div>
    </DragDropProvider>
  );
}

export default BoardContent;
