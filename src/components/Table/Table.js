import React from "react";
import { VariableSizeList as List } from "react-window";
import "./Table.css";

const VirtualizedTable = ({ data = [], columnWidths = [], isLoading }) => {
  const getItemSize = (index) => {
    return 40;
  };

  const Row = ({ index, style }) => (
    <div className={`table-row`} style={style}>
      {Object.keys(data[index]).map((key, columnIndex) => (
        <div
          key={columnIndex}
          className="table-cell"
          style={{ width: columnWidths[columnIndex] }}
        >
          {data[index][key]}
        </div>
      ))}
    </div>
  );

  return (
    <div className="table-container">
      <div className="table-header">
        {Object.keys(data[0] || {}).map((key, index) => (
          <div
            key={index}
            className="table-cell"
            style={{ width: columnWidths[index] }}
          >
            {key}
          </div>
        ))}
      </div>
      {data.length === 0 ? (
        <div className="no-data">No Data Available</div>
      ) : (
        <List
          height={400}
          itemCount={data.length}
          itemSize={getItemSize}
          width={"100%"}
        >
          {Row}
        </List>
      )}
    </div>
  );
};

export default VirtualizedTable;
