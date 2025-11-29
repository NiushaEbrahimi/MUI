import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function ExpirationSelects({ expirationDate, setExpirationDate }) {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" , flexDirection : "column"}}>
      <FormControl sx={{ minWidth: "8vw" }}>
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={String(expirationDate[1])}
          label="Month"
          onChange={(e) => {
            const val = String(e.target.value);
            setExpirationDate((prev = []) => {
              const next = [...prev];
              next[1] = val;
              return next;
            });
          }}
        >
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"12"}>12</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: "8vw" }}>
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={String(expirationDate[0])}
          label="Year"
          onChange={(e) => {
            const val = String(e.target.value);
            setExpirationDate((prev = []) => {
              const next = [...prev];
              next[0] = val;
              return next;
            });
          }}
        >
          <MenuItem value={"1404"}>1404</MenuItem>
          <MenuItem value={"1405"}>1405</MenuItem>
          <MenuItem value={"1406"}>1406</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}