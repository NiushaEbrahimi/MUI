import './App.css'
import FlipCart from "./components/FlipCart";
import CardInput from "./components/cardInput";
import { Container,Box } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import Header from "./components/Header"

function App() {
  const [value, setValue] = useState([39, 80]);
  const [cardNumber,setCardNumber] =useState(['6221', '0612', '' , '']);
  const [expirationDate, setExpirationDate] = useState(['','']);
  const [cvvNumber, setCvvNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const [radioColor,setRadioColor] = useState("pink");
  const containerRef = useRef(null)
  const didUnpin = useRef(false)

  useEffect(()=>{
    console.log(darkTheme)
    if(darkTheme){
      document.querySelector("body").classList.add("dark-mode");
    }else{
      document.querySelector("body").classList.remove("dark-mode");
    }
  },[darkTheme])

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      const start = 0.01 * vh            // start moving at 20vh
      const duration = 1.4 * vh         // movement spans 1.5vh of scroll
      const end = start + duration
      const y = window.scrollY

      if (!containerRef.current) return

      const el = containerRef.current

      const startTranslate = 55
      const endTranslate = 15

      const startSkew = -20 
      const endSkew = 0 

      const startScale = 1
      const endScale = 1.5

      const pin = () => {
        el.style.position = 'fixed'
        el.style.top = '45vh'
        el.style.left = `${endTranslate}vw`
        didUnpin.current = false
      }

      const unpin = () => {
        if (!didUnpin.current) {
          const docTop = el.getBoundingClientRect().top + window.scrollY
          el.style.position = 'absolute'
          el.style.top = `${docTop}px`
          el.style.left = `${endTranslate}vw`
          el.style.transform = `translateX(0vw) skewX(${endSkew}deg) scale(${endScale})`
          didUnpin.current = true
        }
      }

      const delta = startTranslate - endTranslate
      if (y < start) {
        pin()
        el.style.transform = `translateX(${delta}vw) skewX(${startSkew}deg) scale(${startScale})`
        return
      }

      if (y >= start && y <= end) {
        pin()
        let p = (y - start) / duration
        p = Math.max(0, Math.min(1, p))
        const translateVw = delta * (1 - p)
        const skew = startSkew - p * (startSkew - endSkew)
        const scale = startScale + p * (endScale - startScale)
        el.style.transform = `translateX(${translateVw}vw) skewX(${skew}deg) scale(${scale})`
        return
      }

      if (y > end) {
        unpin()
        return
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  
  return (
    <div style={{width : "100%" , position : "relative" , display:"flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
      <Header darkTheme={darkTheme} setDarkTheme = {setDarkTheme}></Header>
      <FlipCart containerRef={containerRef} value={value} cardNumber={cardNumber} cvvNumber={cvvNumber} expirationDate={expirationDate} cardHolder={cardHolder} radioColor={radioColor}/>
      <Box sx={{minWidth:"80vw", display : "flex" , flexDirection : "row" , justifyContent : "center" , alignItems : "center" , mt : "5vh" , minHeight : "100vh", padding : "1vh 10vw "}}>
        <div style={{ padding: 24, display: "flex", flex :1,flexDirection :"column"}}>
          <h1>Make your own credit card</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, reprehenderit deserunt sequi illo quia molestiae eligendi minus eius quas magni tenetur non iusto. Similique inventore possimus quo vitae qui rem? </p>
        </div>
        <div style={{ padding: 24, display: "flex", gap: 24 , flex :1, position : "relative"}}>
          <div className='shadow'></div>
        </div>
      </Box>
      <Box sx={{height : "30vh"}}></Box>
      <Box sx={{maxWidth:"90vw", display : "flex" , flexDirection : "row" , mt : "5vh" , minHeight : "100vh" }}>
        <div style={{ padding: 24, display: "flex", flex :1, justifyContent : "center", alignItems : "center"}}>
          
        </div>
        <div style={{padding: 24, display: "flex", flex :1}}>
          <CardInput value={value} setValue={setValue} cardNumber={cardNumber} setCardNumber={setCardNumber} cvvNumber={cvvNumber} setCvvNumber={setCvvNumber} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder}
            radioColor={radioColor} setRadioColor={setRadioColor}
          />
        </div>
      </Box>
      <Container sx={{height : "100vh"}}></Container>
      <Container sx={{height : "100vh"}}></Container>

    </div>
  );
}

export default App
