import React, { FC } from "react";
import { Grid } from "react-loader-spinner";
import classes from "./Page.module.scss";

interface PageProps {
  loading?: boolean;
}
const Page: FC<PageProps> = ({ children, loading }) => {
  return (
    <div className="container my-3">
      {loading ? (
        <div className={classes.LoadingContainer}>
          <Grid color="#01579b" height={80} width={80} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Page;
