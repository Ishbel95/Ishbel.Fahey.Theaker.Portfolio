import IconBlockFragmentQuery from "../fragments/IconBlockInterface";

export default interface FooterModelQuery {
  footer: {
    footerLinks: {
      link: {
        value: JSON;
        blocks: {
          IconBlockRecord: IconBlockFragmentQuery;
        };
      };
    };
  };
}
