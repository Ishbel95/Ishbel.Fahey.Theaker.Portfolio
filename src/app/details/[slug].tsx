import React from "react";
import type {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from "next";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slug: "next.js",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

// export const getStaticProps = (async(context)=>{})
