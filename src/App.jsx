import './App.css'
import FlipCart from "./components/FlipCart";
import CardInput from "./components/cardInput";
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from "./components/Header"

function App() {
  const [value, setValue] = useState([39, 80]);
  const [cardNumber,setCardNumber] =useState(['6221', '0612', '' , '']);
  const [expirationDate, setExpirationDate] = useState(['','']);
  const [cvvNumber, setCvvNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const [radioColor,setRadioColor] = useState("pink");

  useEffect(()=>{
    console.log(darkTheme)
    if(darkTheme){
      document.querySelector("body").classList.add("dark-mode");
    }else{
      document.querySelector("body").classList.remove("dark-mode");
    }
  },[darkTheme])

  
  return (
    <Container sx={{m:0,p:0 , width : "100vw" , position : "relative" , display:"flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
      <Header darkTheme={darkTheme} setDarkTheme = {setDarkTheme}></Header>
      <Container sx={{display : "flex" , flexDirection : "row" , mt : "5vh"}}>
        <div style={{ padding: 24, display: "flex", gap: 24 }}>
          <FlipCart value={value} cardNumber={cardNumber} cvvNumber={cvvNumber} expirationDate={expirationDate} cardHolder={cardHolder} radioColor={radioColor}/>
        </div>
        <div style={{ padding: 24, display: "flex", gap: 24 }}>
          <CardInput value={value} setValue={setValue} cardNumber={cardNumber} setCardNumber={setCardNumber} cvvNumber={cvvNumber} setCvvNumber={setCvvNumber} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder}
            radioColor={radioColor} setRadioColor={setRadioColor}
          />
        </div>
      </Container>
      <Container sx={{height : "100vh"}}></Container>
      <Container sx={{height : "100vh"}}></Container>
      <Container sx={{height : "100vh"}}></Container>

    </Container>
  );
}

export default App
