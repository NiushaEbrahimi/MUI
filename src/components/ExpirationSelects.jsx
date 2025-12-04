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
          onChange={(e) =>
            setExpirationDate((prev) => {
              const next = [...prev];
              next[1] = String(e.target.value);
              return next;
            })
          }
        >
          {Array.from({ length: 12 }, (_, i) => {
            const month = String(i + 1);
            return (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            );
          })}
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