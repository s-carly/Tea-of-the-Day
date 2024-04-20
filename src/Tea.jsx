import React from "react";

const BASE_URL = "https://boonakitea.cyclic.app/api";

export default function Tea() {
  const [topThree, setTopThree] = React.useState([]);

  async function getTeaList() {
    try {
      const response = await fetch(`${BASE_URL}/all`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTopThree(data.slice(0, 3));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <h1 id='title'>Tea of the Day</h1>
      {topThree.map((teaObject) => (
        <div className='tea-info' key={teaObject.id}>
          <p id='name'>{teaObject.name}</p>
          <p>{teaObject.origin}</p>
          <p>{teaObject.description}</p>
        </div>
      ))}

      <button id='btn' onClick={getTeaList}>
        Generate
      </button>
    </>
  );
}
