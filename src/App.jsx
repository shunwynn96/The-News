import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Home from "./components/Home";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode.js";
import { Switch } from "@mui/joy";
import { getTopHeadlines } from "./api/gnews.js";
import { newsData } from "./api/demoData.js";
import "./App.css";

import "@fontsource/inter";

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

  /* ========== local newsData ========== */
  useEffect(() => {
    setArticles(newsData);
  }, []);

  /* ==================================== */

  /* ========== API news Data ========== */

  // const getTopHeadlineData = () => {
  //   getTopHeadlines().then((res) => {
  //     setArticles(res.data.articles);
  //   });
  // };

  // useEffect(() => {
  //   getTopHeadlineData();
  // }, []);

  /* ==================================== */

  return (
    <>
      <div className="main-container">
        <CssVarsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home articles={articles} />} />
            </Routes>
          </Router>
        </CssVarsProvider>
      </div>
    </>
  );
};

export default App;
