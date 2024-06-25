import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
function DemoVideos() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Demo Videos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] pt-[50px]">
          <iframe
            width={"350"}
            height="465"
            src="https://www.youtube.com/embed/RJQfo2rRhhk?si=hF82gunvXTa-Ot4i?controls=1"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="  md:flex hidden flex-col items-center justify-center gap-[15px]">
            <iframe
              width={"350"}
              height="225"
              src="https://www.youtube.com/embed/RJQfo2rRhhk?si=hF82gunvXTa-Ot4i?controls=1"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <iframe
              width={"350"}
              height="225"
              src="https://www.youtube.com/embed/RJQfo2rRhhk?si=hF82gunvXTa-Ot4i?controls=1"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>{" "}
          <div className=" flex flex-wrap  md:hidden items-center justify-center gap-[15px]">
            <iframe
              //   height="225"
              src="https://www.youtube.com/embed/RJQfo2rRhhk?si=hF82gunvXTa-Ot4i?controls=1"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <iframe
              //   height="225"
              src="https://www.youtube.com/embed/RJQfo2rRhhk?si=hF82gunvXTa-Ot4i?controls=1"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default DemoVideos;
