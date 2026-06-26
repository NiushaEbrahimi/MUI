import { createContext, useEffect, useState } from "react";
import { MOCK_API } from "../hooks/useCards";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ContextCards = createContext(null);

export default function CardProvider({ children, themeMode = 'light' }) {
  const [cards,setCards] = useState([])
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    cssVariables: true,
  });
  useEffect(() => {
    async function fetchCards() {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/cards/');
          if (!response.ok) {
              throw new Error("Failed to load cards");
          }

          const data = await response.json();
          setCards(data);
        } 
        catch {
          setCards(MOCK_API)
        }
    }
    fetchCards();
    
  }, []);
  return (
    <ContextCards.Provider value={cards}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ContextCards.Provider>
  );
}
export {ContextCards};