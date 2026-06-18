import { Container,Typography} from "@mui/material";
import CardTemplate from "./CardTemplate";
function Template({likedCards,setLikedCards}) {

    return(
        <Container sx={{width : "100%",p: {xs:"0px"}}}>
            <Typography variant="h2">Templates</Typography>
            <CardTemplate likedCards={likedCards} setLikedCards={setLikedCards}></CardTemplate>
        </Container>
    )
}
export default Template;
