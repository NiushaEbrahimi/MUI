import { Box, Slider ,Typography } from "@mui/material";

export default function CardSlider({ value, setValue }) {
  return (
    <Box sx={{mt : "3vh" , textAlign : "center"}}>
      <Typography variant="h5">Color Gradient</Typography>
      <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
        <Slider
          sx={{width : "70%"}}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>
    </Box>
  );
}