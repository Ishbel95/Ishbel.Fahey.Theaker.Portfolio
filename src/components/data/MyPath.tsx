import React from "react";
import Glass from "../animation/Glass";

export default function MyPath({
  color,
  buttonPath,
  key,
  children,
  customClassNames,
}: {
  color?: string;
  buttonPath?: string;
  key?: string;
  children: React.ReactNode;
  customClassNames?: string;
}) {
  return (
    <Glass classNames="glass-path">
      <div
        className={`${buttonPath ? "button" : "link"} ${customClassNames}`}
        key={key}
      >
        {children}
      </div>
    </Glass>
  );
}
