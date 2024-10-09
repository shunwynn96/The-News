import React from "react";
import { Sheet, Input, Avatar, Box } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { ModeToggle } from "../App.jsx";

import style from "../styles/modules/Navbar.module.scss";
const Navbar = (props) => {
  const navigate = useNavigate();
  const testSearch = (evt) => {
    if (evt.keyCode == 13) {
      props.getSearchData(evt.target.value);
      navigate(`/search/${evt.target.value}`);
    }
  };

  return (
    <>
      <Sheet variant="soft" className={style.navbarContainer}>
        <Box className={style.navbar}>
          <Link onClick={props.getTopHeadlineData} to={"/"}>
            <p className={style.appTitle}>PulsePeek</p>
          </Link>
          <div>
            <Input
              size="md"
              placeholder="Search..."
              sx={{ maxWidth: "350px" }}
              variant="plain"
              onKeyDown={testSearch}
              startDecorator={<SearchRoundedIcon />}
            />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <ModeToggle />
            {/* <Avatar variant="outlined">SK</Avatar> */}
          </div>
        </Box>
      </Sheet>
    </>
  );
};

export default Navbar;
