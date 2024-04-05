import bcrypt from "bcrypt";

// Hashes the given password using bcrypt
export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword: string = await bcrypt.hash(password, 10);
  return hashedPassword;
};

// Compares the given password with the hashed password using bcrypt
export const comparePasswords = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const match: boolean = await bcrypt.compare(password, hashedPassword);
  return match;
};
