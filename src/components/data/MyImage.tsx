import React from "react";
import Image from "next/image";
import { ResponsiveImage } from "@/models/fragments/ImageBlockInterface";
import { ImageFragmentQuery } from "@/models/fragments/ImageGalleryBlockInterface";
export default function MyImage({
  img,
  key,
}: {
  img: ResponsiveImage | ImageFragmentQuery;
  key?: string;
}) {
  const src = "src" in img ? img.src : img.url;
  return (
    <div className="image-container">
      <Image
        key={key}
        src={src}
        width={img?.width}
        height={img?.height}
        alt={img?.alt}
        title={img?.title}
      />
    </div>
  );
}
