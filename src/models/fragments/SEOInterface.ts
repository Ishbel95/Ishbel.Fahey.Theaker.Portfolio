import {
  TitleMetaLinkTag,
  SeoOrFaviconTag,
  isSeoOrFaviconTag,
} from "react-datocms";

export type SeoFavicon = SeoOrFaviconTag;

export default interface SEOfragmentQuery extends TitleMetaLinkTag {
  title: string;
  description: string;
}
