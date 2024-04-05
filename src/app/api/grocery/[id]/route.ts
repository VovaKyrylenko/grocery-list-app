import { authOptions } from "@/lib/auth";
import {
  deleteGroceryByIdFromDatabase,
  updateGroceryByIdInDatabase,
} from "@/services/";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Handle PUT request to update a grocery item
export async function PUT(request: Request, context: any): Promise<Response> {
  try {
    const { params } = context;
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json("User email not found", { status: 400 });
    }

    const data = await request.json();
    if (!data) {
      return NextResponse.json("Data is required", { status: 400 });
    }

    const updatedGrocery = await updateGroceryByIdInDatabase(params.id, data);

    return NextResponse.json(updatedGrocery, { status: 200 });
  } catch (error) {
    console.error("Error updating grocery item:", error);
    return NextResponse.json("Failed to update grocery item", { status: 500 });
  }
}

// Handle DELETE request to delete a grocery item
export async function DELETE(
  request: Request,
  context: any
): Promise<Response> {
  try {
    const { params } = context;
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json("User email not found", { status: 400 });
    }

    await deleteGroceryByIdFromDatabase(params.id);

    return NextResponse.json(
      { message: "Grocery item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting grocery item:", error);
    return NextResponse.json("Failed to delete grocery item", { status: 500 });
  }
}
