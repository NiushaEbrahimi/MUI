import { Container, Button, Icon, Typography, Box } from "@mui/material";
import AssistantNavigationIcon from '@mui/icons-material/AssistantNavigation';
import CardTemplate from "./CardTemplate"
import { useContext, useState, useEffect } from "react";
import { LikedContext } from "../context/LikedProvider";
import { useNavigate } from "react-router-dom";
import FlipCart from "./FlipCart";
import "../assets/css/cardRotateAnimation.css"

export default function LikedCards({cards}){    
    const {likedCards,_} = useContext(LikedContext);
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (Object.keys(likedCards).length===0){
        return(
            <Container sx={{p:8 , mt :10 , width : "100%" , height: "85vh" , display : "flex", justifyContent:"center", gap :"1rem" }}>

                <Box sx={{ flex: 1 , display: "flex", height:"100%", flexDirection: "column", justifyContent: "center", gap: "1rem" }}>
                    <div>
                        <Typography variant="h4" fontWeight={700}>
                            You have not liked any card yet.
                        </Typography>
                    </div>
                    <div style={{ display : "flex" , gap : "1rem" , flexDirection : "column"}}>
                        <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.2 }}>
                            Look for your favorite cards in templates.
                        </Typography>
                        <div>
                            <Button 
                                onClick={()=>{navigate("/#templates")}} 
                                color="black" 
                                variant="outlined"
                                sx={{
                                    borderRadius:"1rem",
                                    display: "flex",
                                    gap:"8px",
                                }}
                            >
                                <Icon>
                                    <AssistantNavigationIcon />
                                </Icon>
                                <Typography variant="p">
                                    templates
                                </Typography>
                            </Button>
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        position: "relative",
                        height: "100%",
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            height: "50%",
                            width: "50%",
                        }}
                    >
                        <div className={`card ${mounted ? "card1" : ""}`}>
                            <FlipCart
                                cardNumber={["6221", "0612", "3956", "4869"]}
                                cvvNumber={299}
                                expirationDate={["7", "12"]}
                                cardHolder={"niusha"}
                                radioColor = {"pink"}
                            />
                        </div>

                        <div className={`card ${mounted ? "card2" : ""}`}>
                            <FlipCart
                                cardNumber={["6221", "0612", "3956", "4869"]}
                                cvvNumber={299}
                                expirationDate={["7", "12"]}
                                cardHolder={"niusha"}
                                radioColor = {"aqua"}
                                // rgba2Color = {"#4b2e39"}
                            />
                        </div>

                        <div className={`card ${mounted ? "card3" : ""}`}>
                            <FlipCart
                                cardNumber={["6221", "0612", "3956", "4869"]}
                                cvvNumber={299}
                                expirationDate={["7", "12"]}
                                cardHolder={"niusha"}
                                radioColor = {"#ffc8dd"}
                                rgba2Color = {"#bde0fe"}
                            />
                        </div>
                    </Box>
                </Box>
            </Container>
        )
    }
    const cardsNew = cards.filter(card => !!likedCards[card.id]);
    return(
        <Container sx={{p:8 , mt :10 , width : "100%" , height: "85vh" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
            <CardTemplate cards={ cardsNew} loading={false}></CardTemplate>
        </Container>
    )
} 

