import GoogleDrive from "@/assets/svg/google-drive.svg?react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlignEndHorizontal,
  Funnel,
  GlobeLock,
  UserPlus,
  Zap,
} from "lucide-react";

function BoardBar() {
  return (
    <div className="flex h-(--board-bar-height) items-center border-b border-border/80">
      <div className="w-full overflow-x-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="-ml-2.5 flex items-center gap-x-2">
            <Button variant="ghost">
              <AlignEndHorizontal />
              BoardFlow MERN stack board
            </Button>
            <Button variant="ghost">
              <GlobeLock />
              Public/Private Workspace
            </Button>
            <Button variant="ghost">
              <GoogleDrive className="size-5 fill-current" />
              Add to Google Drive
            </Button>
            <Button variant="ghost">
              <Zap />
              Automation
            </Button>
            <Button variant="ghost">
              <Funnel />
              Filter
            </Button>
          </div>

          {/* Right */}
          <div className="flex items-center gap-x-2">
            {/* Invite button */}
            <Button size="lg" className="px-4">
              <UserPlus />
              Invite
            </Button>

            {/* Avatar Group */}
            <AvatarGroup className="">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent side="bottom">shadcn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent side="bottom">maxleiter</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent side="bottom">evilrabbit</TooltipContent>
              </Tooltip>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardBar;
