import { Metadata } from "next";

export function ModularSEO({ data }: { data: any }) {
  const metaData: Metadata = {
    title: data.title,
    description: data.description,
  };

  return metaData;
}
