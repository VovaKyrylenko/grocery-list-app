import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateGrocery } from "@/hooks/useCreateGrocery";
import { ICreateGroceryItemInput } from "@/types";

const schema = z.object({
  name: z.string().min(2),
  amount: z
    .union([
      z.number().positive("Amount must be positive"),
      z.string().refine(
        (val) => {
          const num = parseFloat(val);
          return !isNaN(num) && num > 0;
        },
        { message: "Amount must be a positive number" }
      ),
    ])
    .refine((val) => typeof val !== "string" || !isNaN(parseFloat(val)), {
      message: "Amount must be a number",
    }),
});

interface AddGroceryItemDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AddGroceryItemDialog: React.FC<AddGroceryItemDialogProps> = ({
  open,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateGroceryItemInput>({
    resolver: zodResolver(schema),
  });
  const { mutate: create } = useCreateGrocery();

  const onSubmit: SubmitHandler<ICreateGroceryItemInput> = (data) => {
    create(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Grocery Item</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="amount"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <TextField
                {...field}
                label="Amount"
                type="number"
                fullWidth
                margin="normal"
                error={!!errors.amount}
                helperText={errors.amount?.message}
              />
            )}
          />
        </form>
      </DialogContent>
      <DialogActions
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          color="primary"
        >
          Add
        </Button>
        <Button variant="outlined" onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
