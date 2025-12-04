import { TextField } from "@mui/material";

export default function CvvField({ cvvNumber, setCvvNumber }) {
  return (
    <TextField
      label="CVV"
      variant="outlined"
      value={cvvNumber}
      onChange={(e) => setCvvNumber(e.target.value)}
      inputProps={{ maxLength: 4 }}
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