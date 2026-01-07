import { StructuredText } from "react-datocms";
import Link from "next/link";
import MyImage from "./MyImage";

export default function MyStructuredText({
  data,
  key = undefined,
}: {
  data: any;
  key?: string;
}) {
  if (!data.value) return null;

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
        return <Link href={`/details/${record.slug}`}>{children}</Link>;
      default:
        return null;
    }
  };

  const getBlockRecord = ({ record }: { record: any }) => {
    switch (record.__typename) {
      case "PathRecord":
        return <MyStructuredText data={record.path} />;
      //font awesome implimentation
      // case "IconBlockRecord":
      //   return <MyImage  />
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
