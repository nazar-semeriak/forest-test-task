import { X } from "lucide-react";
import FormSwitcher from "./form-switcher";
import { Link } from "react-router-dom";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col p-3 gap-4 bg-accent/10 rounded-xl w-full sm:max-w-1/3">
      <div className="flex flex-1 items-center gap-4">
        <FormSwitcher />
        <Link to={"/"}>
          <X className="h-8 w-8 min-w-8 bg-secondary rounded-full p-1 cursor-pointer hover:bg-accent/80 transition-colors" />
        </Link>
      </div>
      {children}
    </div>
  );
}
