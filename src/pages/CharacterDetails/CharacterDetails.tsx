import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { toast } from "react-toastify";

import { characterService } from "service/character.service";
import { selectPage, selectSearchKey } from "store/common";
import { SafeInnerHtml, CharacterThumbnail, Button, Page } from "components";
import { MarvelCharacterModel } from "models";
import ComicsStories from "./ComicStories/ComicStories";
import LatestComics from "./LatestComics/LatestComics";
import classes from "./CharacterDetails.module.scss";

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
          <div
            className={classNames(
              "d-flex justify-content-between",
              classes.DetailHeader
            )}
          >
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

          <div
            className={classNames(
              "d-flex justify-content-between mt-3",
              classes.DetailBody
            )}
          >
            <ComicsStories
              className={classNames("flex-grow-1", classes.ComicStoriesWrapper)}
              characterId={id}
            />
            <LatestComics className={classes.LatestComics} characterId={id} />
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default CharacterDetails;
