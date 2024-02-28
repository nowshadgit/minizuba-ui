import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ onFilterChange }) => {
  const [typeIDFilter, setTypeIDFilter] = useState("");
  const [quantityFilter, setQuantityFilter] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      typeID: typeIDFilter,
      quantity: quantityFilter,
    });
  };

  const typeIds = Array.from({ length: 14 }, (_, index) => index + 1);

  return (
    <div className="filter-container">
      <select
        value={typeIDFilter}
        onChange={(e) => setTypeIDFilter(e.target.value)}
      >
        {typeIds.map((currentNumber) => <option value={currentNumber}>Type {currentNumber}</option>
        )}
      </select>
      <input
        type="text"
        placeholder="Filter by Quantity"
        value={quantityFilter}
        onChange={(e) => setQuantityFilter(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;
