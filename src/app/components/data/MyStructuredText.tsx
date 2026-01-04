import { StructuredText } from "react-datocms";

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
      case "BlogPostRecord":
        return <a href={`/blog/${record.slug}`}>{children}</a>;
      default:
        return null;
    }
  };

  const getBlockRecord = ({ record }: { record: any }) => {
    switch (record.__typename) {
      case "ImageBlockRecord":
        return <img src={record.image.url} alt={record.image.alt} />;
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
