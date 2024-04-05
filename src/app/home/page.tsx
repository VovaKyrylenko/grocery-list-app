import { getServerSession } from "next-auth";
import { GroceryManager } from "@/components/home";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/sign-in");
  }

  return <GroceryManager />;
}
