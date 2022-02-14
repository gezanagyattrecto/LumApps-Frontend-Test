import React, {FC} from "react";
import Page from "../../components/page/Page";

const Home: FC = () => {
  // useEffect(() => {
  //   const getCharacters = async () => {
  //     const response = await heroService.getCharacters();
  //     console.log("response", response);
  //   };
  //
  //   getCharacters();
  // }, []);

  return <Page>Home Page with search</Page>;
};

export default Home;
