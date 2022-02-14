import React, {ChangeEventHandler, FC, KeyboardEventHandler, useState,} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

import classes from "./SearchField.module.scss";
import classNames from "classnames";
import {selectSearchKey, setSearchKey} from "store/common";
import {useDispatch, useSelector} from "react-redux";

interface SearchFieldProps {}

const faSearchIcon = faSearch as IconProp;

const SearchField: FC<SearchFieldProps> = () => {
  const searchKey = useSelector(selectSearchKey);
  const [value, setValue] = useState<string>(searchKey);
  const dispatch = useDispatch();


  const handleSearchClick = () => {
    dispatch(setSearchKey(value));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      dispatch(setSearchKey(value));
    }
  };

  return (
    <div className={classes.SearchFieldWrapper}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={classNames(classes.SearchField, "form-control")}
        placeholder="Search for characters..."
        aria-label="Search"
      />

      <FontAwesomeIcon
        className={classes.SearchIcon}
        icon={faSearchIcon}
        onClick={() => handleSearchClick()}
      />
    </div>
  );
};

export default SearchField;
