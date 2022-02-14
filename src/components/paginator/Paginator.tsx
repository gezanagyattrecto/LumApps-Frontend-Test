import React, { FC, useMemo } from "react";
import config from "config/index";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setPage } from "store/common";
import classes from "./Paginator.module.scss";

interface PaginatorProps {
  total: number;
  offset?: number;
}

const Paginator: FC<PaginatorProps> = ({ total, offset = 0 }) => {
  const dispatch = useDispatch();

  const count = useMemo(() => {
    return Math.round(total / config.ITEMS_PER_PAGE);
  }, [total]);

  const activePage = useMemo(() => {
    return offset / config.ITEMS_PER_PAGE;
  }, [offset]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: count }).map((item, index) => {
      return { value: index, displayValue: index + 1 };
    });
  }, [count]);

  const handlePageClick = (page: number) => {
    dispatch(setPage(page));
  };

  const handleNextClick = () => {
    if (isNextDisabled) {
      return;
    }
    handlePageClick(activePage + 1);
  };

  const handlePreviousClick = () => {
    if (isPrevDisabled) {
      return;
    }
    handlePageClick(activePage + -1);
  };

  const isNextDisabled = useMemo(() => {
    return activePage === count - 1;
  }, [activePage, count]);

  const isPrevDisabled = useMemo(() => {
    return activePage === 0;
  }, [activePage]);

  return (
    <nav aria-label="Paginator">
      <ul className="pagination">
        <li
          onClick={() => handlePreviousClick()}
          className={classNames("page-item", {
            disabled: isPrevDisabled,
            [classes.PaginatorItem]: !isPrevDisabled,
          })}
        >
          <span className="page-link">Previous</span>
        </li>

        {pageNumbers?.map(({ displayValue, value }) => {
          return (
            <li
              onClick={() => handlePageClick(value)}
              key={value}
              className={classNames(classes.PaginatorItem, "page-item", {
                active: value === activePage,
              })}
            >
              <div className="page-link">{displayValue}</div>
            </li>
          );
        })}

        <li
          onClick={() => handleNextClick()}
          className={classNames("page-item", {
            disabled: isNextDisabled,
            [classes.PaginatorItem]: !isNextDisabled,
          })}
        >
          <div className="page-link">Next</div>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
