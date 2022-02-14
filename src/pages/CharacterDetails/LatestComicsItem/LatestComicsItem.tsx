import React, { FC, useMemo } from "react";
import { format } from "date-fns";
import { ComicsDetailModel } from "models";

interface LatestComicsItemProps {
  comics: ComicsDetailModel;
}

const LatestComicsItem: FC<LatestComicsItemProps> = ({ comics }) => {
  const { id, title, prices, dates } = comics;

  const formattedDate = useMemo(() => {
    const onSaleDate = dates?.find((item) => item.type === "onsaleDate")?.date;
    if (!onSaleDate) {
      return "-";
    }

    try {
      return format(new Date(onSaleDate), "MM/dd/yyyy");
    } catch (e) {
      return "-";
    }
  }, [dates]);

  const price = useMemo(() => {
    const priceValue = prices?.find((item) => item.type === "printPrice")
      ?.price;
    return priceValue ? `$${priceValue}` : "-";
  }, [prices]);

  return (
    <div key={id} className={"border-top pt-3 mb-3"}>
      <h6>{title}</h6>
      <div>Price: {price}</div>
      <div>On sale: {formattedDate}</div>
    </div>
  );
};

export default LatestComicsItem;
