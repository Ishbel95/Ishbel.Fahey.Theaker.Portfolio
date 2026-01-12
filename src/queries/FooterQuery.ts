export const FooterQuery = `
query FooterQuery {
 footer {
    footerLinks {
      link {
        value
        blocks {
          ... on IconBlockRecord {
          __typename
            id
            icon
          }
        }
      }
    }
  }
}

`;
