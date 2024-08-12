import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";

import style from "../../styles/modules/SmallArticleCard.module.scss";

const SmallArticleCard = (props) => {
  return (
    <>
      <Card
        className={style.smallArticleCard}
        variant="outlined"
        sx={{ width: 320 }}
      >
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={props.articleImage} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">{props.articleTitle}</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              {props.articleSource.name}
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              1 hour ago
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </>
  );
};

export default SmallArticleCard;
