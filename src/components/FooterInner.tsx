"use client";
import { FooterQuery } from "@/queries/FooterQuery";
import { getDatoCmsData } from "@/util/util";
import React, { useState } from "react";
import MyStructuredText from "./data/MyStructuredText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import Glass from "./animation/Glass";
import FooterModelQuery from "@/models/queries/FooterQueryInterface";

export default function FooterInner({ data }: { data: any }) {
  const [expandFooter, setExpandFooter] = useState(false);

  return (
    <div
      className={`footer-container display-flex padding-bottom-only ${expandFooter ? "footer-expanded" : "footer-closed"}`}
    >
      <Glass classNames="glass-round footer-button">
        <button
          onClick={() => {
            setExpandFooter(!expandFooter);
          }}
        >
          Contact
        </button>
      </Glass>
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
            <Glass classNames="glass-round footer-links">
              <a key={id} href={socialLink} className="social-link">
                <FontAwesomeIcon icon={socialIcon} />
              </a>
            </Glass>
          );
        },
      )}
    </div>
  );
}
