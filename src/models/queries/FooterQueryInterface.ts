import IconBlockFragmentQuery from "../fragments/IconBlockInterface";

export default interface FooterModelQuery {
  footer: {
    footerLinks: {
      id: string;
      socialIcon: JSON;
      socialLinkText: string;
      socialLink: string;
    }[];
  };
}
