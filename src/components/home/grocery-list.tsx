import React from "react";
import { List, Typography, CircularProgress, Box } from "@mui/material";
import { GroceryItem } from "./grocery-item";
import { IGroceryItem } from "@/types";
import { useGroceries } from "@/hooks/useGroceries";

export const GroceryList = () => {
  const { data: groceries, isLoading } = useGroceries();

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!groceries || groceries.length === 0) {
    return (
      <Typography variant="body1" align="center">
        No groceries found.
      </Typography>
    );
  }

  return (
    <List>
      {groceries.map((grocery: IGroceryItem) => (
        <GroceryItem key={grocery.id} grocery={grocery} />
      ))}
    </List>
  );
};
