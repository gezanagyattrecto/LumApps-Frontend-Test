import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { characterService } from "service/character.service";
import { ComicsDetailModel } from "models";
import LatestComicsItem from "../LatestComicsItem/LatestComicsItem";
import classes from "./LatestComics.module.scss";

interface LatestComicsProps {
  className: string;
  characterId: string;
}

const LatestComics: FC<LatestComicsProps> = ({ className, characterId }) => {
  const [comics, setComics] = useState<ComicsDetailModel[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
      const response = await characterService.getComics(characterId);
      setComics(response?.results);
    };
    fetchComics();
  }, [characterId]);

  return (
    <div className={classNames("card p-3", classes.LatestComics)}>
      <h5 className="mb-3">Latest comics</h5>
      <div>
        {comics?.map((item) => (
          <LatestComicsItem comics={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestComics;
