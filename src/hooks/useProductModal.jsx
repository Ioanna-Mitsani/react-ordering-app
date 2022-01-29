import { useState, useEffect } from "react";
import React from "react";

export const useProductModal = () => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setQuantity(1);
  };

  const handleClickAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleClickSub = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return {
    open,
    quantity,
    handleClickOpen,
    handleClose,
    handleClickAdd,
    handleClickSub,
  };
};
