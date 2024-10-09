import React from "react";
import Tabs from "@mui/joy/Tabs";
import { useLocation } from "react-router-dom";
// Icon packs
import ScienceIcon from "@mui/icons-material/Science";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoodIcon from "@mui/icons-material/Mood";
import SportsIcon from "@mui/icons-material/Sports";
import MemoryIcon from "@mui/icons-material/Memory";
import SpaIcon from "@mui/icons-material/Spa";
// Components
import TopicChip from "./misc/TopicChip.jsx";
import SmallArticleCard from "./misc/SmallArticleCard.jsx";

import style from "../styles/modules/Home.module.scss";
import { Typography } from "@mui/joy";
const Search = (props) => {
  const currentQuery = useLocation();
  const categories = [
    {
      categoryName: "Discover",
      icon: TrendingUpIcon,
      chipColor: "neutral",
      chipVariant: "outlined",
    },
    {
      categoryName: "Business",
      icon: BusinessCenterIcon,
      chipColor: "neutral",
      chipVariant: "outlined",
    },
    {
      categoryName: "Technology",
      icon: MemoryIcon,
      chipColor: "neutral",
      chipVariant: "outlined",
    },
    {
      categoryName: "Entertainment",
      icon: MoodIcon,
      chipColor: "neutral",
      chipVariant: "outlined",
    },
    {
      categoryName: "Sports",
      icon: SportsIcon,
      chipColor: "neutral",
      chipVariant: "outlined",
    },
    {
      categoryName: "Science",
      icon: ScienceIcon,
      chipColor: "neutral",
      chipVariant: "outlined",
    },
    {
      categoryName: "Health",
      icon: SpaIcon,
      chipColor: "neutral",
      chipVariant: "outlined",
    },
  ];

  return (
    <>
      <Tabs
        aria-label="Scrollable tabs"
        defaultValue={0}
        variant="scrollable"
        sx={{
          width: "100%",
          display: "flex",
          overflow: "auto",
          flexDirection: "row",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((category, idx) => {
          return (
            <TopicChip
              key={idx}
              name={category.categoryName}
              icon={category.icon}
              chipColor={category.chipColor}
              chipVariant={category.chipVariant}
              getCategoryData={props.getCategoryData}
            />
          );
        })}
      </Tabs>

      <div className={style.homeBody}>
        <Typography
          style={{
            marginBottom: "20px",
            alignSelf: "start",
          }}
          level="title-lg"
          textColor="#fff"
        >
          Results for {currentQuery.pathname.replace("/search/", "")}
        </Typography>
        <div className={style.articleCards}>
          {props.articles.map((article, idx) => {
            return (
              <SmallArticleCard
                key={idx}
                loading={props.loading}
                articleTitle={article.title}
                articleImage={article.image}
                articleSource={article.source}
                publishedDuration={article.duration}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
