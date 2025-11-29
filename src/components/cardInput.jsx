import { Box, Container, TextField } from "@mui/material";
import styles from "../assets/css/cardInput.module.css";

import CardSlider from "./CardSlider";
import CardNumberParts from "./CardNumberParts";
import ExpirationSelects from "./ExpirationSelects";
import CvvField from "./CvvField";
import CardHolderField from "./CardHolderField";

export default function CardInput(props) {
  return (
    <Container
      sx={{
        p: 2,
        height: "100%",
        border: "1px rgba(0,0,0,0.2) solid",
        borderRadius: "1rem",
      }}
      className={styles.input_container}
    >
      <Container sx={{ display: "flex" }}>
        <CardNumberParts cardNumber={props.cardNumber} setCardNumber={props.setCardNumber} />
      </Container>

      <Container sx={{ mt: 2 }}>
        <CardSlider value={props.value} setValue={props.setValue} />
      </Container>

      <Container sx={{display : "flex"}}>
        <Container sx={{ mt: 2}}>
          <ExpirationSelects
            expirationDate={props.expirationDate}
            setExpirationDate={props.setExpirationDate}
          />
        </Container>

        <Container sx={{ mt: 2 , display: "flex",gap : 2, alignItems: "center" , flexDirection : "column"}}>
          <CvvField cvvNumber={props.cvvNumber} setCvvNumber={props.setCvvNumber} />
          <CardHolderField cardHolder={props.cardHolder} setCardHolder={props.setCardHolder} />
        </Container>
      </Container>

    </Container>
  );
}











