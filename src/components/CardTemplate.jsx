import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from '@mui/icons-material/Share';
import { styled,Card,CardActions,IconButton } from "@mui/material";
import FlipCart from "./FlipCart";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const AllTemplates = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
}));


function CardTemplate({cards}) {
    const [liked, setLiked] = useState(false);
    
    return(
        <AllTemplates>
            {cards.map((card) => (
                <Card sx={{ minWidth: "20vw",display:"flex",justifyContent:"center",alignItems:"center" , flexDirection : "column" , p :3  }} key={card.id}>
                    <Link to={`cards/${card.id}`}>
                        <FlipCart 
                            value = {[39,80]} 
                            cardNumber={card.card_number}
                            cvvNumber={card.cvv}
                            expirationDate={[card.date_expiration.year, card.date_expiration.month]}
                            cardHolder={card.card_holder}
                            radioColor = {card.colors.firstColor}
                            rgba2Color = {card.colors.secondColor}
                            color = {card.colors.textColor}
                            />
                    </Link>
                    <CardActions disableSpacing>
                        {/* how to make this only for one element */}
                        <IconButton onClick={(e) => {
                            console.log(e.target)
                            setLiked(!liked)}}>
                            
                        {liked ? (
                            <FavoriteIcon sx={{ color: "#ff7575" }} />
                        ) : (
                            <FavoriteBorderIcon sx={{ color: "#ff7575" }} />
                        )}
                        </IconButton>

                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </AllTemplates>
    )
}
export default CardTemplate;