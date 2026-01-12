export const NavigationQuery = `
    query NavigationQuery {
    navigation {
        id
        topLevelPath {
        links {
            ... on ModularTemplateRecord {
            id
            slug
            }
        }
        value
        }
    }
    }
`;
