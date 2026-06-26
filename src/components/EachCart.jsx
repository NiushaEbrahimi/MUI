import { Container, Box } from "@mui/material";
import FlipCart from "./FlipCart";

export default function EachCart({card}){
    return(
        <Container sx={{mt : "10vh",display:"flex",justifyContent : "center", textAlign:"center", alignItems : "center", minHeight : "80vh"}}>
            <Box sx={{flex : 1}}>
                <h2>info about the card</h2>
            </Box>
            <Box sx={{flex : 1}}>
                <FlipCart 
                    widthInput={"30vw"}
                    heightInput={"35vh"}
                    value = {[39,80]} 
                    cardNumber={card.card_number}
                    cvvNumber={card.cvv}
                    expirationDate={[card.date_expiration.year, card.date_expiration.month]}
                    cardHolder={card.card_holder}
                    radioColor = {card.colors.firstColor}
                    rgba2Color = {card.colors.secondColor}
                    color = {card.colors.textColor}
                    />
            </Box>
        </Container>
    );
};

{/*
import { Container, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FlipCart from "./FlipCart";
import CardInput from "./cardInput";

function normalizeCardNumber(value) {
  if (Array.isArray(value)) {
    return value;
  }

  const digits = String(value ?? "").replace(/\D/g, "").slice(0, 16);
  const parts = [];

  for (let i = 0; i < 4; i += 1) {
    parts.push(digits.slice(i * 4, i * 4 + 4) || "");
  }

  return parts;
}

export default function EachCart({ card }) {
  const [value, setValue] = useState([39, 80]);
  const [cardNumber, setCardNumber] = useState(normalizeCardNumber(card?.card_number));
  const [expirationDate, setExpirationDate] = useState([
    card?.date_expiration?.year ?? "",
    card?.date_expiration?.month ?? "",
  ]);
  const [cvvNumber, setCvvNumber] = useState(card?.cvv ?? "");
  const [cardHolder, setCardHolder] = useState(card?.card_holder ?? "");
  const [radioColor, setRadioColor] = useState(card?.colors?.firstColor ?? "pink");

  return (
    <Container maxWidth="lg" sx={{ mt: "10vh", py: 4, minHeight: "80vh" }}>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={4} alignItems="center">
        <Box flex={1} width="100%" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h4" fontWeight={700}>
            Card details
          </Typography>
          <Typography color="text.secondary">
            Update the card appearance and preview it live.
          </Typography>
          <Box display="flex" justifyContent="center">
            <FlipCart
              widthInput={"min(100%, 340px)"}
              heightInput={"200px"}
              value={value}
              cardNumber={cardNumber}
              cvvNumber={cvvNumber}
              expirationDate={expirationDate}
              cardHolder={cardHolder}
              radioColor={radioColor}
              rgba2Color={card?.colors?.secondColor ?? "7, 53, 114"}
              color={card?.colors?.textColor ?? "#ffffff"}
            />
          </Box>
        </Box>

        <Box flex={1} width="100%">
          <CardInput
            value={value}
            setValue={setValue}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            cvvNumber={cvvNumber}
            setCvvNumber={setCvvNumber}
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
            cardHolder={cardHolder}
            setCardHolder={setCardHolder}
            radioColor={radioColor}
            setRadioColor={setRadioColor}
          />
        </Box>
      </Stack>
    </Container>
  );
};    
    
*/}