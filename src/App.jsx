import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy/styles";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import DarkMode from "@mui/icons-material/DarkMode";
import { Sheet, Box } from "@mui/joy";
import LightMode from "@mui/icons-material/LightMode.js";
import { Switch } from "@mui/joy";
import { getTopHeadlines, getCategory, getSearch } from "./api/gnews.js";
import { newsData } from "./api/demoData.js";
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
  /* ========== local newsData For dev========== */
  // useEffect(() => {
  //   setArticles(newsData);
  // }, []);

  /* ==================================== */

  const getTopHeadlineData = () => {
    setLoading(true);
    getTopHeadlines({
      country: "us",
      apiKey: import.meta.env[keyList[keyNumber]],
    }).then((res) => {
      if (res.status == 403) {
        keyNumber === 3 ? setKeyNumber(0) : setKeyNumber(keyNumber++);
      } else if (res.status == 200) {
        setArticles(res.data.articles);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getTopHeadlineData();
  }, []);

  const getCategoryData = (category) => {
    setLoading(true);
    getCategory({
      country: "us",
      category: category,
      apiKey: import.meta.env[keyList[keyNumber]],
    }).then((res) => {
      if (res.status == 403) {
        keyNumber === 3 ? setKeyNumber(0) : setKeyNumber(keyNumber++);
      } else if (res.status == 200) {
        setArticles(res.data.articles);
        setLoading(false);
      }
    });
  };
  const getSearchData = () => {
    setLoading(true);
    getSearch({
      country: "us",
      q: "bitcoin",
      apiKey: import.meta.env[keyList[keyNumber]],
    }).then((res) => {
      if (res.status == 403) {
        keyNumber === 3 ? setKeyNumber(0) : setKeyNumber(keyNumber++);
      } else if (res.status == 200) {
        setArticles(res.data.articles);
        setLoading(false);
      }
    });
  };

  return (
    <Sheet className="main-container">
      <CssVarsProvider theme={theme}>
        <Router>
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
                path="/:category"
                element={
                  <Home
                    getCategoryData={getCategoryData}
                    loading={loading}
                    articles={articles}
                  />
                }
              />
            </Routes>
          </Box>
        </Router>
      </CssVarsProvider>
    </Sheet>
  );
};

export default App;
