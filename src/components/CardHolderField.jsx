import { TextField } from "@mui/material";

export default function CardHolderField({ cardHolder, setCardHolder }) {
  return (
    <TextField
      label="Card Holder"
      variant="outlined"
      value={cardHolder}
      onChange={(e) => setCardHolder(e.target.value)}
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
  );
}   