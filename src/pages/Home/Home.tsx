import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { useSelector } from "react-redux";
import { selectSearchKey } from "../../store/common";
import { characterService } from "../../service/character.service";
import { MarvelCharacterModel } from "../../models";
import CharacterPreview from "./CharacterPreview/CharacterPreview";

const Home: FC = () => {
  const [marvelCharacters, setMarvelCharacters] = useState<
    MarvelCharacterModel[]
  >([]);

  const searchKey = useSelector(selectSearchKey);
  useEffect(() => {
    const getCharacters = async () => {
      const response = await characterService.search(searchKey);
      setMarvelCharacters(response.results);
    };

    if (searchKey) {
      getCharacters();
    }
  }, [searchKey]);

  return (
    <Page>
      {marvelCharacters?.map((character) => (
        <CharacterPreview
          character={character}
          key={character.id}
          className="mb-3"
        />
      ))}
    </Page>
  );
};

export default Home;
