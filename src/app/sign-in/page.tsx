import { getServerSession } from "next-auth";
import { SignInForm } from "@/components/sign-in/";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 70px)",
      }}
    >
      <SignInForm />
    </div>
  );
}
