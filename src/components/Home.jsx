import React from "react";
import { Chip } from "@mui/joy";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";

// Icon packs
import ScienceIcon from "@mui/icons-material/Science";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import FavoriteIcon from "@mui/icons-material/Favorite";
// Components
import TopicChip from "./misc/TopicChip.jsx";
import HeadlineCard from "./misc/HeadlineCard.jsx";
import SmallArticleCard from "./misc/SmallArticleCard.jsx";

import style from "../styles/modules/Home.module.scss";
const Home = (props) => {
  const categories = [
    {
      categoryName: "business",
      icon: TrendingUpIcon,
      chipColor: "success",
      chipVariant: "outlined",
    },
    {
      categoryName: "entertainment",
      icon: SportsEsportsIcon,
      chipColor: "danger",
      chipVariant: "outlined",
    },
    {
      categoryName: "health",
      icon: FavoriteIcon,
      chipColor: "warning",
      chipVariant: "outlined",
    },
    {
      categoryName: "science",
      icon: ScienceIcon,
      chipColor: "primary",
      chipVariant: "outlined",
    },
    {
      categoryName: "sports",
      icon: SportsFootballIcon,
      chipColor: "success",
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
        {props.articles.map((article, idx) => {
          if (idx == 0) {
            return (
              <div className={style.headline} key={idx}>
                <HeadlineCard
                  loading={props.loading}
                  articleTitle={article.title}
                  articleImage={article.image}
                  articleSource={article.source}
                  articleContent={article.content}
                  articleLink={article.url}
                />
              </div>
            );
          }
        })}
        <div className={style.articleCards}>
          {props.articles.map((article, idx) => {
            if (idx !== 0) {
              return (
                <SmallArticleCard
                  key={idx}
                  loading={props.loading}
                  articleTitle={article.title}
                  articleImage={article.image}
                  articleSource={article.source}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
