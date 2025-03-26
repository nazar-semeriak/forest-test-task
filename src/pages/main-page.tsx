import ButtonLink from "@/components/ui/button-link";

export default function MainPage() {
  return (
    <nav className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col gap-2 w-full sm:w-fit">
        <ButtonLink href="/login">Login</ButtonLink>
        <ButtonLink href="/sign-up">Registration</ButtonLink>
      </div>

      <div className="w-full sm:w-fit">
        <ButtonLink href="/orders" className="font-bold">
          Orders
        </ButtonLink>
      </div>
    </nav>
  );
}
