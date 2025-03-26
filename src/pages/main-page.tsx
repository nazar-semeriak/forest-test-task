import ButtonLink from "@/components/ui/button-link";

export default function MainPage() {
  return (
    <nav className="flex flex-col gap-8 ">
      <div className="flex flex-col gap-2">
        <ButtonLink href="/login">Login</ButtonLink>
        <ButtonLink href="/sign-up">Registration</ButtonLink>
      </div>

      <div>
        <ButtonLink href="/orders" className="font-bold">
          Orders
        </ButtonLink>
      </div>
    </nav>
  );
}
