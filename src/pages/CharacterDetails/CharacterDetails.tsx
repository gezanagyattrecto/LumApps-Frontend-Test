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

const faBackwardIcon = faArrowLeft as IconProp;

const CharacterDetails: FC = () => {
  const { id } = useParams();

  const [data, setData] = useState<MarvelCharacterModel | null>(null);

  useEffect(() => {
    const getCharacterDetails = async () => {
      setData(await characterService.get(id));
    };

    getCharacterDetails();
  }, [id]);

  console.log("data", data);

  return data?.id ? (
    <Page>
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
    </Page>
  ) : null;
};

export default CharacterDetails;
