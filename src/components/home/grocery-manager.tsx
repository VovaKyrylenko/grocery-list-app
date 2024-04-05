"use client";
import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import { AddGroceryItemDialog } from "./grocery-create-dialog";
import AddIcon from "@mui/icons-material/Add";
import { GroceryList } from "./grocery-list";

export const GroceryManager = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, mt: 4 }}>
        <Button
          size="large"
          variant="contained"
          onClick={() => setOpenAddDialog(true)}
          startIcon={<AddIcon />}
        >
          Add Item
        </Button>
      </Box>
      <GroceryList />
      <AddGroceryItemDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
      />
    </Container>
  );
};
