import React, { useEffect, useState } from "react";
import {
  Card,
  CardCover,
  CardContent,
  Typography,
  Button,
  Sheet,
  Skeleton,
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
      <Card sx={{ height: "276px", width: "100%" }}>
        <CardCover>
          <Skeleton loading={props.loading} variant="overlay">
            <img src={props.articleImage} loading="lazy" alt="article image" />
          </Skeleton>
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            <Skeleton loading={props.loading}>{props.articleTitle}</Skeleton>
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
            <Skeleton loading={props.loading}>
              {props.articleSource.name}
            </Skeleton>
          </Typography>
        </CardContent>
      </Card>
      {screenWidth > 1100 && (
        <Sheet variant="soft" className={style.description}>
          <Typography>
            <Skeleton loading={props.loading}>
              {props.articleContent.split("...", 1)}...
            </Skeleton>
          </Typography>

          <Button
            className={style.linkButton}
            variant="soft"
            endDecorator={<LaunchIcon />}
            color="primary"
          >
            <Skeleton loading={props.loading}>
              <a href={props.articleLink} target="_blank">
                Continue Reading
              </a>
            </Skeleton>
          </Button>
        </Sheet>
      )}
    </>
  );
};

export default HeadlineCard;
