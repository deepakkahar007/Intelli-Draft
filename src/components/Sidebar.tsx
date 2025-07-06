import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// 52:56 video timeline

const Sidebar = () => {
  const MenuOption = () => (
    <>
      <NewDocumentButton />
      {/* my document */}
      {/* list ... */}

      {/* shared with me */}
      {/* list ... */}
    </>
  );

  return (
    <div className="p-2  md:p-5 relative bg-zinc-800">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>
                <MenuOption />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">
        <MenuOption />
      </div>
    </div>
  );
};

export default Sidebar;
