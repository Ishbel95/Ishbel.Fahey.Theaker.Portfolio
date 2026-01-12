import { BodyBlockFragment } from "@/fragments/BodyBlockFragment";
import { HeroBlockFragment } from "@/fragments/HeroBlockFragment";
import { ImageBlockFragment } from "@/fragments/ImageBlockFragment";
import { LayoutOptionsBlockFragment } from "@/fragments/LayoutOptionsFragment";

export const AllModularTemplatePageQuery = `
  query ModularTemplatePageQuery($slug: String!) {
    modularTemplate(filter: { slug: { eq: $slug } }) {
      id
      internalTitle
      slug
      seo {
        title
        description
      }
      modularContent {
        ... on HeroBlockRecord {
          __typename
          id
          ...HeroBlockFragment
        }
        ... on ContentBlockRecord {
          __typename
          id
          content {
            ... on BodyBlockRecord {
              __typename
              ...BodyBlockFragment
            }
            ... on ImageBlockRecord {
              __typename
              ...ImageBlockFragment
            }
            ... on LayoutOptionBlockRecord {
              __typename
              ...LayoutOptionBlockFragment
            }
          }
        }
      }
    }
  }

  ${HeroBlockFragment}
  ${BodyBlockFragment}
  ${ImageBlockFragment}
  ${LayoutOptionsBlockFragment}
`;

export const ModularTemplatePageQuery = `
  query ModularTemplatePageQuery($slug: String!) {
    modularTemplate(filter: { slug: { eq: $slug } }) {
      id
      internalTitle
      slug
      seo {
        title
        description
      }
      modularContent {
        ... on HeroBlockRecord {
          __typename
          ...HeroBlockFragment
        }
        ... on ContentBlockRecord {
          __typename
          content {
            ... on BodyBlockRecord {
              __typename
              ...BodyBlockFragment
            }
            ... on ImageBlockRecord {
              __typename
              ...ImageBlockFragment
            }
            ... on LayoutOptionBlockRecord {
              __typename
              ...LayoutOptionBlockFragment
            }
          }
        }
      }
    }
  }

  ${HeroBlockFragment}
  ${BodyBlockFragment}
  ${ImageBlockFragment}
  ${LayoutOptionsBlockFragment}
`;

export const AllModularTemplateSlugsQuery = `
query allModularTemplateSlugsQuery {
  allModularTemplates {
    internalTitle
    id
    slug
  }
}
`;
