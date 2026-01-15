import { FooterQuery } from "@/queries/FooterQuery";
import { getDatoCmsData } from "@/util/util";
import React from "react";
import MyStructuredText from "./data/MyStructuredText";

export default async function Footer() {
  const data = await getDatoCmsData({ query: FooterQuery });
  return (
    <div className="footer-container">
      {data.footer.footerLinks.map((link: any, index: string) => (
        <MyStructuredText key={index} data={link.link} />
      ))}
    </div>
  );
}
