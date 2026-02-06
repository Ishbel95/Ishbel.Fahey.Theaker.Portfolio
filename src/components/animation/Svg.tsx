export default function Svg({ id, children }: { id: string; children: any }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={id}>{children}</filter>
      </defs>
    </svg>
  );
}
