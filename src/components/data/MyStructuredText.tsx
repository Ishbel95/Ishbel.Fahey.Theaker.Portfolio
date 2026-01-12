import { StructuredText } from "react-datocms";
import Link from "next/link";
import MyImage from "./MyImage";
import MyPath from "./MyPath";
import ModularImageGallery from "../modular/ModularImageGallery";
import ModularCardCarouselBlock from "../modular/ModularCardCarouselBlock";
import ModularTimelineBlock from "../modular/ModularTimelineBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyStructuredText({
  data,
  key = undefined,
}: {
  data: any;
  key?: string;
}) {
  function getPathChildren(record: any) {
    switch (record) {
      case record?.isExternalPath:
        return <a href={record?.buttonPath}>{record?.buttonText}</a>;
      default:
        return <Link href={record?.buttonPath}>{record?.buttonText}</Link>;
    }
  }

  if (!data?.value) return null;

  const getInlineRecord = ({ record }: { record: any }) => {
    switch (record.__typename) {
      case "BlogPostRecord":
        return <a href={`/blog/${record.slug}`}>{record.title}</a>;
      default:
        return null;
    }
  };

  const getLinkToRecord = ({
    record,
    children,
  }: {
    record: any;
    children: any;
  }) => {
    switch (record.__typename) {
      case "ModularTemplateRecord":
        return (
          <MyPath color={"light"} key={record.id}>
            <Link href={`/details/${record.slug}`}>{children}</Link>
          </MyPath>
        );
      default:
        return null;
    }
  };

  const getBlockRecord = ({ record }: { record: any }) => {
    switch (record.__typename) {
      case "PathRecord":
        return (
          <MyPath
            key={record?.id}
            color={record?.color}
            buttonPath={record?.buttonPath}
          >
            {getPathChildren(record)}
          </MyPath>
        );
      case "ImageGalleryBlockRecord":
        return <ModularImageGallery data={record} key={record.id} />;
      case "CardCarouselBlockRecord":
        return <ModularCardCarouselBlock data={record} key={record.id} />;
      case "TimelineBlockRecord":
        return <ModularTimelineBlock data={record} key={record.id} />;
      case "IconBlockRecord":
        return <FontAwesomeIcon icon={record.icon} key={record.id} />;
      default:
        return null;
    }
  };

  return (
    <StructuredText
      data={data}
      key={key}
      renderBlock={getBlockRecord}
      renderInlineRecord={getInlineRecord}
      renderLinkToRecord={getLinkToRecord}
    />
  );
}
