import { authOptions } from "@/lib/auth";
import {
  createGroceryForUserInDatabase,
  getUserGroceriesFromDatabase,
} from "@/services/";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Handle POST request to create a new grocery item
export async function POST(request: Request): Promise<Response> {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json("User email not found", { status: 400 });
    }

    const data = await request.json();
    if (!data.name || !data.amount) {
      return NextResponse.json("Name and amount are required", { status: 400 });
    }

    const newGrocery = await createGroceryForUserInDatabase(
      session.user.email,
      data
    );

    return NextResponse.json(newGrocery, { status: 201 });
  } catch (error) {
    console.error("Error creating new grocery item:", error);
    return NextResponse.json("Failed to create grocery item", { status: 500 });
  }
}

// Handle GET request to fetch user groceries
export async function GET(): Promise<Response> {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json("User email not found", { status: 400 });
    }

    const userGroceries = await getUserGroceriesFromDatabase(
      session.user.email
    );

    return NextResponse.json(userGroceries, { status: 200 });
  } catch (error) {
    console.error("Error fetching user purchases:", error);
    return NextResponse.json("Failed to fetch user purchases", { status: 500 });
  }
}
