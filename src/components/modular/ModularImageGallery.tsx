import React from "react";
import MyImage from "../data/MyImage";
import ImageGalleryFragmentQuery from "@/models/fragments/ImageGalleryBlockInterface";
import { ImageFragmentQuery } from "@/models/fragments/ImageGalleryBlockInterface";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
export default function ModularImageGallery({
  data,
  key,
}: {
  data: ImageGalleryFragmentQuery;
  key: string;
}) {
  const gallery = data?.imageGallery;

  return (
    <ModularLayoutWrapper data={data?.layoutOptions}>
      <div className="modular-image-gallery-container">
        {gallery.map((img: ImageFragmentQuery) => (
          <div className="glass-card-dark tech-stack-image">
            <MyImage img={img} />
          </div>
        ))}
      </div>
    </ModularLayoutWrapper>
  );
}
