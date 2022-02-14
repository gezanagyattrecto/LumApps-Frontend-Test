import React, { FC } from "react";
import { MarvelCharacterModel } from "../../../models";
import classes from "./CharacterPreview.module.scss";
import classNames from "classnames";
import CharacterThumbnail from "../../../components/character-thumbnail/CharacterThumbnail";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import { SafeInnerHtml } from "../../../components/safe-inner-html/SafeInnerHtml";

interface CharacterPreviewProps {
  character: MarvelCharacterModel;
  className?: string;
  searchKey: string;
  page?: number;
}

const CharacterPreview: FC<CharacterPreviewProps> = ({
  character,
  className,
  searchKey,
  page,
}) => {
  const { name, description, thumbnail, id } = character;

  return (
    <div className={classNames("card", className, classes.CharacterPreview)}>
      <div className="d-flex">
        <CharacterThumbnail thumbnail={thumbnail} />
        <div className={classNames("p-3", classes.TextContent)}>
          <h3>{name}</h3>
          <SafeInnerHtml
            className={classes.Description}
            content={description}
          />

          <Link
            to={{
              pathname: `/details/${id}`,
              search: `?searchKey=${searchKey}&page=${page}`,
            }}
          >
            <Button className={classes.DetailsButton}>See details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterPreview;
