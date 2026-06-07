import logo from "@/assets/svg/logo.svg";
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
import { Link } from "react-router";
import Navbar from "./Navbar";

function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/75 backdrop-blur-md py-2.5 transition-all duration-300 shadow-xs">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Left */}
                        <div className="flex items-center gap-4">
                            <Grip className="size-5 text-muted-foreground hover:text-foreground transition-all duration-300 hover:rotate-90 cursor-pointer" />

                            {/* Logo */}
                            <Link to={"/"} className="group/logo">
                                <div className="flex items-center gap-1.5">
                                    <img
                                        className="size-8 transition-transform duration-500 ease-out group-hover/logo:rotate-12 group-hover/logo:scale-110"
                                        src={logo}
                                        alt="FlowBoard"
                                    />
                                    <span className="font-extrabold text-xl bg-linear-to-r from-primary to-cyan-500 bg-clip-text text-transparent tracking-tight">
                                        FlowBoard
                                    </span>
                                </div>
                            </Link>

                            {/* Navbar */}
                            <Navbar />

                            {/* Action */}
                            <Button
                                size="lg"
                                className="min-w-[120px] hover:bg-primary/5 hover:text-primary hover:border-primary transition-all duration-300"
                            >
                                Create +
                            </Button>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-2">
                            {/* Search Input */}
                            <Field className="max-w-sm">
                                <InputGroup className="bg-background/50">
                                    <InputGroupInput
                                        id="inline-start-input"
                                        placeholder="Search..."
                                        className="placeholder:text-foreground/50 text-foreground"
                                    />
                                    <InputGroupAddon align="inline-start">
                                        <SearchIcon className="size-[1.1rem] text-foreground/60 group-focus-within/input-group:text-primary transition-colors duration-300" />
                                    </InputGroupAddon>
                                </InputGroup>
                            </Field>
                            {/* Mode Select */}
                            <ModeToggle />
                            {/* Bell */}
                            <Button
                                size="icon-lg"
                                variant="outline"
                                className="hover:bg-primary/5 hover:text-primary hover:border-primary transition-all duration-300 text-foreground/75 rounded-full"
                            >
                                <BellIcon className="size-[1.2rem]" />
                            </Button>

                            {/* Help */}
                            <Button
                                size="icon-lg"
                                variant="outline"
                                className="hover:bg-primary/5 hover:text-primary hover:border-primary transition-all duration-300 text-foreground/75 rounded-full"
                            >
                                <BadgeQuestionMark className="size-[1.2rem]" />
                            </Button>

                            {/* Avatar */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="shadcn"
                                            />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="mt-2"
                                    align="end"
                                >
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
