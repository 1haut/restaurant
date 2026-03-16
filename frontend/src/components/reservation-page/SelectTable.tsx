import { useEffect, useState } from "react";
import type { BookingDetails, Table } from "../../types/types";
import { tables } from "../../utils/constants";

interface SelectTableProps {
  people: number;
  onPick: (data: Partial<BookingDetails>) => void;
}

export default function SelectTable({ people, onPick }: SelectTableProps) {
  const [selectedTable, setSelectedTable] = useState("");

  function handleClick(newTable: string): void {
    if (newTable === selectedTable) {
      onPick({ table: "" });
      setSelectedTable("");
    } else {
      onPick({ table: newTable });
      setSelectedTable(newTable);
    }
  }

  const initialTableState: Table = {
    label: "",
    location: "",
    maxSeats: 1,
  };

  const [tabl, setTabl] = useState<Table>(initialTableState);

  function handleClick2(t: Table) {
    if (t.label === selectedTable) {
      onPick({ table: "" });
      setTabl(initialTableState);
    } else {
      onPick({ table: t.label });
      setTabl(t);
    }
  }

  useEffect(() => {
    if (people > tabl.maxSeats) {
      setTabl(initialTableState);
    }
  }, [people]);

  return (
    <div className="table-container">
      {tables.map(tableItem => (
        <div
          tabIndex={0}
          key={tableItem.label}
          className={`table ${tableItem.location}`}
        >
          <button
            className={`selection-area ${tableItem.label.toLowerCase()} ${selectedTable === tableItem.label ? "selected-table" : ""} `}
            onClick={() => {
              (handleClick(tableItem.label), handleClick2(tableItem));
            }}
          ></button>
        </div>
      ))}
    </div>
  );
}