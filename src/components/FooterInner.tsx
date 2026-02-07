import { FooterQuery } from "@/queries/FooterQuery";
import { getDatoCmsData } from "@/util/util";
import React, { useState } from "react";
import MyStructuredText from "./data/MyStructuredText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import Glass from "./animation/Glass";
import FooterModelQuery from "@/models/queries/FooterQueryInterface";

export default function FooterInner({ data }: { data: any }) {
  return (
    <div className={`footer-container display-flex padding-bottom-only`}>
      {/* <Glass classNames="glass-round footer-button">
        <button
          onClick={() => {
            setExpandFooter(!expandFooter);
          }}
        >
          Contact
        </button>
      </Glass> */}
    </div>
  );
}
