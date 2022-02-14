import React, { FC } from "react";
import { MarvelCharacterModel } from "../../../models";
import classes from "./CharacterPreview.module.scss";
import classNames from "classnames";
import CharacterThumbnail from "../../../components/character-thumbnail/CharacterThumbnail";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";

interface CharacterPreviewProps {
  character: MarvelCharacterModel;
  className?: string;
}

const CharacterPreview: FC<CharacterPreviewProps> = ({
  character,
  className,
}) => {
  const { name, description, thumbnail, id } = character;

  return (
    <div className={classNames("card", className, classes.CharacterPreview)}>
      <div className="d-flex">
        <CharacterThumbnail thumbnail={thumbnail} />
        <div className={classNames("p-3", classes.TextContent)}>
          <h3>{name}</h3>
          <p>{description}</p>

          <Link to={`/details/${id}`}>
            <Button className={classes.DetailsButton}>See details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterPreview;
