"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormInputInterface } from "@/models/fragments/FormBlockInterface";

export default function CustomSelect({
  selectData,
}: {
  selectData: FormInputInterface;
}) {
  const [selectedValue, setSelectedValue] = useState(
    "Please select an enquiry type",
  );
  const [selectOpen, setSelectOpen] = useState(false);

  const handleSelectMenu = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="custom-select">
      <div
        className="custom-select-inner display-flex"
        onClick={() => setSelectOpen(!selectOpen)}
      >
        <p className="custom-select-value">{selectedValue}</p>
        <button
          type="button"
          onClick={() => setSelectOpen(!selectOpen)}
          className={`custom-select-button-${selectOpen ? "open" : "closed"}`}
        >
          <FontAwesomeIcon icon={selectData.selectIcon} />
        </button>
        <div className={`custom-select-menu-${selectOpen ? "open" : "closed"}`}>
          {selectData.selectOptions.map(({ string, id }) => (
            <p
              key={id}
              onClick={() => {
                handleSelectMenu(string);
                setSelectOpen(false);
              }}
              className="custom-select-item"
            >
              {string}
            </p>
          ))}
        </div>
      </div>

      <select
        id={selectData.name}
        name={selectData.name}
        hidden
        aria-readonly
        defaultValue={selectedValue}
      >
        {selectData.selectOptions.map(({ string, id }) => (
          <option key={id} value={string}>
            {string}
          </option>
        ))}
      </select>
    </div>
  );
}
