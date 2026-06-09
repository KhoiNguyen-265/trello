import Logo from "@/components/Logo";
import ModeToggle from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  BadgeCheckIcon,
  BadgeQuestionMark,
  BellIcon,
  CreditCardIcon,
  Grip,
  LogOutIcon,
  SearchIcon,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 flex h-(--header-height) w-full items-center border-b border-border/80 bg-background/75 shadow-xs backdrop-blur-md transition-all duration-300">
        <div className="w-full px-4 py-2">
          <div className="flex items-center justify-between gap-2">
            {/* Left */}
            <div className="flex items-center gap-2 xl:gap-4">
              <Grip className="hidden size-5 cursor-pointer text-muted-foreground transition-all duration-300 hover:rotate-90 hover:text-foreground xl:inline-block" />

              {/* Mobile Menu */}
              <MobileMenu />

              {/* Logo */}
              <Logo />

              {/* Navbar */}
              <div className="ml-4 hidden items-center lg:flex">
                <Navbar />
              </div>

              {/* Action */}
              <Button
                size="lg"
                className="hidden px-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary sm:inline-flex"
              >
                <span className="lg:hidden xl:inline">Create +</span>
                <span className="hidden lg:inline xl:hidden">Create</span>
              </Button>
            </div>

            {/* Right */}
            <div className="flex items-center gap-1.5 xl:ml-5 xl:gap-2">
              {/* Search Input */}
              <Field className="hidden max-w-xs min-w-45 md:flex lg:max-w-[150px] xl:max-w-xs xl:min-w-50">
                <InputGroup className="bg-background/50">
                  <InputGroupInput
                    id="inline-start-input"
                    placeholder="Search..."
                    className="text-foreground placeholder:text-foreground/50"
                  />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon className="size-[1.1rem] text-foreground/60 transition-colors duration-300 group-focus-within/input-group:text-primary" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {/* Mode Select */}
              <ModeToggle />
              {/* Bell */}
              <Button
                size="icon-lg"
                variant="outline"
                className="rounded-full text-foreground/75"
              >
                <BellIcon className="size-[1.2rem]" />
              </Button>

              {/* Help */}
              <Button
                size="icon-lg"
                variant="outline"
                className="hidden rounded-full text-foreground/75 sm:inline-flex"
              >
                <BadgeQuestionMark className="size-[1.2rem]" />
              </Button>

              {/* Avatar */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="shadcn"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheckIcon />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BellIcon />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <LogOutIcon />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
