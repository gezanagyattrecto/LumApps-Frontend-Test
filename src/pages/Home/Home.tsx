import React, { FC, useEffect } from "react";
import Page from "../../components/page/Page";
import { useSelector } from "react-redux";
import { selectSearchKey } from "../../store/common";

const Home: FC = () => {
  // useEffect(() => {
  //   const getCharacters = async () => {
  //     const response = await heroService.getCharacters();
  //     console.log("response", response);
  //   };
  //
  //   getCharacters();
  // }, []);

  const searchKey = useSelector(selectSearchKey);

  useEffect(() => {
    console.log("searchKey on home", searchKey);
  }, [searchKey]);

  return <Page>Home Page with search</Page>;
};

export default Home;
