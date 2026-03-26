import { useEffect, useState } from "react";
import type { BookingDetails, Table } from "../../types/types";
import { tables } from "../../utils/constants";

interface SelectTableProps {
  people: number;
  onPick: (data: Partial<BookingDetails>) => void;
}

export default function SelectTable({ people, onPick }: SelectTableProps) {
  const initialTableState: Table = {
    label: "",
    location: "",
    maxSeats: 1,
  };
  const [tabl, setTabl] = useState<Table>(initialTableState);

  function handleClick(t: Table) {
    if (t.label === tabl.label) {
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
          key={tableItem.label}
          className={`table ${tableItem.location}`}
        >
          <button
            className={`selection-area ${tableItem.label.toLowerCase()} ${tabl.label === tableItem.label ? "selected-table" : ""} `}
            onClick={() => {
              handleClick(tableItem);
            }}
          ></button>
        </div>
      ))}
    </div>
  );
}
