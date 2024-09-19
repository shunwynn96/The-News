import React from "react";
import { Chip } from "@mui/joy";
import { Link, useLocation } from "react-router-dom";
import style from "../../styles/modules/TopicChip.module.scss";

const TopicChip = (props) => {
  const currentCategory = useLocation();

  return (
    <>
      <Link to={`/${props.name}`}>
        <Chip
          onClick={() => props.getCategoryData(props.name)}
          className={style.chip}
          variant={
            currentCategory.pathname == `/${props.name}`
              ? "solid"
              : props.chipVariant
          }
          color={props.chipColor}
          startDecorator={<props.icon />}
        >
          {props.name}
        </Chip>
      </Link>
    </>
  );
};

export default TopicChip;
