import { Box } from "@mui/material";
import styles from "../assets/css/cardInput.module.css";
import CardSlider from "./CardSlider";
import CardNumberParts from "./CardNumberParts";
import ExpirationSelects from "./ExpirationSelects";
import CvvField from "./CvvField";
import CardHolderField from "./CardHolderField";
import CardColorPicker from "./CardColorPicker"

export default function CardInput(props) {
  return (
    <Box
      sx={{
        p: 6,
        border: "1px rgba(0,0,0,0.2) solid",
        borderRadius: "1rem",
        bgcolor: "white",
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
      }}
      className={styles.input_container}
    >
      <Box sx={{ display: "flex" }}>
        <CardNumberParts
          cardNumber={props.cardNumber}
          setCardNumber={props.setCardNumber}
        />
      </Box>

      <Box sx={{display : "flex" , justifyContent : "center" , alignItems : "center" , mt : "5vh"}}>
        <CardColorPicker
          radioColor={props.radioColor}
          setRadioColor={props.setRadioColor}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <CardSlider value={props.value} setValue={props.setValue} />
      </Box>

      <Box sx={{ display: "flex" , justifyContent : "space-around" }}>
        <Box sx={{ mt: 2 }}>
          <ExpirationSelects
            expirationDate={props.expirationDate}
            setExpirationDate={props.setExpirationDate}
          />
        </Box>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CvvField
            cvvNumber={props.cvvNumber}
            setCvvNumber={props.setCvvNumber}
          />
          <CardHolderField
            cardHolder={props.cardHolder}
            setCardHolder={props.setCardHolder}
          />
        </Box>
      </Box>
    </Box>
  );
}
