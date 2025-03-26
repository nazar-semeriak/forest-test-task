import { Lang } from "@/lib/types/lang";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(Lang.EN);

  const handleSelectLanguage = (lang: Lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"secondary"} className="rounded-full w-20">
          {selectedLanguage}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-fit rounded-2xl">
        <DropdownMenuItem className="p-0">
          <Button
            variant={"ghost"}
            onClick={() => {
              handleSelectLanguage(Lang.EN);
            }}
          >
            EN
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <Button
            variant={"ghost"}
            onClick={() => {
              handleSelectLanguage(Lang.UA);
            }}
          >
            UA
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
