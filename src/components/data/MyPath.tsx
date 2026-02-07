import React from "react";
import Glass from "../animation/Glass";

export default function MyPath({
  key,
  children,
  customClassNames,
  isLink,
}: {
  color?: string;
  buttonPath?: string;
  key?: string;
  children: React.ReactNode;
  customClassNames?: string;
  isLink?: boolean;
}) {
  return !isLink ? (
    <Glass classNames={`glass-path ${customClassNames}`}>
      <div className={`${"button"} ${customClassNames}`} key={key}>
        {children}
      </div>
    </Glass>
  ) : (
    <div className={`${"link"} ${customClassNames}`} key={key}>
      {children}
    </div>
  );
}
