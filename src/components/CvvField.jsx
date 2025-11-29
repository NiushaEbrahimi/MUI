import { TextField } from "@mui/material";

export default function CvvField({ cvvNumber, setCvvNumber }) {
  return (
    <TextField
      label="CVV"
      variant="outlined"
      value={cvvNumber}
      onChange={(e) => setCvvNumber(e.target.value)}
      inputProps={{ maxLength: 4 }}
    />
  );
}