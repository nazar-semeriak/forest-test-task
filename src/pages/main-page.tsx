import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/button-link";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    if (token && email) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token, email]);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    alert("Log out success")
  };

  return (
    <nav className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col gap-2 w-full sm:w-fit">
        {isAuthenticated ? (
          <>
            <p className="text-white text-[16px] font-bold">
              Authorised as {email}
            </p>
            <Button
              type="button"
              variant="outline"
              className="rounded-full cursor-pointer"
              onClick={logOut}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <ButtonLink href="/auth/login">Login</ButtonLink>
            <ButtonLink href="/auth/sign-up">Registration</ButtonLink>
          </>
        )}
      </div>

      <div className="w-full sm:w-fit">
        <ButtonLink href="/orders" className="font-bold">
          Orders
        </ButtonLink>
      </div>
    </nav>
  );
}
