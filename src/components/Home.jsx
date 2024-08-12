import React, { useEffect, useState } from "react";
import { Sheet, Input, Chip, Button } from "@mui/joy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LaunchIcon from "@mui/icons-material/Launch";
import Sun from "@mui/icons-material/LightMode";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeadlineCard from "./misc/HeadlineCard.jsx";
import SmallArticleCard from "./misc/SmallArticleCard.jsx";

import style from "../styles/modules/Home.module.scss";

const Home = (props) => {
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

  // const articlesDemo = [
  //   {
  //     content:
  //       "The 2024 Summer Olympics in Paris are nearing their conclusion, with just a handful of events scheduled for Sunday ahead of the Closing Ceremony as the Games officially wrap up.\nEvents are finished on Saturday, with 15 official days of competition at... [10928 chars]",
  //     description:
  //       "The 2024 Summer Olympics in Paris are nearing their conclusion, with just a handful of events scheduled for Sunday ahead of the Closing Ceremony as the Games...",
  //     image:
  //       "https://media.nbcchicago.com/2024/08/GettyImages-2165578075.jpg?quality=85&strip=all&resize=1200%2C675",
  //     publishedAt: "2024-08-11T01:22:28Z",
  //     source: { name: "NBC Chicago", url: "https://www.nbcchicago.com" },
  //     title:
  //       "2024 Olympics medal count: Here's where Team USA stands with 1 day remaining",
  //     url: "https://www.nbcchicago.com/paris-2024-summer-olympics/2024-olympics-medal-count-heres-where-team-usa-stands-1-day-remaining/3518932/",
  //   },
  //   {
  //     content:
  //       "A Ferguson, Missouri, police officer was critically injured outside the city’s police station during protests on the 10th anniversary of the fatal shooting of Michael Brown, police said on Saturday. The Ferguson police chief, Troy Doyle, said Officer... [3556 chars]",
  //     description:
  //       "Protest marking 10 years since shooting escalated when fence was breached and Black officer was knocked to the ground, hitting his head, says police chief",
  //     image:
  //       "https://i.guim.co.uk/img/media/7d882e9ef585a65458d0cb00ca2ce34d5362e579/0_0_5265_3160/master/5265.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ccb644087bc931fc23efacf9e472ccf1",
  //     publishedAt: "2024-08-10T23:43:00Z",
  //     source: { name: "The Guardian US", url: "https://www.theguardian.com" },
  //     title:
  //       "Ferguson police officer suffers critical brain injury in Michael Brown anniversary violence",
  //     url: "https://www.theguardian.com/us-news/article/2024/aug/11/ferguson-police-officer-suffers-critical-brain-injury-in-michael-brown-anniversary-violence",
  //   },
  //   {
  //     content:
  //       "A Ferguson, Missouri, police officer was critically injured outside the city’s police station during protests on the 10th anniversary of the fatal shooting of Michael Brown, police said on Saturday. The Ferguson police chief, Troy Doyle, said Officer... [3556 chars]",
  //     description:
  //       "Protest marking 10 years since shooting escalated when fence was breached and Black officer was knocked to the ground, hitting his head, says police chief",
  //     image:
  //       "https://i.guim.co.uk/img/media/7d882e9ef585a65458d0cb00ca2ce34d5362e579/0_0_5265_3160/master/5265.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ccb644087bc931fc23efacf9e472ccf1",
  //     publishedAt: "2024-08-10T23:43:00Z",
  //     source: { name: "The Guardian US", url: "https://www.theguardian.com" },
  //     title:
  //       "Ferguson police officer suffers critical brain injury in Michael Brown anniversary violence",
  //     url: "https://www.theguardian.com/us-news/article/2024/aug/11/ferguson-police-officer-suffers-critical-brain-injury-in-michael-brown-anniversary-violence",
  //   },
  // ];

  return (
    <>
      <Sheet className={style.homeHeader}>
        <div className={style.col_1}>
          <p>Top News</p>
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
        <div>
          <Input
            className={style.muiInput}
            size="sm"
            variant="soft"
            startDecorator={<SearchRoundedIcon />}
          />
        </div>
      </Sheet>

      <div className={style.homeBody}>
        {props.articles.map((article, idx) => {
          if (idx == 0) {
            return (
              <div className={style.headline} key={idx}>
                <HeadlineCard
                  articleTitle={article.title}
                  articleImage={article.image}
                  articleSource={article.source}
                />
                {screenWidth > 1200 && (
                  <Sheet className={style.description}>
                    <p>{article.content.split("...", 1)}...</p>
                    <Button
                      className={style.linkButton}
                      variant="soft"
                      endDecorator={<LaunchIcon />}
                      color="primary"
                    >
                      <a href={article.url} target="_blank">
                        Continue Reading
                      </a>
                    </Button>
                  </Sheet>
                )}
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
