import React, { useState } from "react";
import { Typography, IconButton, TextField, Grid } from "@mui/material";
import { Edit, Check, Close } from "@mui/icons-material";
import { IUpdateGroceryItemInput } from "@/types";

interface EditableTitleProps {
  initialValue: string;
  isBought: boolean;
  handleUpdate: (body: IUpdateGroceryItemInput) => void;
}

export const EditableTitle: React.FC<EditableTitleProps> = ({
  initialValue,
  isBought,
  handleUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleSave = () => {
    handleUpdate({ name: value });
    setIsEditing(false);
  };

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        {isEditing ? (
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            autoFocus
          />
        ) : (
          <Typography
            variant="h6"
            sx={{
              textDecoration: isBought ? "line-through" : "none",
            }}
          >
            {value}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isEditing ? (
          <>
            <IconButton onClick={handleSave}>
              <Check />
            </IconButton>
            <IconButton onClick={() => setIsEditing(false)}>
              <Close />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={() => setIsEditing(true)}>
            <Edit />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};
