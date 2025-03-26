import { X } from "lucide-react";
import FormSwitcher from "./form-switcher";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col p-3 gap-4 bg-accent/10 rounded-xl w-full sm:max-w-1/2 lg:max-w-1/3">
      <div className="flex items-center gap-4">
        <FormSwitcher />
        <Link to={"/"}>
          <X className="h-8 w-8 min-w-8 bg-secondary rounded-full p-1 cursor-pointer hover:bg-accent/80 transition-colors" />
        </Link>
      </div>
      {children}
      <div className="flex flex-col gap-4 items-center text-primary-foreground">
        <div className="flex flex-col items-center gap-2">
          <h2>Use social networks</h2>
          <ul className="flex items-center gap-2">
            <li>
              <Button variant={"icon"} size={"icon"} className="relative">
                <img src="/src/assets/google.svg" alt="google auth"  />
              </Button>
            </li>
            <li>
              <Button variant={"icon"} size={"icon"}>
                <img src="/src/assets/apple.svg" alt="apple auth" />
              </Button>
            </li>
            <li>
              <Button variant={"icon"} size={"icon"}>
                <img src="/src/assets/facebook.svg" alt="facebook auth" />
              </Button>
            </li>
            <li>
              <Button variant={"icon"} size={"icon"}>
                <img src="/src/assets/discord.svg" alt="discord auth" />
              </Button>
            </li>
            <li>
              <Button variant={"icon"} size={"icon"}>
                <img src="/src/assets/telegram.svg" alt="telegram auth" />
              </Button>
            </li>
          </ul>
        </div>
        {pathname.endsWith("/sign-up") && (
          <Link
            to={""}
            className="text-accent/20 underline hover:text-accent transition-colors"
          >
            Forgot password?
          </Link>
        )}
      </div>
    </div>
  );
}
