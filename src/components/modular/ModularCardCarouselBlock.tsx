import CardCarouselFragmentQuery, {
  CardBlockInterface,
} from "@/models/fragments/CardCarouselBlockInterface";
import React from "react";
import Card from "../Card";
import { CardCarouselBlockFragment } from "@/fragments/CardCarouselFragment";

export default function ModularCardCarouselBlock({
  data,
  key,
}: {
  data: CardCarouselFragmentQuery;
  key: string;
}) {
  console.log(data);
  return (
    <div
      key={key}
      className="modular-card-carousel-container display-flex-row-desktop"
    >
      {data.card.map((cardData: CardBlockInterface, index: number) => (
        <Card data={cardData} key={index} />
      ))}
    </div>
  );
}
