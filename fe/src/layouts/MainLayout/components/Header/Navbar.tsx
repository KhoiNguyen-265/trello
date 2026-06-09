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
      <NavigationMenuList className="ml-2 xl:ml-4 xl:gap-x-1.5">
        {menuConfig.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{menu.trigger}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-90 p-2">
                {menu.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <NavigationMenuLink
                      asChild
                      className="group/item relative flex flex-col items-start justify-center gap-1 rounded-lg border border-transparent p-3 pl-3 transition-all duration-300 outline-none select-none before:absolute before:top-2 before:bottom-2 before:left-0 before:w-1 before:scale-y-0 before:rounded-r-full before:bg-primary before:transition-transform before:duration-300 before:ease-out hover:translate-x-1 hover:border-primary/10 hover:bg-primary/5 hover:pl-5 hover:shadow-xs hover:before:scale-y-100"
                    >
                      <Link to={item.to}>
                        <div className="flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover/item:text-primary">
                          {item.title}
                          <span className="inline-block -translate-x-1 text-xs font-bold text-primary opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100">
                            →
                          </span>
                        </div>
                        <p className="line-clamp-2 text-xs leading-normal text-muted-foreground">
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
