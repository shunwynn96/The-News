import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy/styles";
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar.jsx";
import DarkMode from "@mui/icons-material/DarkMode";
import { Sheet, Box } from "@mui/joy";
import LightMode from "@mui/icons-material/LightMode.js";
import { Switch } from "@mui/joy";
import { getTopHeadlines, getCategory, getSearch } from "./api/gnews.js";
import { useLocation } from "react-router-dom";
import "./App.css";

import "@fontsource/inter";

const theme = extendTheme({
  components: {
    JoySkeleton: {
      defaultProps: {
        animation: "pulse",
        variant: "overlay",
      },
    },
  },
});

export function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Switch
      size="lg"
      slotProps={{
        input:
          mode === "light"
            ? { "aria-label": "Dark mode switch" }
            : { "aria-label": "Light mode switch" },
        thumb:
          mode === "light"
            ? { children: <DarkMode /> }
            : { children: <LightMode /> },
      }}
      onChange={() => setMode(mode === "light" ? "dark" : "light")}
      sx={{
        "--Switch-thumbSize": "16px",
      }}
    />
  );
}

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyNumber, setKeyNumber] = useState(0);
  const keyList = [
    "VITE_GNEWS_0",
    "VITE_GNEWS_1",
    "VITE_GNEWS_2",
    "VITE_GNEWS_3",
  ];

  const category = useLocation();

  const dateToDuration = (date) => {
    let currentDate = new Date().getTime();
    let articleDate = new Date(date).getTime();
    let duration = new Date(currentDate - articleDate);
    let minutesAgo = duration / 1000 / 60;
    return minutesAgo;
  };

  useEffect(() => {
    if (category.pathname !== "/") {
      getCategoryData(category.pathname.replace("/", ""));
    } else {
      getTopHeadlineData();
    }
  }, []);

  const getTopHeadlineData = () => {
    setLoading(true);
    getTopHeadlines({
      country: "us",
      apiKey: import.meta.env[keyList[keyNumber]],
    })
      .then((res) => {
        let articleList = res.data.articles;
        console.log(articleList);
        for (let articleIdx in res.data.articles) {
          articleList[articleIdx].duration = dateToDuration(
            articleList[articleIdx].publishedAt
          );
        }
        setArticles(articleList);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status == 403) {
          if (keyNumber == 3) {
            setKeyNumber(0);
            getTopHeadlineData();
          } else {
            setKeyNumber(keyNumber + 1);
            getTopHeadlineData();
          }
        }
      });
  };

  const getCategoryData = (category) => {
    setLoading(true);
    getCategory({
      country: "us",
      category: category.toLowerCase(),
      apiKey: import.meta.env[keyList[keyNumber]],
    })
      .then((res) => {
        let articleList = res.data.articles;
        for (let articleIdx in res.data.articles) {
          articleList[articleIdx].duration = dateToDuration(
            articleList[articleIdx].publishedAt
          );
        }
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status == 403) {
          if (keyNumber == 3) {
            setKeyNumber(0);
            getCategoryData();
          } else {
            setKeyNumber(keyNumber + 1);
            getCategoryData();
          }
        }
      });
  };

  const getSearchData = (searchQuery) => {
    setLoading(true);
    getSearch({
      country: "us",
      q: searchQuery,
      apiKey: import.meta.env[keyList[keyNumber]],
    })
      .then((res) => {
        let articleList = res.data.articles;
        for (let articleIdx in res.data.articles) {
          articleList[articleIdx].duration = dateToDuration(
            articleList[articleIdx].publishedAt
          );
        }
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status == 403) {
          if (keyNumber == 3) {
            setKeyNumber(0);
            getSearchData();
          } else {
            setKeyNumber(keyNumber + 1);
            getSearchData();
          }
        }
      });
  };

  return (
    <Sheet className="main-container">
      <CssVarsProvider theme={theme}>
        <Navbar
          getTopHeadlineData={getTopHeadlineData}
          getSearchData={getSearchData}
        />
        <Box className="body-container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  getCategoryData={getCategoryData}
                  loading={loading}
                  articles={articles}
                />
              }
            />
            <Route
              path="/category/:category"
              element={
                <Home
                  getCategoryData={getCategoryData}
                  loading={loading}
                  articles={articles}
                />
              }
            />
            <Route
              path="/search/:query"
              element={
                <Search
                  getCategoryData={getCategoryData}
                  loading={loading}
                  articles={articles}
                />
              }
            />
          </Routes>
        </Box>
      </CssVarsProvider>
    </Sheet>
  );
};

export default App;
