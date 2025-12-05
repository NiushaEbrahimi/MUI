import { Container } from "@mui/material";
import CardTemplate from "./CardTemplate"

export default function LikedCards({cards,likedCards,setLikedCards}){    
    if (Object.keys(likedCards).length===0){
        return(
            <Container sx={{p:8 , mt :10 , width : "100%" , height: "85vh" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
                <div><h1>nothing</h1></div>
            </Container>
        )
    }
    const cardsNew = cards.filter(card => !!likedCards[card.id]);
    return(
        <Container sx={{p:8 , mt :10 , width : "100%" , height: "85vh" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
            <CardTemplate cards={ cardsNew} likedCards={likedCards} setLikedCards={setLikedCards}></CardTemplate>
        </Container>
    )
} 

