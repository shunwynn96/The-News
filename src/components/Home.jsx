import React from "react";
import { Sheet, Input, Chip, Avatar, Button } from "@mui/joy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import Sun from "@mui/icons-material/LightMode";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { ModeToggle } from "../App.jsx";
import HeadlineCard from "./misc/HeadlineCard.jsx";
import SmallArticleCard from "./misc/SmallArticleCard.jsx";

import style from "../styles/modules/Home.module.scss";
const Home = (props) => {
  return (
    <>
      <Sheet className={style.homeHeader}>
        <div className={style.col_1}>
          <p>Top News</p>
        </div>
        <div>
          <Input
            size="md"
            sx={{ maxWidth: "350px" }}
            variant="soft"
            startDecorator={<SearchRoundedIcon />}
          />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <ModeToggle />
          <Avatar variant="outlined">SK</Avatar>
        </div>
      </Sheet>

      <div>
        <Chip
          className={style.chip}
          variant="outlined"
          color="warning"
          startDecorator={<TrendingUpIcon />}
        >
          2024 Olympics
        </Chip>
        <Chip
          className={style.chip}
          variant="outlined"
          startDecorator={<Sun />}
        >
          Today is sunny
        </Chip>
      </div>

      <div className={style.homeBody}>
        {props.articles.map((article, idx) => {
          if (idx == 0) {
            return (
              <div className={style.headline} key={idx}>
                <HeadlineCard
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
