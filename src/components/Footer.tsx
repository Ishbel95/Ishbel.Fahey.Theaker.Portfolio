import { FooterQuery } from "@/queries/FooterQuery";
import { getDatoCmsData } from "@/util/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Glass from "./animation/Glass";
import FooterModelQuery from "@/models/queries/FooterQueryInterface";

export default async function Footer() {
  const data = (await getDatoCmsData({
    query: FooterQuery,
  })) as FooterModelQuery;
  return (
    <div
      className={`footer-container display-flex-row-desktop padding-bottom-only`}
    >
      {data.footer.footerLinks.map(
        ({
          id,
          socialLink,
          socialLinkText,
          socialIcon,
        }: {
          id: string;
          socialLink: string;
          socialLinkText: string;
          socialIcon: any;
        }) => {
          return (
            <Glass classNames="glass-pill expanding-link-container display-flex-row-center">
              <FontAwesomeIcon icon={socialIcon} />
              <a
                key={id}
                href={socialLink}
                target="_blank"
                className="expanding-link"
              >
                {socialLinkText}
              </a>
            </Glass>
          );
        },
      )}
    </div>
  );
}
