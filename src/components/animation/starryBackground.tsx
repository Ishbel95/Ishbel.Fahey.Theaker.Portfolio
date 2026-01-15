import React from "react";

export default function StarryBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="star-background-container">
      <div className="star-group-one" />
      <div className="star-group-two" />
      <div className="star-group-three" />
      {children}
    </div>
  );
}
