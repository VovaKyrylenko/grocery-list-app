import { hashPassword } from "@/lib/bcrypt";
import { addUserToDatabase, getUserByEmailFromDatabase } from "@/services/";
import { IUser } from "@/types";
import { NextResponse } from "next/server";

// Handle POST request to create a new user
export async function POST(request: Request): Promise<Response> {
  try {
    const { email, password, name }: IUser = await request.json();

    const existingUser: IUser | null = await getUserByEmailFromDatabase(email);
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({
          user: null,
          message: "User with such email already exists",
        }),
        { status: 409 }
      );
    }
    const hashedPassword: string = await hashPassword(password);
    const newUser: IUser | null = await addUserToDatabase({
      email,
      password: hashedPassword,
      name,
    });

    return new NextResponse(
      JSON.stringify({
        user: newUser,
        message: "User was successfully created",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: `Internal server error: ${error}` }),
      { status: 500 }
    );
  }
}
