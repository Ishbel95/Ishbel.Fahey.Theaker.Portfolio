"use client";
import { section } from "motion/react-client";
import React, { useEffect, useState } from "react";
import MyStructuredText from "./data/MyStructuredText";
import { useSearchParams } from "next/navigation";
import { AllProjectQueryInterface } from "@/models/queries/ProjectQueryInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import VideoCarousel from "./VideoCarousel";

export default function ModalInner({
  data,
}: {
  data: AllProjectQueryInterface;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();
  const showModal = data.allProjects.find(
    ({ projectLink }) => projectLink === search,
  );

  const handleCloseModal = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("search");
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState(null, "", newUrl);
    } else router.back();
  };
  return (
    <div className={`modal-${showModal ? "show" : "hide"} `}>
      <div className="modal-inner display-flex">
        {showModal?.modalText && (
          <>
            <div className="modal-content ">
              <button
                type="button"
                onClick={() => handleCloseModal()}
                className="modal-exit"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <MyStructuredText data={showModal.modalText} />
            </div>
            <VideoCarousel data={showModal.demonstrationVideos} />
          </>
        )}
      </div>
    </div>
  );
}
