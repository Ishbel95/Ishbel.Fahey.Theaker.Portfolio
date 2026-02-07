import { section } from "motion/react-client";
import React from "react";
import MyPath from "./data/MyPath";
import Link from "next/link";

export default function ErrorContent() {
  return (
    <section>
      <h3>I'm sorry...</h3>
      <p>The content didn't load</p>
      <MyPath buttonPath="..">
        <Link href={"/"}>Keep browsing</Link>
      </MyPath>
    </section>
  );
}
