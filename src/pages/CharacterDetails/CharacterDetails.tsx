import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { useHistory, useParams } from "react-router";
import { characterService } from "../../service/character.service";
import { MarvelCharacterModel } from "../../models";
import CharacterThumbnail from "../../components/character-thumbnail/CharacterThumbnail";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import LatestComics from "./LatestComics/LatestComics";
import classes from "./CharacterDetails.module.scss";
import { toast } from "react-toastify";
import ComicsStories from "./ComicStories/ComicStories";
import { SafeInnerHtml } from "../../components/safe-inner-html/SafeInnerHtml";
import { useSelector } from "react-redux";
import { selectPage, selectSearchKey } from "../../store/common";

const faBackwardIcon = faArrowLeft as IconProp;

const CharacterDetails: FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MarvelCharacterModel | null>(null);
  const searchKey = useSelector(selectSearchKey);
  const page = useSelector(selectPage);

  useEffect(() => {
    const getCharacterDetails = async () => {
      try {
        setLoading(true);
        setData(await characterService.get(id));
      } catch (e) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getCharacterDetails();
  }, [id]);

  const goToPreviousPath = () => {
    history.replace({
      pathname: `/home`,
      search: `?searchKey=${searchKey}&page=${page}`,
    });
  };

  return (
    <Page loading={loading}>
      {data?.id ? (
        <>
          <div className="d-flex justify-content-between">
            <div>
              <Button
                variant="link"
                className="mb-2"
                onClick={goToPreviousPath}
              >
                <FontAwesomeIcon className="mr-2" icon={faBackwardIcon} />
                Back to results
              </Button>
              <h3 className="mb-3">{data.name}</h3>
              <SafeInnerHtml content={data.description} />
            </div>
            <CharacterThumbnail thumbnail={data?.thumbnail} />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <ComicsStories className="flex-grow-1 mr-3" characterId={id} />
            <LatestComics className={classes.LatestComics} characterId={id} />
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default CharacterDetails;
