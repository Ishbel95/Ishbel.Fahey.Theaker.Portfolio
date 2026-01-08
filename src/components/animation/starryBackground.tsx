import React from "react";

export default function StarryBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="star-background-container">
      <div className="star-one" />
      <div className="star-two" />
      <div className="star-three" />
      {children}
    </div>
  );
}
