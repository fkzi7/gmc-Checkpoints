import React from "react";

const Filter = ({ onTitleChange, onRateChange }) => {
  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating"
        min="0"
        max="10"
        onChange={(e) => onRateChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;