import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mapOrder } from "@/utils/sorts";
import {
  CalendarPlus,
  ChevronDown,
  ClipboardPaste,
  Cloud,
  Copy,
  Equal,
  Scissors,
  Trash,
} from "lucide-react";
import ListCards from "./ListCards/ListCards";

function Column({ column }) {
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  return (
    <div className="ml-2 flex h-fit max-h-[calc(100vh-var(--board-bar-height)-var(--header-height)-var(--column-spacing)*4)] w-[300px] shrink-0 flex-col gap-y-3 rounded-xl border border-border/80 bg-secondary pt-3 pr-1.5 pb-3 pl-3 shadow-xs">
      {/* Column Header */}
      <div className="flex items-center justify-between px-1.5">
        <h2 className="cursor-pointer text-sm font-bold">{column?.title}</h2>
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>

            <TooltipContent>
              <p>More actions</p>
            </TooltipContent>
          </Tooltip>

          <DropdownMenuContent
            className="w-fit"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CalendarPlus />
                Add new card
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Scissors /> Cut
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy /> Copy
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ClipboardPaste />
                Paste
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Trash />
              Remove this column
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Cloud />
              Archive this column
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Colum List Cards */}
      <ListCards cards={orderedCards} />

      {/* Column Footer */}
      <div className="flex items-center justify-between pr-1.5">
        <Button variant="outline">
          <CalendarPlus className="" />
          Add new card
        </Button>

        <Tooltip>
          <TooltipTrigger asChild>
            <Equal className="cursor-pointer" />
          </TooltipTrigger>

          <TooltipContent>
            <p>Drag to move</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export default Column;
