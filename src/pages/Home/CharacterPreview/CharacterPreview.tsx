import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { MarvelCharacterModel } from "models";
import { CharacterThumbnail, SafeInnerHtml, Button } from "components";
import classes from "./CharacterPreview.module.scss";

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
    <div
      className={classNames("card d-flex", className, classes.CharacterPreview)}
    >
      <div className={classNames("d-flex", classes.CharacterPreviewWrapper)}>
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
