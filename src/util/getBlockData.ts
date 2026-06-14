import { BlockTypes } from "@/models/enums/BlockTypes";

export function getBlockData(data: any) {
  const result = data.reduce((acc: any, block?: any) => {
    const key = Object.values(BlockTypes).find(
      (type) => type === block.__typename,
    );
    if (key) {
      acc[key] = block;
    }
    return acc;
  }, {});
  return result;
}
