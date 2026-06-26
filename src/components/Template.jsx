import { Container,Typography} from "@mui/material";
import CardTemplate from "./CardTemplate";
import { ContextCards } from "../context/Provider";
import { useContext } from "react";

function Template() {
    const cards = useContext(ContextCards);
    return(
        <Container sx={{width : "100%",p: {xs:"0px"}}}>
            <Typography variant="h2">Templates</Typography>
            <CardTemplate cards={cards}></CardTemplate>
        </Container>
    )
}
export default Template;
