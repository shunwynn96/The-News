import React from "react";
import { Sheet, Input, Avatar, Box } from "@mui/joy";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { ModeToggle } from "../App.jsx";

import style from "../styles/modules/Navbar.module.scss";
const Navbar = (props) => {
  return (
    <>
      <Sheet variant="soft" className={style.navbarContainer}>
        <Box className={style.navbar}>
          <Link onClick={props.getTopHeadlineData} to={"/"}>
            <p className={style.appTitle}>Top News</p>
          </Link>
          <div>
            <Input
              size="md"
              sx={{ maxWidth: "350px" }}
              variant="plain"
              startDecorator={<SearchRoundedIcon />}
            />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <ModeToggle />
            <Avatar variant="outlined">SK</Avatar>
          </div>
        </Box>
      </Sheet>
    </>
  );
};

export default Navbar;
