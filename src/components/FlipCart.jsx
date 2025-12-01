import { styled } from "@mui/material/styles";
import { Box,Fade } from "@mui/material";
import { useEffect, useState } from "react";
import "../assets/css/FlipCart.css";

const Root = styled(Box)({
  perspective: "1000px",
  width: 320,
  height: 180,
  "&:hover .flipInner": {
    transform: "rotateY(180deg)",
  },
});

const Inner = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
});

const Side = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  borderRadius: 12,
  overflow: "hidden",
  backfaceVisibility: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
});

const Front = styled(Side)({
  pointer : "cursor",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
});

const Back = styled(Side)({
  transform: "rotateY(180deg)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
});

const colors = {
  "amber": "255, 236, 179",
  "darkBlue": "28, 27, 93",
  "purple": "106, 27, 154",
  "pink": "173, 20, 87",
  "aqua": "92, 235, 223"
};


export default function  FlipCart({containerRef,value , cardNumber , cvvNumber , expirationDate , cardHolder , radioColor}) {
  const [rgbaColor,setRgbaColor] = useState("")

  useEffect(() => {
    setRgbaColor(colors[radioColor]);
  }, [radioColor]);


  return (
    <Root ref={containerRef} className="container">
      <Inner className="flipInner">
        <Front
          sx={{
            background: `linear-gradient(135deg, rgba(${rgbaColor}, ${value[1] / 100}) 0%, rgba(7, 53, 114, ${value[0] / 100}) 100%)`,
            color: radioColor === "amber" || radioColor === "aqua" ? "#10093fff" : "white",
          }}
        >
          <Box sx={{ p: 2, display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "space-between", gap: 3, width: "100%", height: "100%", boxSizing: "border-box"}}>
            <Box 
              sx={{ background: "linear-gradient(135deg, #ddccf0ff 0%, #d1e9f5ff 44%, #f8ece7ff 100%)", width: "15%", height: "55%", borderRadius : "0.8rem", position : "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "65%",
                  height: "55%",
                  borderRadius: "0.8rem",
                  top: "50%",
                  left: "50%", 
                  transform: "translate(-50%, -50%)", 
                  border : "4px solid rgba(128, 128, 128, 0.1)"
                }
              }} 
            />
            <Box sx={{ width: "10%", height: "10%" }}>bank</Box>
          </Box>
          <Box sx={{ p: 2, display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "space-between", gap: 3, width: "100%", height: "100%", boxSizing: "border-box"}}>
            <Box sx={{ width: "10%", height: "10%" }}>{cardNumber[0]}</Box>
            <Box sx={{ width: "10%", height: "10%" }}>{cardNumber[1]}</Box>
            <Box sx={{ width: "10%", height: "10%" }}>{cardNumber[2]}</Box>
            <Box sx={{ width: "10%", height: "10%" }}>{cardNumber[3]}</Box>
          </Box>
          <Box sx={{ p: 2, display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "space-between", gap: 3, width: "100%", height: "100%", boxSizing: "border-box"}}>
            <Box>{cvvNumber}</Box>
            <Box>{cardHolder}</Box>
            <Box>{expirationDate[0]} / {expirationDate[1]}</Box>
          </Box>
        </Front>
        <Back>
          <Box sx={{ width : "100%" , height : "3vh" , fontSize : "0.7rem" , textAlign:"start" , ml : "3vw" , mt :"2vh" }}>DS020817</Box>
          <Box sx={{ width : "100%" , height : "7vh" , bgcolor:"black" }}></Box>
        </Back>
      </Inner>
    </Root>
  );
}