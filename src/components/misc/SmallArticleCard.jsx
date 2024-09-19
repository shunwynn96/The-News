import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Skeleton from "@mui/joy/Skeleton";

const SmallArticleCard = (props) => {
  return (
    <>
      <Card variant="outlined">
        <CardOverflow>
          <AspectRatio ratio="2">
            <Skeleton loading={props.loading} variant="overlay">
              <img src={props.articleImage} loading="lazy" alt="No Image" />
            </Skeleton>
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Typography level="title-md">
            <Skeleton loading={props.loading}>{props.articleTitle}</Skeleton>
          </Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              <Skeleton loading={props.loading}>
                {props.articleSource.name}
              </Skeleton>
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              <Skeleton loading={props.loading}>1 hour ago</Skeleton>
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </>
  );
};

export default SmallArticleCard;
