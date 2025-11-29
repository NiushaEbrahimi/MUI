import './App.css'
import FlipCart from "./components/FlipCart";
import CardInput from "./components/cardInput";
import { Container } from '@mui/material';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState([39, 80]);
  const [cardNumber,setCardNumber] =useState(['6221', '0612', '' , '']);
  const [expirationDate, setExpirationDate] = useState(['','']);
  const [cvvNumber, setCvvNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  return (
    <Container sx={{display : "flex" , flexDirection : "row"}}>
      <div style={{ padding: 24, display: "flex", gap: 24 }}>
        <FlipCart value={value} cardNumber={cardNumber} cvvNumber={cvvNumber} expirationDate={expirationDate} cardHolder={cardHolder}/>
      </div>
      <div style={{ padding: 24, display: "flex", gap: 24 }}>
        <CardInput value={value} setValue={setValue} cardNumber={cardNumber} setCardNumber={setCardNumber} cvvNumber={cvvNumber} setCvvNumber={setCvvNumber} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder}/>
      </div>
    </Container>
  );
}

export default App
