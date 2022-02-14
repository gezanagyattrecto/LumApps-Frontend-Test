import React, { FC } from "react";
import * as sanitizeHtml from "sanitize-html";

export interface SafeInnerHtmlProps {
  content: string;
  className?: string;
}

export const SafeInnerHtml: FC<SafeInnerHtmlProps> = (props) => {
  const createMarkup = () => {
    return {
      __html: sanitizeHtml(props.content),
    };
  };

  return (
    <div className={props.className} dangerouslySetInnerHTML={createMarkup()} />
  );
};
