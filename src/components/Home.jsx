import FlipCart from "./FlipCart";
import CardInput from "./cardInput";
import { Container, Box } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import Template from "./Template";

export default function Home({ cards,likedCards,setLikedCards }) {
  const [value, setValue] = useState([39, 80]);
  const [cardNumber, setCardNumber] = useState(["6221", "0612", "", ""]);
  const [expirationDate, setExpirationDate] = useState(["", ""]);
  const [cvvNumber, setCvvNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const [radioColor, setRadioColor] = useState("pink");

  const containerRef = useRef(null);
  const didUnpin = useRef(false);
  const originalTop = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      originalTop.current = rect.top + window.scrollY;
    }

    const onScroll = () => {
      const vh = window.innerHeight;
      const start = 0.01 * vh;
      const duration = 1.37 * vh;
      const end = start + duration;
      const y = window.scrollY;

      if (!containerRef.current) return;
      const el = containerRef.current;

      const startTranslate = 57;
      const endTranslate = 22;

      const startSkew = -20;
      const endSkew = 0;

      const startScale = 1;
      const endScale = 1.5;

      const pin = () => {
        el.style.position = "fixed";
        el.style.top = "45vh";
        el.style.left = `${endTranslate}vw`;
        didUnpin.current = false;
      };

      const unpin = () => {
        if (!didUnpin.current) {
          el.style.position = "absolute";

          const finalTop = originalTop.current + (start + duration);
          el.style.top = `${finalTop}px`;

          el.style.left = `${endTranslate}vw`;
          el.style.transform = `translateX(0vw) skewX(${endSkew}deg) scale(${endScale})`;

          didUnpin.current = true;
        }
      };

      const delta = startTranslate - endTranslate;

      if (y < start) {
        pin();
        el.style.transform = `translateX(${delta}vw) skewX(${startSkew}deg) scale(${startScale})`;
        return;
      }

      if (y >= start && y <= end) {
        pin();
        let p = (y - start) / duration;
        p = Math.max(0, Math.min(1, p));

        const translateVw = delta * (1 - p);
        const skew = startSkew - p * (startSkew - endSkew);
        const scale = startScale + p * (endScale - startScale);

        el.style.transform = `translateX(${translateVw}vw) skewX(${skew}deg) scale(${scale})`;
        return;
      }

      if (y > end) {
        unpin();
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
    return(
        <div style={{width : "100%" , position : "relative" , display:"flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
        <div  ref={containerRef} className="container">
          <FlipCart value={value} cardNumber={cardNumber} cvvNumber={cvvNumber} expirationDate={expirationDate} cardHolder={cardHolder} radioColor={radioColor}/>
        </div>
        <Container sx={{ display : "flex" , flexDirection : "row" , justifyContent : "center" , alignItems : "center" , mt : "5vh" , minHeight : "100vh", padding : "1vh 10vw "}}>
          <div style={{ padding: 24, display: "flex", flex :1,flexDirection :"column"}}>
            <h1>Make your own credit card</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, reprehenderit deserunt sequi illo quia molestiae eligendi minus eius quas magni tenetur non iusto. Similique inventore possimus quo vitae qui rem? </p>
          </div>
          <div style={{ padding: 24, display: "flex", gap: 24 , flex :1, position : "relative"}}>
            <div className='shadow'></div>
          </div>
        </Container>
        <Box sx={{height : "30vh"}}></Box>
        <Container sx={{ display : "flex" , flexDirection : "row" , mt : "5vh" , minHeight : "100vh" }}>
          <div style={{ padding: 24, display: "flex", flex :1, justifyContent : "center", alignItems : "center"}}>
          </div>
          <div style={{flex : 1,display : "flex" , justifyContent : "center",alignItems : "center"}}>
            <CardInput value={value} setValue={setValue} cardNumber={cardNumber} setCardNumber={setCardNumber} cvvNumber={cvvNumber} setCvvNumber={setCvvNumber} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder}
              radioColor={radioColor} setRadioColor={setRadioColor}
            />
          </div>
        </Container>
        <Box sx={{height : "30vh"}}></Box>
        <Box sx={{maxWidth:"90vw",height : "100vh",minWidth :"80vw"}}>
          <Template cards={cards} likedCards={likedCards} setLikedCards={setLikedCards}/>
        </Box>
        <Container sx={{height : "20vh"}}></Container>
      </div>
    )
}