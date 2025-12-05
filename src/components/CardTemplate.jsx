import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from '@mui/icons-material/Share';
import { styled,Card,CardActions,IconButton } from "@mui/material";
import FlipCart from "./FlipCart";
import { Link } from 'react-router-dom';

const AllTemplates = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
}));


function CardTemplate({ cards , likedCards , setLikedCards }) {

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],   // toggle only THIS card
    }));
  };

  return (
    <AllTemplates>
      {cards.map((card) => {
        const isLiked = likedCards[card.id] || false;

        return (
          <Card key={card.id} sx={{ minWidth: "20vw", display:"flex", flexDirection:"column", p:3 }}>
            <Link to={`http://localhost:5173/cards/${card.id}`}>
              <FlipCart
                value={[39, 80]}
                cardNumber={card.card_number}
                cvvNumber={card.cvv}
                expirationDate={[card.date_expiration.year, card.date_expiration.month]}
                cardHolder={card.card_holder}
                radioColor={card.colors.firstColor}
                rgba2Color={card.colors.secondColor}
                color={card.colors.textColor}
              />
            </Link>

            <CardActions disableSpacing>
              <IconButton onClick={() => {toggleLike(card.id)}}>
                {isLiked ? (
                  <FavoriteIcon sx={{ color: "#ff7575" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ color: "#ff7575" }} />
                )}
              </IconButton>

              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </AllTemplates>
  );
}

export default CardTemplate;