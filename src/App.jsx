import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Home from "./components/Home";
import { Box, Sheet } from "@mui/joy";
import Button from "@mui/joy/Button";
import { getTopHeadlines } from "./api/gnews.js";
import "./App.css";

import "@fontsource/inter";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

const App = () => {
  const [articles, setArticles] = useState([]);

  const getTopHeadlineData = () => {
    getTopHeadlines().then((res) => {
      setArticles(res.data.articles);
    });
  };

  useEffect(() => {
    getTopHeadlineData();
  }, []);

  return (
    <>
      <div className="main-container">
        <CssVarsProvider>
          <ModeToggle />
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
