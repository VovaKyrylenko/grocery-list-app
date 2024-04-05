"use client";
import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";

export const NavBar = () => {
  const { data: session } = useSession();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GroceryManager
        </Typography>
        {session?.user && (
          <>
            <Typography variant="subtitle1" sx={{ mr: 2 }}>
              {session.user.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => signOut()}
            >
              SignOut
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
