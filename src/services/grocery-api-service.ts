import axios, { AxiosResponse } from "axios";

// Fetches all groceries from the API
export async function fetchAllGroceries(): Promise<AxiosResponse> {
  try {
    return await axios.get("/api/grocery");
  } catch (error) {
    console.error("Error fetching groceries:", error);
    throw error;
  }
}

// Creates a new grocery item with the provided name and amount
export async function createGroceryItem(
  name: string,
  amount: number
): Promise<AxiosResponse> {
  try {
    return await axios.post("/api/grocery", {
      name,
      amount,
    });
  } catch (error) {
    console.error("Error creating grocery item:", error);
    throw error;
  }
}

// Updates an existing grocery item with the provided id and data
export async function updateGroceryItem(
  id: number,
  data: any
): Promise<AxiosResponse> {
  try {
    return await axios.put(`/api/grocery/${id}`, data);
  } catch (error) {
    console.error("Error updating grocery item:", error);
    throw error;
  }
}

// Deletes the grocery item with the provided id
export async function deleteGroceryItem(id: number): Promise<AxiosResponse> {
  try {
    return await axios.delete(`/api/grocery/${id}`);
  } catch (error) {
    console.error("Error deleting grocery item:", error);
    throw error;
  }
}
