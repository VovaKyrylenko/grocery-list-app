"use client";
import { Button, Container, TextField, Typography, Link } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IUser } from "@/types";

// Schema for form input validation
const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    try {
      const response = await axios.post("/api/sign-up", data);

      if (response.status === 201) {
        toast.success("Sign up successful! Now sign in, please!");
        console.log("here");
        router.push("/sign-in");
      } else {
        toast.error("Failed to sign up:", response.data.me);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Sign up failed:", error);
        toast.error(`Failed to sign up. ${error?.response?.data?.message}`);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          {...register("name")}
          error={!!errors?.name}
          helperText={errors?.name?.message}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          {...register("email")}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          {...register("password")}
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
        Already have an account? <Link href="/sign-in">Sign In</Link>
      </Typography>
    </Container>
  );
};
