import React from "react";
import Image from "next/image";
import { ResponsiveImage } from "@/models/fragments/ImageBlockInterface";
import { ImageFragmentQuery } from "@/models/fragments/ImageGalleryBlockInterface";
export default function MyImage({
  img,
  key,
}: {
  img: ImageFragmentQuery;
  key?: string;
}) {
  return (
    <div className="image-container">
      <Image
        key={key}
        src={img.url}
        width={img?.width}
        height={img?.height}
        alt={img.alt}
        title={img.title}
      />
    </div>
  );
}
