import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import Filter from "./components/Filter/Filter";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (filters = {}) => {
    setIsLoading(true);
    const { typeID = 1, quantity } = filters;
    const queryStr =
      `?type_id=${typeID}` + (quantity ? `&&quantity=${quantity}` : "");

    try {
      const response = await fetch(
        `https://minizuba-fn.azurewebsites.net/api/orderlines` + queryStr
      );
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (filters) => {
    fetchData(filters);
  };

  const columnWidths = ["10%", "10%", "10%", "30%", "10%", "10%", "10%"];

  return (
    <div className="container">
      <Filter onFilterChange={handleFilterChange} />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <Table data={data} isLoading={isLoading} columnWidths={columnWidths} />
      )}
    </div>
  );
};

export default App;
