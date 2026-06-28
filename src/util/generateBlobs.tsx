export function generateBlobs(count: number) {
  return Array.from({ length: count }).map((_, index) => (
    <span key={index} className="blob blob-inner" />
  ));
}
