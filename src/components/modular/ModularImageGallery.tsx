import React from "react";
import MyImage from "../myContentWrappers/MyImage";
import ImageGalleryFragmentQuery from "@/models/fragments/ImageGalleryBlockInterface";
import { ImageFragmentQuery } from "@/models/fragments/ImageGalleryBlockInterface";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import Glass from "../animation/Glass";

export default function ModularImageGallery({
  data,
}: {
  data: ImageGalleryFragmentQuery;
}) {
  const gallery = data.imageGallery;

  return (
    <ModularLayoutWrapper data={data?.layoutOptions}>
      <div className="modular-image-gallery-container">
        {gallery.map((img: ImageFragmentQuery) => (
          <Glass classNames="glass-card tech-stack-image" key={img?.id}>
            <MyImage img={img} />
          </Glass>
        ))}
      </div>
    </ModularLayoutWrapper>
  );
}
