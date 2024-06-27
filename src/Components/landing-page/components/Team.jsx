import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import Marquee from "react-fast-marquee";
import { Avatar } from "@mui/material";
export default function Team() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Meet the Team
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Box>

        <Marquee>
          <Stack
            direction="column"
            color="inherit"
            component={Card}
            spacing={1}
            useFlexGap
            sx={{
              p: 3,
              height: "100%",
              border: "1px solid",
              borderColor: "grey.800",
              background: "transparent",
              backgroundColor: "grey.900",
            }}
            className=" hover:bg-gray-700 w-[350px] ml-[15px] mr-[15px]"
          >
            <Box>
              <div className=" flex items-center justify-between">
                {" "}
                <img
                  className=" h-[80px] w-[80px] rounded-full"
                  src="data:image/jpeg;base64,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"
                />{" "}
                <div>
                  <Typography fontWeight="bold" gutterBottom>
                    Avinash Chauhan
                  </Typography>{" "}
                  <Typography fontWeight="medium" gutterBottom>
                    Founder and Director
                  </Typography>
                </div>
              </div>{" "}
            </Box>
            <div>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Avinash Chauhan is a distinguished choreographer and dance
                performer, serving as the Managing Director at PWOI. He earned
                the prestigious Best Choreographer Award at the 2023 HEIA.
                Avinash has also made significant contributions to the music
                industry with his production of acclaimed songs such as "Kamaal
                Hogya," "Pyaar Permanent," and "Splendor."
              </Typography>
            </div>
          </Stack>
          <Stack
            direction="column"
            color="inherit"
            component={Card}
            spacing={1}
            useFlexGap
            sx={{
              p: 3,
              height: "100%",
              border: "1px solid",
              borderColor: "grey.800",
              background: "transparent",
              backgroundColor: "grey.900",
            }}
            className=" hover:bg-gray-700 w-[350px] ml-[15px] mr-[15px]"
          >
            <Box>
              <div className=" flex items-center justify-between">
                {" "}
                <img
                  className=" h-[80px] w-[80px] rounded-full"
                  src="data:image/jpeg;base64,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"
                />{" "}
                <div>
                  <Typography fontWeight="bold" gutterBottom>
                    Vishwas Chauhan
                  </Typography>{" "}
                  <Typography fontWeight="medium" gutterBottom>
                    Founder and Director
                  </Typography>
                </div>
              </div>{" "}
            </Box>
            <div>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Vishwash Chauhan is an artist who displays theater, acting,
                direction and stand up comedy skills. Vishwash Chauhan is the
                finalist for The Great Indian Laughter Challenge, 2017. His
                tagline is Maa ka Lal, Haryana ka Kalu!. He is a rising star and
                working in many upcoming web series including live performances
                such as Web Series - Mere Yaar Ki Shaadi Season 1 & Mere Yaar Ki
                Shaadi Season 2
              </Typography>
            </div>
          </Stack>
          <Stack
            direction="column"
            color="inherit"
            component={Card}
            spacing={1}
            useFlexGap
            sx={{
              p: 3,
              height: "100%",
              border: "1px solid",
              borderColor: "grey.800",
              background: "transparent",
              backgroundColor: "grey.900",
            }}
            className=" hover:bg-gray-700 w-[350px] ml-[15px] mr-[15px]"
          >
            <Box>
              <div className=" flex items-center justify-between">
                {" "}
                <img
                  className=" h-[80px] w-[80px] rounded-full"
                  src="data:image/jpeg;base64,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"
                />{" "}
                <div>
                  <Typography fontWeight="bold" gutterBottom>
                    Avinash Chauhan
                  </Typography>{" "}
                  <Typography fontWeight="medium" gutterBottom>
                    Founder and Director
                  </Typography>
                </div>
              </div>{" "}
            </Box>
            <div>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Avinash Chauhan is a distinguished choreographer and dance
                performer, serving as the Managing Director at PWOI. He earned
                the prestigious Best Choreographer Award at the 2023 HEIA.
                Avinash has also made significant contributions to the music
                industry with his production of acclaimed songs such as "Kamaal
                Hogya," "Pyaar Permanent," and "Splendor."
              </Typography>
            </div>
          </Stack>
          <Stack
            direction="column"
            color="inherit"
            component={Card}
            spacing={1}
            useFlexGap
            sx={{
              p: 3,
              height: "100%",
              border: "1px solid",
              borderColor: "grey.800",
              background: "transparent",
              backgroundColor: "grey.900",
            }}
            className=" hover:bg-gray-700 w-[350px] ml-[15px] mr-[15px]"
          >
            <Box>
              <div className=" flex items-center justify-between">
                {" "}
                <img
                  className=" h-[80px] w-[80px] rounded-full"
                  src="data:image/jpeg;base64,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"
                />{" "}
                <div>
                  <Typography fontWeight="bold" gutterBottom>
                    Vishwas Chauhan
                  </Typography>{" "}
                  <Typography fontWeight="medium" gutterBottom>
                    Founder and Director
                  </Typography>
                </div>
              </div>{" "}
            </Box>
            <div>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Vishwash Chauhan is an artist who displays theater, acting,
                direction and stand up comedy skills. Vishwash Chauhan is the
                finalist for The Great Indian Laughter Challenge, 2017. His
                tagline is Maa ka Lal, Haryana ka Kalu!. He is a rising star and
                working in many upcoming web series including live performances
                such as Web Series - Mere Yaar Ki Shaadi Season 1 & Mere Yaar Ki
                Shaadi Season 2
              </Typography>
            </div>
          </Stack>
        </Marquee>
      </Container>
    </Box>
  );
}
