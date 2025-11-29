import './App.css'
import FlipCart from "./components/FlipCart";
import CardInput from "./components/cardInput";
import { Container } from '@mui/material';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState([30, 80]);
  const [cardNumber,setCardNumber] =useState(['6221', '0612', '3456', '7890']);
  const [expirationDate, setExpirationDate] = useState(['1404','12']);
  const [cvvNumber, setCvvNumber] = useState('123');
  return (
    <Container>
      <div style={{ padding: 24, display: "flex", gap: 24 }}>
        <FlipCart value={value} cardNumber={cardNumber} cvvNumber={cvvNumber} expirationDate={expirationDate}/>
      </div>
      <div style={{ padding: 24, display: "flex", gap: 24 }}>
        <CardInput value={value} setValue={setValue} cardNumber={cardNumber} setCardNumber={setCardNumber} cvvNumber={cvvNumber} setCvvNumber={setCvvNumber} expirationDate={expirationDate} setExpirationDate={setExpirationDate}/>
      </div>
    </Container>
  );
}

export default App
