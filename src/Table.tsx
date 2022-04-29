import React from "react";
import { getValues, getKeys, isPrimitive, PrimitiveType } from "./helpers";

interface ITableItems {
  id: PrimitiveType;
}

type TableHeaders<T extends ITableItems> = Record<keyof T, string>;

interface TableProps<T extends ITableItems> {
  items: T[];
  headers: TableHeaders<T>;
}

const Table = <T extends ITableItems>(props: TableProps<T>) => {
  const tableRow = (item: T) => {
    return (
      <tr>
        {getKeys(item).map((itemProperty) => {
          return (
            <td>{isPrimitive(item[itemProperty]) ? item[itemProperty] : ""}</td>
          );
        })}
      </tr>
    );
  };

  return (
    <table>
      <thead>
        {getValues(props.headers).map((headerValue) => (
          <th>{headerValue}</th>
        ))}
      </thead>
      <tbody>{props.items.map(tableRow)}</tbody>
    </table>
  );
};

export default Table;
