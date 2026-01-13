import React from "react";

export default function MyPath({
  color,
  buttonPath,
  key,
  children,
}: {
  color?: string;
  buttonPath?: string;
  key?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${buttonPath ? "button" : "link"}-${color}`} key={key}>
      {children}
    </div>
  );
}
