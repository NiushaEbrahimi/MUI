import React from "react";
import { Box, TextField } from "@mui/material";

export default function CardNumberParts({ cardNumber = ["", "", "", ""], setCardNumber }) {
  const updatePart = (index) => (e) => {
    const v = e.target.value;
    setCardNumber((prev = []) => {
      const next = [...prev];
      next[index] = v;
      return next;
    });
  };

  return (
    <Box sx={{ display: "flex", gap: 1, width: "100%", alignItems: "center" }}>
      <TextField label={cardNumber[0]} variant="filled" disabled />
      <TextField label={cardNumber[1]} variant="filled" disabled />
      <TextField label="3rd Part" value={cardNumber[2] ?? ""} onChange={updatePart(2)} />
      <TextField label="4th Part" value={cardNumber[3] ?? ""} onChange={updatePart(3)} />
    </Box>
  );
}