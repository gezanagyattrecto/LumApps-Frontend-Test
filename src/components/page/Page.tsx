import React, { FC } from "react";

const Page: FC = (props) => {
  return <div className="container mt-3">{props.children}</div>;
};

export default Page;
