import { useState } from "react";

export default function TableArrangement() {
  const [tableSelected, setTableSelected] = useState("");

  const tables = [
    {
      label: "B1",
      location: "window-row",
      maxSeats: 4,
    },
    {
      label: "B2",
      location: "window-row",
      maxSeats: 4,
    },
    {
      label: "B3",
      location: "window-row",
      maxSeats: 4,
    },
    {
      label: "B4",
      location: "mid-row",
      maxSeats: 4,
    },
    {
      label: "B5",
      location: "mid-row",
      maxSeats: 4,
    },
    {
      label: "B6",
      location: "mid-row",
      maxSeats: 4,
    },
    {
      label: "T1",
      location: "two-seater",
      maxSeats: 2,
    },
    {
      label: "T2",
      location: "two-seater",
      maxSeats: 2,
    },
    {
      label: "T3",
      location: "two-seater",
      maxSeats: 2,
    },
    {
      label: "T4",
      location: "two-seater",
      maxSeats: 2,
    },
    {
      label: "T5",
      location: "two-seater",
      maxSeats: 2,
    },
    {
      label: "T6",
      location: "two-seater",
      maxSeats: 2,
    },
    {
      label: "B7",
      location: "big-table",
      maxSeats: 8,
    },
  ];

  return (
    <div className="table-container">
      {tables.map((table, idx) => (
        <div key={idx} className={`table ${table.location}`}>
          <div
            className="selection-area"
            onClick={() => {
              setTableSelected(table.label);
              if (table.label === tableSelected) {
                setTableSelected("");
              }
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
