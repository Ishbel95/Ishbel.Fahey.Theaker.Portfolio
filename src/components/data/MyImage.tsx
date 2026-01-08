import React from "react";
import Image from "next/image";
export default function MyImage({ img, key }: { img: any; key: string }) {
  const { src, width, height, alt, url, title } = img;
  return (
    <div className="image-container">
      <Image
        key={key}
        src={src ?? url}
        width={width}
        height={height}
        alt={alt}
        title={title}
      />
    </div>
  );
}
