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