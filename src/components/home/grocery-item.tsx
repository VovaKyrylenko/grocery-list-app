import React from "react";
import {
  Card,
  CardContent,
  Box,
  ListItem,
  Checkbox,
  Grid,
  IconButton,
} from "@mui/material";
import { IGroceryItem, IUpdateGroceryItemInput } from "@/types";
import { useUpdateGrocery } from "@/hooks/useUpdateGrocery";
import { EditableTitle } from "./editable-title";
import { GroceryAmountControls } from "./grocery-amount-controller";
import { Delete } from "@mui/icons-material";
import { useDeleteGrocery } from "@/hooks/useDeleteGrocery";

interface GroceryItemProps {
  grocery: IGroceryItem;
}

export const GroceryItem: React.FC<GroceryItemProps> = ({ grocery }) => {
  const { mutate: updateGrocery } = useUpdateGrocery();
  const { mutate: deleteGrocery } = useDeleteGrocery();

  const handleUpdateGrocery = (data: IUpdateGroceryItemInput) => {
    updateGrocery({ id: grocery.id, data });
  };

  return (
    <ListItem key={grocery.id}>
      <Card
        sx={{
          width: "100%",
          backgroundColor: "#f5f5f5",
          borderRadius: 10,
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={1}>
              <Checkbox
                checked={grocery.bought}
                onChange={() =>
                  handleUpdateGrocery({ bought: !grocery.bought })
                }
                color="primary"
              />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EditableTitle
                  isBought={grocery.bought}
                  initialValue={grocery.name}
                  handleUpdate={handleUpdateGrocery}
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <GroceryAmountControls
                amount={grocery.amount}
                handleUpdate={handleUpdateGrocery}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                aria-label="delete"
                onClick={() => deleteGrocery(grocery.id)}
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ListItem>
  );
};
