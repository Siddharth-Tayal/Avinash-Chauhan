import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ img, title, text }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className=" text-justify"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}
