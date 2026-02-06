import React from "react";
import MyImage from "../data/MyImage";
import ImageGalleryFragmentQuery from "@/models/fragments/ImageGalleryBlockInterface";
import { ImageFragmentQuery } from "@/models/fragments/ImageGalleryBlockInterface";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import Glass from "../animation/Glass";

export default function ModularImageGallery({
  data,
  key,
}: {
  data: ImageGalleryFragmentQuery;
  key: string;
}) {
  const gallery = data.imageGallery;

  return (
    <ModularLayoutWrapper data={data?.layoutOptions} key={key}>
      <div className="modular-image-gallery-container display-flex-wrap">
        {gallery.map((img: ImageFragmentQuery) => (
          <Glass classNames="glass-card tech-stack-image" key={img.id}>
            <MyImage img={img} />
          </Glass>
        ))}
      </div>
    </ModularLayoutWrapper>
  );
}
