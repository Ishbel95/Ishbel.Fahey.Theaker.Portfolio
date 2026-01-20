import { FooterQuery } from "@/queries/FooterQuery";
import { getDatoCmsData } from "@/util/util";
import React from "react";
import MyStructuredText from "./data/MyStructuredText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import Glass from "./animation/Glass";

export default async function Footer() {
  const data = await getDatoCmsData({ query: FooterQuery });
  return (
    <div className="footer-container display-flex padding-bottom-only">
      {data.footer.footerLinks.map(
        ({
          id,
          socialLink,
          socialIcon,
        }: {
          id: string;
          socialLink: string;
          socialIcon: any;
        }) => {
          return (
            <Glass classNames="glass-round">
              <a key={id} href={socialLink} className="social-link ">
                <FontAwesomeIcon icon={socialIcon} />
              </a>
            </Glass>
          );
        }
      )}
    </div>
  );
}
