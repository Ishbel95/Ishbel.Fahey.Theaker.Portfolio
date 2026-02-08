import React from "react";

export default function LoadingScreen() {
  return (
    <section>
      <div className="loading-container ">
        <div className="loading-spinner" />
        <div className="loading-text">
          <h3>Loading...</h3>
        </div>
      </div>
    </section>
  );
}
