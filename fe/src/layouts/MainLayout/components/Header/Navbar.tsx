import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { menuConfig } from "./config";

function Navbar() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
                {menuConfig.map((menu, index) => (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger>
                            {menu.trigger}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-90 p-2 grid gap-1">
                                {menu.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <NavigationMenuLink
                                            asChild
                                            className="group/item relative flex flex-col items-start justify-center gap-1 select-none rounded-lg p-3 outline-none transition-all duration-300 hover:bg-primary/5 border border-transparent hover:border-primary/10 hover:translate-x-1 hover:shadow-xs pl-3 hover:pl-5 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:rounded-r-full before:bg-primary before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-out"
                                        >
                                            <Link to={item.to}>
                                                <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors flex items-center gap-1">
                                                    {item.title}
                                                    <span className="inline-block opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-primary text-xs font-bold">
                                                        →
                                                    </span>
                                                </div>
                                                <p className="line-clamp-2 text-xs text-muted-foreground leading-normal">
                                                    {item.description}
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Navbar;
