import React from "react";
import Image from "next/image";
import { ImageFragmentQuery } from "@/models/fragments/ImageGalleryBlockInterface";
export default function MyImage({ img }: { img: ImageFragmentQuery }) {
  return (
    img.url && (
      <div className="image-container">
        <Image
          src={img.url}
          width={img?.width}
          height={img?.height}
          alt={img.alt ?? "My alt text"}
          title={img.title}
        />
      </div>
    )
  );
}
