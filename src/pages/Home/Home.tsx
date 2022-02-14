import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { useSelector } from "react-redux";
import { selectPage, selectSearchKey } from "../../store/common";
import { characterService } from "../../service/character.service";
import { MarvelCharacterModel } from "../../models";
import CharacterPreview from "./CharacterPreview/CharacterPreview";
import Paginator from "../../components/paginator/Paginator";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const Home: FC = () => {
  const [marvelCharacters, setMarvelCharacters] = useState<
    MarvelCharacterModel[]
  >([]);
  const [offset, setOffset] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const searchKey = useSelector(selectSearchKey);
  const page = useSelector(selectPage);
  const history = useHistory();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        const { offset, total, results } = await characterService.search(
          searchKey,
          page
        );
        setOffset(offset);
        setTotal(total);
        setMarvelCharacters(results);
      } catch (e) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
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
    <Page loading={loading}>
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
