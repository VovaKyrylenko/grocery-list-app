import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { IUpdateGroceryItemInput } from "@/types";

interface GroceryAmountControlsProps {
  amount: number;
  handleUpdate: (body: IUpdateGroceryItemInput) => void;
}

export const GroceryAmountControls: React.FC<GroceryAmountControlsProps> = ({
  amount,
  handleUpdate,
}) => {
  const handleDecrease = () => {
    handleUpdate({ amount: amount - 1 });
  };

  const handleIncrease = () => {
    handleUpdate({ amount: amount + 1 });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <IconButton
        aria-label="decrease"
        onClick={handleDecrease}
        sx={{ color: "#FF6F61" }}
      >
        <RemoveCircleOutline />
      </IconButton>
      <Typography variant="body1" color="text.secondary">
        {amount}
      </Typography>
      <IconButton
        aria-label="increase"
        onClick={handleIncrease}
        sx={{ color: "#70C1B3" }}
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
