"use client";

import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(countInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <section className={` ${count === 100 && "loading-container-remove"}`}>
      <div className="loading-container ">
        <div className="loading-spinner" />
        <div className="loading-text">
          <h3>Loading</h3>
          <p>{count}</p>
        </div>
      </div>
    </section>
  );
}
