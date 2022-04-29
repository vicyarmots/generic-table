import * as React from "react";
import "./styles.css";
import Table from "./Table";
import { items } from "./mockData";

export default function App() {
  return (
    <div className="App">
      <Table
        headers={{
          id: "Id",
          name: "Name",
          rate: "Rate",
        }}
        items={items}
      />
    </div>
  );
}
