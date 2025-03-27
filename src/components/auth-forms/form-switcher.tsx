import { useLocation } from "react-router-dom";
import ButtonLink from "../ui/button-link";
import clsx from "clsx";

export default function FormSwitcher() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-1 p-1 rounded-full bg-accent/20 min-w-0 w-full sm:max-w-fit">
      <ButtonLink
        href="/auth/login"
        className={clsx(
          pathname.endsWith("/login")
            ? "bg-secondary"
            : "bg-accent/0 text-primary-foreground hover:bg-secondary/10"
        )}
      >
        Login
      </ButtonLink>
      <ButtonLink
        href="/auth/sign-up"
        className={clsx(
          pathname.endsWith("/sign-up")
            ? "bg-secondary"
            : "bg-accent/0 text-primary-foreground hover:bg-secondary/10"
        )}
      >
        Registration
      </ButtonLink>
    </div>
  );
}
