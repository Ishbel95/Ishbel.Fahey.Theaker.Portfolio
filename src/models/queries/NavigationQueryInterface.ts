export default interface NavigationQueryInterface {
  __typename: "navigationRecord";
  navigation: {
    id: string;
    topLevelPath: {
      links: {
        id: string;

        slug: string;
      };
    };
  };
}
