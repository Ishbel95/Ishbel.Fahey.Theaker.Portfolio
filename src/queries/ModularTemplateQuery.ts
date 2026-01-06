import { BodyBlockFragment } from "@/fragments/BodyBlockFragment";
import { HeroBlockFragment } from "@/fragments/HeroBlockFragment";
import { ImageBlockFragment } from "@/fragments/ImageBlockFragment";
import { LayoutOptionsBlockFragment } from "@/fragments/LayoutOptionsFragment";

export const ModularTemplatePageQuery = `
  query ModularTemplatePageQuery {
    allModularTemplates {
      id
      internalTitle
      slug
      seo {
        title
        description
      }

      hero {
        ... on HeroBlockRecord {
          ...HeroBlockFragment
        }
      }

      content {
        ... on BodyBlockRecord {
          ...BodyBlockFragment
        }
        ... on ImageBlockRecord {
          ...ImageBlockFragment
        }
        ... on LayoutOptionBlockRecord {
          ...LayoutOptionBlockFragment
        }
      }
    }
  }

  ${HeroBlockFragment}
  ${BodyBlockFragment}
  ${ImageBlockFragment}
  ${LayoutOptionsBlockFragment}
`;
