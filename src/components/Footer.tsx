import { FooterQuery } from "@/queries/FooterQuery";
import { getDatoCmsData } from "@/util/util";
import MyStructuredText from "./data/MyStructuredText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import Glass from "./animation/Glass";
import FooterInner from "./FooterInner";

export default async function Footer() {
  const data = await getDatoCmsData({ query: FooterQuery });
  return <FooterInner data={data} />;
}
