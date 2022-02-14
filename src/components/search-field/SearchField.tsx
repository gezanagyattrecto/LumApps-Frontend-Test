import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import classes from "./SearchField.module.scss";
import classNames from "classnames";

interface SearchFieldProps {}

const faSearchIcon = faSearch as IconProp;

const SearchField: FC<SearchFieldProps> = () => {
  return (
    <div className={classes.SearchFieldWrapper}>
      <input
        type="text"
        className={classNames(classes.SearchField, "form-control")}
        placeholder="Search for characters..."
        aria-label="Search"
      />

      <FontAwesomeIcon className={classes.SearchIcon} icon={faSearchIcon} />
    </div>
  );
};

export default SearchField;
