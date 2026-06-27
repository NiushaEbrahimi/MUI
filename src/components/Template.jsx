import { Container,Typography} from "@mui/material";
import CardTemplate from "./CardTemplate";
import { useContext } from "react";
import { ContextCards } from "../context/Provider";

function Template() {
    const { cards, loading } = useContext(ContextCards);
    return(
        <Container sx={{width : "100%",p: {xs:"0px"}}}>
            <Typography variant="h2">Templates</Typography>
            <CardTemplate cards={cards} loading={loading}/>
        </Container>
    )
}
export default Template;
