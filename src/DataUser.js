import React from "react";

function DataUser({ data }) {
  return (
    <div>
      <h1>nama saya adalah {data.nama.toUpperCase()}</h1>
    </div>
  );
}

export default DataUser;
