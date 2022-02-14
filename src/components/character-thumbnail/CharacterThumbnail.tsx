import React, { FC } from "react";
import { Thumbnail } from "models";
import classes from "./CharacterThumbnail.module.scss";
interface CharacterThumbnailProps {
  thumbnail: Thumbnail;
}

const CharacterThumbnail: FC<CharacterThumbnailProps> = ({ thumbnail }) => {
  return (
    <img
      src={`${thumbnail.path}.${thumbnail.extension}`}
      alt="Character Thumbnail"
      className={classes.Thumbnail}
    />
  );
};

export default CharacterThumbnail;
