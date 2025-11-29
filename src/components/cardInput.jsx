import { Box, Container, TextField, Slider, InputLabel, MenuItem, FormControl, Select, OutlinedInput } from "@mui/material";

function MinimumDistanceSlider({ value, setValue }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value}
        // Slider onChange signature: (event, newValue) => ...
        onChange={(e, newValue) => {
          setValue(newValue);
          console.log("slider", newValue);
        }}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}

export default function CardInput({ value, setValue, cardNumber, setCardNumber, cvvNumber, setCvvNumber, expirationDate, setExpirationDate }) {
  return (
    <Container sx={{ height: "100vh" }}>
      <Container>
        <TextField label={cardNumber[0]} variant="filled" disabled />
        <TextField label={cardNumber[1]} variant="filled" disabled />

        {/* use TextField props for controlled inputs */}
        <TextField
          label="3rd Part"
          value={cardNumber[2]}
          onChange={(e) => {
            const v = e.target.value;
            setCardNumber((prev) => {
              const next = Array.isArray(prev) ? [...prev] : [...(prev || [])];
              next[2] = v;
              return next;
            });
          }}
        />

        <TextField
          label="4th Part"
          value={cardNumber[3]}
          onChange={(e) => {
            const v = e.target.value;
            setCardNumber((prev) => {
              const next = Array.isArray(prev) ? [...prev] : [...(prev || [])];
              next[3] = v;
              return next;
            });
          }}
        />
      </Container>

      <Container>
        <MinimumDistanceSlider value={value} setValue={setValue} />
      </Container>

      <Container>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <FormControl sx={{minWidth:"5vw"}}>
            <InputLabel id="month-select-label">Month</InputLabel>
            <Select
              labelId="month-select-label"
              id="month-select"
              value={String(expirationDate[1])}      // ensure same type (string)
              label="Month"
              onChange={(e) => {
                const val = String(e.target.value);
                setExpirationDate((prev) => {
                  const next = Array.isArray(prev) ? [...prev] : [...(prev || [])];
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

          <FormControl>
            <InputLabel id="year-select-label">Year</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={String(expirationDate[0])}
              label="Year"
              onChange={(e) => {
                const val = String(e.target.value);
                setExpirationDate((prev) => {
                  const next = Array.isArray(prev) ? [...prev] : [...(prev || [])];
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
      </Container>

      <Container>
        <TextField
          label="CVV"
          variant="outlined"
          value={cvvNumber}
          onChange={(e) => setCvvNumber(e.target.value)}
        />
      </Container>
    </Container>
  );
}











