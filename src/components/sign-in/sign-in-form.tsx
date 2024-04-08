"use client";
import { Button, Container, TextField, Typography, Link } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<IUser> = async ({ email, password }) => {
    try {
      const signInData = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInData?.error) {
        toast.error("Failed to sign in. Please check your email and password.");
      } else {
        toast.success("Sign in successful! Welcome back!");
        router.push("/home");
      }
    } catch (error) {
      console.error("Sign in failed:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          Sign In
        </Button>
      </form>
      <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
        Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
      </Typography>
    </Container>
  );
};
