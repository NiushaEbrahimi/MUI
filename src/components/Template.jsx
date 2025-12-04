import { Container,Typography} from "@mui/material";
import CardTemplate from "./CardTemplate";
function Template({cards}) {

    return(
        <Container sx={{width : "100%"}}>
            <Typography variant="h2">Templates</Typography>
            <CardTemplate cards={cards}></CardTemplate>
        </Container>
    )
}
export default Template;
