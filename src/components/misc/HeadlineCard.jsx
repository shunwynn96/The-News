import React, { useEffect, useState } from "react";
import {
  Card,
  CardCover,
  CardContent,
  Typography,
  Button,
  Sheet,
} from "@mui/joy";
import LaunchIcon from "@mui/icons-material/Launch";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import style from "../../styles/modules/HeadlineCard.module.scss";

const HeadlineCard = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {screenWidth > 1200 && (
        <Sheet className={style.description}>
          <p>{props.articleContent.split("...", 1)}...</p>
          <Button
            className={style.linkButton}
            variant="soft"
            endDecorator={<LaunchIcon />}
            color="primary"
          >
            <a href={props.articleLink} target="_blank">
              Continue Reading
            </a>
          </Button>
        </Sheet>
      )}
    </>
  );
};

export default HeadlineCard;
