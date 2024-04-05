import prisma from "@/lib/db";
import { ICreateGroceryItemInput, IGroceryItem } from "@/types";

// Retrieves all groceries for a specific user from the database
export async function getUserGroceriesFromDatabase(
  userEmail: string
): Promise<IGroceryItem[]> {
  return await prisma.groceryItem.findMany({
    where: { userEmail },
    select: { id: true, name: true, amount: true, bought: true },
  });
}

// Deletes a grocery item from the database by its ID
export async function deleteGroceryByIdFromDatabase(
  groceryId: number
): Promise<IGroceryItem | null> {
  return await prisma.groceryItem.delete({ where: { id: Number(groceryId) } });
}

// Updates a grocery item in the database with the provided data
export async function updateGroceryByIdInDatabase(
  groceryId: number,
  updatedGrocery: Partial<IGroceryItem>
): Promise<IGroceryItem | null> {
  return await prisma.groceryItem.update({
    where: { id: Number(groceryId) },
    data: updatedGrocery,
  });
}

// Adds a new grocery item for a specific user to the database
export async function createGroceryForUserInDatabase(
  userEmail: string,
  groceryData: ICreateGroceryItemInput
): Promise<IGroceryItem> {
  return await prisma.groceryItem.create({
    data: { ...groceryData, userEmail },
    select: { id: true, name: true, amount: true, bought: true },
  });
}
