import React, { FC } from "react";
import classes from "./Header.module.scss";
import classNames from "classnames";
import MarvelLogo from "assets/image/Marvel_Logo.svg.png";
import SearchField from "../search-field/SearchField";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header
      className={classNames(
        classes.Header,
        "d-flex align-items-center justify-content-between p-5"
      )}
    >
      <Link to="/home">
        <img className={classes.Logo} src={MarvelLogo} alt={"Marvel Logo"} />
      </Link>
      <SearchField />
    </header>
  );
};
export default Header;
