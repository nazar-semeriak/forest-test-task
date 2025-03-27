import { Currency } from "@/lib/types/currency";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

export default function CurrencyDropdown() {
  const [selectedCurrency, setSelectedCurrency] = useState(Currency.USD);

  const handleSelectCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} className="rounded-full w-20">
          <span className="inline-flex items-center gap-1">
            <DollarSign />
            {selectedCurrency}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-fit rounded-2xl">
        <DropdownMenuItem className="p-0">
          <Button
            variant={"ghost"}
            onClick={() => {
              handleSelectCurrency(Currency.USD);
            }}
          >
            <span className="inline-flex items-center gap-1">
              <DollarSign className="text-primary" />
              USD
            </span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <Button
            variant={"ghost"}
            onClick={() => {
              handleSelectCurrency(Currency.UAH);
            }}
          >
            <span className="inline-flex items-center gap-1">
              <DollarSign className="text-primary" />
              UAH
            </span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <Button
            variant={"ghost"}
            onClick={() => {
              handleSelectCurrency(Currency.EUR);
            }}
          >
            <span className="inline-flex items-center gap-1">
              <DollarSign className="text-primary" />
              EUR
            </span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
