import { TextField } from "@mui/material";

export default function CardHolderField({ cardHolder, setCardHolder }) {
  return (
    <TextField
      label="Card Holder"
      variant="outlined"
      value={cardHolder}
      onChange={(e) => setCardHolder(e.target.value)}
    />
  );
}   