import { Button } from "@/components/ui/button";
import type { IColumn } from "@/types/board";
import { FilePlusCorner } from "lucide-react";
import Column from "./Column/Column";

function ListColumns({ columns }: { columns: IColumn[] }) {
  return (
    <>
      <div className="flex h-full w-full overflow-x-auto overflow-y-hidden bg-inherit">
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        <div className="ml-2 flex h-fit w-[200px] shrink-0 flex-col rounded-xl">
          <Button>
            <FilePlusCorner />
            Add new Column
          </Button>
        </div>
      </div>
    </>
  );
}

export default ListColumns;
