import React from "react";
import { Card, CardCover, CardContent, Typography } from "@mui/joy";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const HeadlineCard = (props) => {
  return (
    <>
      <Card sx={{ height: "276px" }}>
        <CardCover>
          <img src={props.articleImage} loading="lazy" alt="article image" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {props.articleTitle}
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
            {props.articleSource.name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default HeadlineCard;
