import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  CalendarPlus,
  ChevronDown,
  ClipboardPaste,
  Cloud,
  Copy,
  Equal,
  Link,
  MessagesSquare,
  Scissors,
  Trash,
  Users,
} from "lucide-react";

function BoardContent() {
  return (
    <div className="ml-2 flex h-fit max-h-[calc(100vh-var(--board-bar-height)-var(--header-height)-var(--column-spacing)*4)] w-[300px] shrink-0 flex-col gap-y-3 rounded-xl border border-border/80 bg-secondary pt-3 pb-3 pl-3 pr-1.5 shadow-xs">
      {/* Column Title */}
      <div className="flex items-center justify-between pr-1.5">
        <h2 className="cursor-pointer text-sm font-bold">Column Title</h2>
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
      {/* Column Content */}
      <div className="flex min-h-0 flex-auto flex-col gap-3 overflow-y-auto pl-1.5 pr-1.5 py-1">
        {/* Card 1 */}
        <Card className="relative mx-auto w-full max-w-sm shrink-0 pt-0 shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
          <div className="absolute inset-x-0 top-0 z-30 aspect-video rounded-t-xl bg-black/35" />
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            className="relative z-20 aspect-video w-full rounded-t-xl object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <div className="flex items-center gap-2 px-2 pb-4">
            <Button variant="ghost">
              <Users /> 20
            </Button>
            <Button variant="ghost">
              <MessagesSquare /> 15
            </Button>
            <Button variant="ghost">
              <Link /> 10
            </Button>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="relative mx-auto w-full max-w-sm shrink-0 pt-0 shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
          </CardHeader>
        </Card>
        {/* Card 2 */}
        <Card className="relative mx-auto w-full max-w-sm shrink-0 pt-0 shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
          </CardHeader>
        </Card>
        {/* Card 2 */}
        <Card className="relative mx-auto w-full max-w-sm shrink-0 pt-0 shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
          </CardHeader>
        </Card>
        {/* Card 2 */}
        <Card className="relative mx-auto w-full max-w-sm shrink-0 pt-0 shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
          </CardHeader>
        </Card>
        {/* Card 2 */}
        <Card className="relative mx-auto w-full max-w-sm shrink-0 pt-0 shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
          </CardHeader>
        </Card>
      </div>

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

export default BoardContent;
