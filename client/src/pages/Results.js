import React from "react";
import Creations from "../components/Creations";


export default function Results() {

  return (
    <div>
      
      <h1>Results </h1>
      <main>
        <Creations/>
{/* 
        {result?.data.length > 0 ? (
        <>
          <hr />
          <div>
            <img src={result.data[0].url} alt="logo design concept" />
          </div>
        </>
        ):''} */}
      </main>
    </div>
  );
}
