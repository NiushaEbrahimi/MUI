import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from '@mui/icons-material/Share';
import { styled, Card, CardActions, IconButton, useColorScheme, Skeleton } from "@mui/material";
import FlipCart from "./FlipCart";
import { Link } from 'react-router-dom';
import { LikedContext } from "../context/LikedProvider";
import { useContext } from "react";

const AllTemplates = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
}));


function CardTemplate({cards,loading}) {
  const {mode,_} = useColorScheme();
  const {likedCards,toggle} = useContext(LikedContext);

  if (loading) {
    return (
      <AllTemplates sx={{gap: {xs:'5px',md:'20px'},}} id="templates">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            sx={{
              minWidth: "20vw",
              display: "flex",
              flexDirection: "column",
              p: { xs: 2, md: 3 },
              borderRadius: "1rem",
            }}
          >
            <Skeleton
              variant="rounded"
              animation="wave"
              width="320px"
              height={180}
            />

            <CardActions disableSpacing sx={{display:"flex",gap:"10px"}}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
            </CardActions>
          </Card>
        ))}
      </AllTemplates>
    );
  }
  return (
    <AllTemplates sx={{gap: {xs:'5px',md:'20px'},}} id="templates">
      {cards.map((card) => {
        const isLiked = likedCards[card.id] || false;

        return (
          <Card 
            key={card.id} 
            sx={{ 
              minWidth: "20vw", 
              display:"flex", 
              flexDirection:"column", 
              p:{xs:2,md:3}, 
              borderRadius:"1rem" ,
              bgcolor: `${mode==="system"?"white":mode==="light"?"white":"var(--color-dark-light-form-background)"}`,
            }}
          >
            <Link to={`/cards/${card.id}`}>
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
              <IconButton onClick={() => {toggle(card.id)}}>
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