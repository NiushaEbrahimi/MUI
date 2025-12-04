import './App.css'
import { useEffect, useState } from 'react';
import Header from "./components/Header"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import EachCart from "./components/EachCart"

// TODO: make the form prettier
// TODO: dark mode

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [cards,setCards] = useState([]);

  useEffect(()=>{
    if(darkTheme){
      document.querySelector("body").classList.add("dark-mode");
    }else{
      document.querySelector("body").classList.remove("dark-mode");
    }
  },[darkTheme])

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
            catch (error) {
                console.error("Error fetching card templates:", error);
            }
        }
        fetchCards();
        
    }, []);
  
  

  return (
    <BrowserRouter>
      <Header darkTheme={darkTheme} setDarkTheme = {setDarkTheme}></Header>
      <Routes>
        <Route path="/" element={<Home cards={cards}/>}/>
        {cards.map((card)=>{
          return(<Route key={card.id} path={`cards/${card.id}`} element={<EachCart card={card}/>}/>)
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App
