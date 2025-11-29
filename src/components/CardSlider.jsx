import { Box, Slider } from "@mui/material";

export default function CardSlider({ value, setValue }) {
  return (
    <Box>
      0 - 100
      <Box>
        <Slider
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>
    </Box>
  );
}