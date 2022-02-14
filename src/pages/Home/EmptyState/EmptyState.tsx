import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectSearchKey } from "store/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const faSearchIcon = faSearch as IconProp;

interface EmptyStateProps {
  loading: boolean;
  hits: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({ loading, hits }) => {
  const searchKey = useSelector(selectSearchKey);

  const showNoResultEmptyState = useMemo(() => {
    return !loading && searchKey && !hits;
  }, [loading, searchKey, hits]);

  const showNoSearchYetEmptyState = useMemo(() => {
    return !loading && !searchKey;
  }, [loading, searchKey]);

  return (
    <div>
      {showNoResultEmptyState || showNoSearchYetEmptyState ? (
        <div className="w-100 text-center">
          <FontAwesomeIcon className="my-5" size={"3x"} icon={faSearchIcon} />

          {showNoResultEmptyState ? (
            <>
              <h6>No results for:</h6>
              <h4 className="font-weight-bold">{searchKey}</h4>
            </>
          ) : (
            <h4>
              Welcome to Marvel's character finder! <br /> Enter something in
              the search box above.
            </h4>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default EmptyState;
