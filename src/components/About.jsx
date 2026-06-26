import FlipCart from "./FlipCart";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useId } from "react";

function ProjectFAQ() {
  const id = useId();

  const faqs = [
    {
      title: "Why did you use MUI?",
      text:
        "I used Material UI to build a cleaner and faster interface with ready-made components, consistent styling, and responsive behavior. It helped me focus more on the app experience rather than spending too much time on custom UI details.",
    },
    {
      title: "Why is this project for practice?",
      text:
        "This project is mainly a practice-focused React and full-stack learning project. I used it to improve my understanding of state management, component structure, routing, API integration, and UI design.",
    },
    {
      title: "What about the backend and deployment?",
      text:
        "The project includes a backend, but it is not currently running on Vercel because Vercel is mainly for the frontend. The backend is intended for practice and local development, so the live deployment focuses on the frontend experience.",
    },
  ];
  const{mode,_} = useColorScheme();
  return (
    <Stack spacing={1.5}>
      {faqs.map((item, index) => (
        <Accordion key={item.title} defaultExpanded={index === 0} disableGutters elevation={0} sx={{ backgroundColor: `${mode==="system"?"rgba(255,255,255,0.9)":mode==="light"?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.2)"}`, border: "1px solid", borderColor: "rgba(0,0,0,0.2)", borderRadius: 3 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel${index + 1}-content`}
            id={`${id}-panel${index + 1}-header`}
          >
            <Typography fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}

export default function About() {
    const {mode,_} = useColorScheme();
    return (
        <Box
        sx={{
            minHeight: "120vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 8 },
        }}
        >
        <Box
            elevation={0}
            sx={{
            width: "100%",
            maxWidth: "1200px",
            marginTop:"5vh",
            //   borderRadius: 4,
            //   border: (theme) => `1px solid ${theme.palette.divider}`,
            //   background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
            }}
        >
            <Stack direction={{ xs: "column", lg: "row" }} spacing={4} alignItems="center">
            <Box flex={1} display="flex" flexDirection="column" justifyContent="center" gap="1rem">
                <Typography variant="h5" fontWeight={700}>
                    A polished React practice project with UI, routing, and API concepts
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.2 }}>
                    This project was built to strengthen frontend skills while exploring a modern UI experience with reusable components, animated card visuals, and a simple FAQ-style presentation for portfolio use.
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>                
                    <Chip label="React" color="primary" variant="outlined" sx={{backgroundColor : `${mode==="dark" ? "" : mode==="light"?"rgba(255,255,255,0.6)":""}`}}/>
                    <Chip label="MUI" color="secondary" variant="outlined" sx={{backgroundColor : `${mode==="dark" ? "": "rgba(255,255,255,0.6)"}`}}/>
                    <Chip label="Practice Project" variant="outlined" sx={{backgroundColor : `${mode==="dark" ? "": "rgba(255,255,255,0.6)"}`}}/>
                    <Chip label="Backend Included" variant="outlined" sx={{backgroundColor : `${mode==="dark" ? "": "rgba(255,255,255,0.6)"}`}}/>
                </Stack>
                <FlipCart
                cardNumber={["6221", "0612", "3956", "4869"]}
                cvvNumber={299}
                expirationDate={["7", "12"]}
                cardHolder={"niusha"}
                radioColor={"pink"}
                />
            </Box>

            <Box flex={1} width="100%">
                <ProjectFAQ />
            </Box>
            </Stack>
        </Box>
        </Box>
    );
}