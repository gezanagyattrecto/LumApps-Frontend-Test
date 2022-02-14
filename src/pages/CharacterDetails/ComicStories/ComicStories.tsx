import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { characterService } from "../../../service/character.service";
import { ComicsStoryModel } from "../../../models";

interface ComicsStoriesProps {
  className: string;
  characterId: string;
}

const ComicsStories: FC<ComicsStoriesProps> = ({ className, characterId }) => {
  const [comicsStories, setComicsStories] = useState<ComicsStoryModel[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
      const response = await characterService.getStories(characterId);
      setComicsStories(response?.results);
    };
    fetchComics();
  }, [characterId]);

  return (
    <div className={classNames(className, "card p-3")}>
      <h5 className="mb-3">Latest stories</h5>
      <div>
        {comicsStories?.map((item) => (
          <div key={item.id} className="border-top py-3">
            <p className="font-weight-bold ">{item.title}</p>

            <div>
              <p>Characters:</p>
              {item.characters.items.map(({ name }) => (
                <span className="badge bg-secondary text-light mr-2" key={name}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicsStories;
