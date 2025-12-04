import React from "react";
import { Box, TextField } from "@mui/material";

export default function CardNumberParts({
  cardNumber = ["", "", "", ""],
  setCardNumber,
  }) {
  const updatePart = (index) => (e) => {
    const value = e.target.value;
    setCardNumber((prev = []) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        alignItems: "center",
      }}
    >
      {/* First 4 fields */}
      {[0, 1, 2, 3].map((i) => (
        <TextField
          key={i}
          label={
            i === 0
              ? cardNumber[0] || "Part 1"
              : i === 1
              ? cardNumber[1] || "Part 2"
              : i === 2
              ? "3rd Part"
              : "4th Part"
          }
          inputProps={{ maxLength: 4 }}
          value={cardNumber[i] || ""}
          onChange={i > 1 ? updatePart(i) : undefined}
          variant="filled"
          disabled={i < 2}
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              height: "60px", 
              borderRadius: "8px",
              fontSize: "1.1rem",
              borderBottom : "none !important"
            },
            "& .MuiFormLabel-root": {
              fontSize: "1rem",
              borderBottom : "none"
            },
          }}
          
        />
      ))}
    </Box>
  );
}
