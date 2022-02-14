import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { useParams } from "react-router";
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

const faBackwardIcon = faArrowLeft as IconProp;

const CharacterDetails: FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MarvelCharacterModel | null>(null);

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

  return (
    <Page loading={loading}>
      {data?.id ? (
        <>
          <div className="d-flex justify-content-between">
            <div>
              <Button variant="link" className="mb-2">
                <FontAwesomeIcon className="mr-2" icon={faBackwardIcon} />
                Back to results
              </Button>
              <h3 className="mb-3">{data.name}</h3>
              <p>{data.description}</p>
            </div>
            <CharacterThumbnail thumbnail={data?.thumbnail} />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <div className="card flex-grow-1 mr-3 p-3">
              Here comes whatever it comes
            </div>
            <LatestComics className={classes.LatestComics} characterId={id} />
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default CharacterDetails;
