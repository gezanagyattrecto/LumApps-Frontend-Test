import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { useSelector } from "react-redux";
import { selectPage, selectSearchKey } from "../../store/common";
import { characterService } from "../../service/character.service";
import { MarvelCharacterModel } from "../../models";
import CharacterPreview from "./CharacterPreview/CharacterPreview";
import Paginator from "../../components/paginator/Paginator";
import { useHistory } from "react-router";

const Home: FC = () => {
  const [marvelCharacters, setMarvelCharacters] = useState<
    MarvelCharacterModel[]
  >([]);
  const [offset, setOffset] = useState<number>();
  const [total, setTotal] = useState<number>();
  const searchKey = useSelector(selectSearchKey);
  const page = useSelector(selectPage);
  const history = useHistory();

  useEffect(() => {
    const getCharacters = async () => {
      const response = await characterService.search(searchKey, page);
      setOffset(response.offset);
      setTotal(response.total);
      setMarvelCharacters(response.results);
    };

    if (searchKey) {
      history.push({
        pathname: "home",
        search: `?searchKey=${searchKey}&page=${page}`,
      });
      getCharacters();
    }
  }, [searchKey, page, history]);

  return (
    <Page>
      {marvelCharacters?.map((character) => (
        <CharacterPreview
          character={character}
          key={character.id}
          className="mb-3"
        />
      ))}

      {total ? <Paginator offset={offset} total={total} /> : null}
    </Page>
  );
};

export default Home;
