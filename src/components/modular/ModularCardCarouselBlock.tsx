import CardCarouselFragmentQuery, {
  CardBlockInterface,
} from "@/models/fragments/CardCarouselBlockInterface";
import React from "react";
import Card from "../Card";

export default function ModularCardCarouselBlock({
  data,
  key,
}: {
  data: CardCarouselFragmentQuery;
  key: string;
}) {
  return (
    <div key={key} className="position-relative">
      <div className="display-flex-row-desktop">
        {data.card.map((cardData: CardBlockInterface, index: number) => (
          <Card data={cardData} key={index} />
        ))}
      </div>
    </div>
  );
}
