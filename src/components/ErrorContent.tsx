import React from "react";
import MyPath from "./myContentWrappers/MyPath";
import Link from "next/link";

export default function ErrorContent() {
  return (
    <section>
      <h3>I&aposm sorry...</h3>
      <p>The content didn&apost load</p>
      <MyPath buttonPath="..">
        <Link href={"/"}>Keep browsing</Link>
      </MyPath>
    </section>
  );
}
