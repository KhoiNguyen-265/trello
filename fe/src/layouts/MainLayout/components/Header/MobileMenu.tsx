import Logo from "@/components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Grip, Menu, SearchIcon } from "lucide-react";
import { Link } from "react-router";
import { menuConfig } from "./config";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="-ml-2 rounded-lg hover:bg-muted lg:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="" side="left">
        {/* Header */}
        <SheetHeader>
          <SheetTitle className="flex items-center gap-4 text-left">
            <Grip className="size-5 cursor-pointer" />
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <div className="-mt-4 pr-2 pl-4">
          <div className="flex flex-col gap-2">
            {/* Row 1 */}
            <div className="flex flex-col gap-3">
              {/* Action (shown only on mobile when desktop header button is hidden) */}
              <Button
                size="lg"
                className="w-full transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary sm:hidden"
              >
                Create +
              </Button>

              {/* Search Input (shown only on mobile/tablet when desktop search is hidden) */}
              <Field className="md:hidden">
                <InputGroup className="border-white/50 bg-background/50">
                  <InputGroupInput
                    id="mobile-search-input"
                    placeholder="Search..."
                    className="text-foreground placeholder:text-foreground/50"
                  />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon className="size-[1.1rem] text-foreground/60 transition-colors duration-300 group-focus-within/input-group:text-primary" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>

            {/* Row 2 */}
            <Accordion
              type="multiple"
              className="max-h-[90vh] w-full overflow-y-auto pr-2"
            >
              {menuConfig.map((menu, index) => (
                <AccordionItem
                  key={index}
                  value={index.toString()}
                  className="border-b border-border/50"
                >
                  <AccordionTrigger className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:bg-muted/50 hover:text-primary hover:no-underline data-[state=open]:bg-primary/5 data-[state=open]:text-primary">
                    {menu.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3">
                    <ul className="flex flex-col gap-1.5 py-1">
                      {menu.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            className="group/item relative flex flex-col gap-0.5 rounded-lg p-2.5 pl-3 no-underline! transition-all duration-300 outline-none before:absolute before:top-2.5 before:bottom-2.5 before:left-0 before:w-1 before:scale-y-0 before:rounded-r-full before:bg-primary before:transition-all before:duration-300 before:ease-out hover:bg-primary/5 hover:pl-5 hover:before:scale-y-100 focus-visible:bg-primary/5 focus-visible:pl-5 focus-visible:before:scale-y-100"
                            to={item.to}
                          >
                            <h3 className="text-sm font-semibold text-foreground transition-colors group-hover/item:text-primary group-focus/item:text-primary">
                              {item.title}
                            </h3>
                            <p className="line-clamp-2 text-xs leading-normal text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
