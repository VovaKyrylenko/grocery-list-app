import { ICreateUserInput, IUser } from "@/types";
import prisma from "@/lib/db";

// Adds a new user to the database
export const addUserToDatabase = async ({
  email,
  password,
  name,
}: ICreateUserInput): Promise<IUser> => {
  return await prisma.user.create({ data: { email, password, name } });
};

// Retrieves a user from the database by email
export const getUserByEmailFromDatabase = async (
  email: string
): Promise<IUser | null> => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
