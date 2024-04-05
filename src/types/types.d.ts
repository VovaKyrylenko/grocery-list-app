export interface IGroceryItem {
  id: number;
  name: string;
  amount: number;
  bought: boolean;
}

export interface ICreateGroceryItemInput {
  name: string;
  amount: number;
}

export interface IUpdateGroceryItemInput {
  name?: string;
  amount?: number;
  bought?: boolean;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserInput {
  name: string;
  email: string;
  password: string;
}
