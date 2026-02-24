export default interface FooterModelQuery {
  footer: {
    footerLinks: {
      id: string;
      socialIcon: object;
      socialLinkText: string;
      socialLink: string;
    }[];
  };
}
