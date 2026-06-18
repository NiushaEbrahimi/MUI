import { createContext, useEffect, useState } from "react";
import { MOCK_API } from "../hooks/useCards";

const ContextCards = createContext(null);

export default function CardProvider({ children }) {
  const [cards,setCards] = useState([])
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
      {children}
    </ContextCards.Provider>
  );
}
export {ContextCards};