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
            <Box sx={{ opacity: "50%" }}>
              {" "}
              <Avatar
                sizes="large"
                src="https://www.instagram.com/p/CtrfWlFpmYu/"
              />
            </Box>
            <div>
              <Typography fontWeight="bold" gutterBottom>
                Avinash Chauhan
              </Typography>{" "}
              <Typography fontWeight="medium" gutterBottom>
                Founder and Director
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                "Our product effortlessly adjusts to your needs, boosting
                efficiency and simplifying your tasks." "Our product
                effortlessly adjusts to your needs, boosting efficiency and
                simplifying your tasks." "Our product effortlessly adjusts to
                your needs, boosting efficiency and simplifying your tasks.",
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
            <Box sx={{ opacity: "50%" }}>
              {" "}
              <Avatar
                sizes="large"
                src="https://www.instagram.com/p/CtrfWlFpmYu/"
              />
            </Box>
            <div>
              <Typography fontWeight="bold" gutterBottom>
                Vishwas Chauhan
              </Typography>{" "}
              <Typography fontWeight="medium" gutterBottom>
                Founder and Director
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                "Our product effortlessly adjusts to your needs, boosting
                efficiency and simplifying your tasks." "Our product
                effortlessly adjusts to your needs, boosting efficiency and
                simplifying your tasks." "Our product effortlessly adjusts to
                your needs, boosting efficiency and simplifying your tasks.",
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
            <Box sx={{ opacity: "50%" }}>
              {" "}
              <Avatar
                sizes="large"
                src="https://www.instagram.com/p/CtrfWlFpmYu/"
              />
            </Box>
            <div>
              <Typography fontWeight="bold" gutterBottom>
                Vishwas Chauhan
              </Typography>{" "}
              <Typography fontWeight="medium" gutterBottom>
                Founder and Director
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                "Our product effortlessly adjusts to your needs, boosting
                efficiency and simplifying your tasks." "Our product
                effortlessly adjusts to your needs, boosting efficiency and
                simplifying your tasks." "Our product effortlessly adjusts to
                your needs, boosting efficiency and simplifying your tasks.",
              </Typography>
            </div>
          </Stack>
        </Marquee>
      </Container>
    </Box>
  );
}
