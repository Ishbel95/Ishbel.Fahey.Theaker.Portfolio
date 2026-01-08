import React from "react";
import MyImage from "../data/MyImage";
import ImageGalleryFragmentQuery from "@/models/fragments/ImageGalleryBlockInterface";
import { ImageFragmentQuery } from "@/models/fragments/ImageGalleryBlockInterface";
export default function ModularImageGallery({
  data,
  key,
}: {
  data: ImageGalleryFragmentQuery;
  key: string;
}) {
  const gallery = data?.imageGallery;

  return (
    <div className={``} key={key}>
      <div className="modular-inner">
        <div className="modular-image-gallery">
          {gallery.map((img: ImageFragmentQuery) => (
            <div className="glass-card-light tech-stack-image">
              <MyImage img={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
