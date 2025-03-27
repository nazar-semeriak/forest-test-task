import FormLayout from "@/components/auth-forms/form-layout";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <FormLayout>
      <Outlet />
    </FormLayout>
  );
}
