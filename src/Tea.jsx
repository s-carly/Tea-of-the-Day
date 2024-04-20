import React from "react";

const BASE_URL = "https://boonakitea.cyclic.app/api";

export default function Tea() {
  const [randomThree, setRandomThree] = React.useState([]);

  async function getTeaList() {
    try {
      const response = await fetch(`${BASE_URL}/all`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRandomThree(pickRandomThree(data));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function pickRandomThree(teaList) {
    const randomThree = [];
    const teaListLength = teaList.length;

    while (randomThree.length < 3) {
      const randomIndex = Math.floor(Math.random() * teaListLength);

      if (!randomThree.includes(randomIndex)) {
        randomThree.push(teaList[randomIndex]);
      }
    }

    return randomThree;
  }

  return (
    <>
      <h1 id='title'>Tea of the Day</h1>
      {randomThree.map((teaObject) => (
        <div className='tea-info' key={teaObject.id}>
          <p id='name'>{teaObject.name}</p>
          <p>{teaObject.origin}</p>
          <p>{teaObject.description || "No description provided."}</p>
        </div>
      ))}

      <button id='btn' onClick={getTeaList}>
        Generate
      </button>
    </>
  );
}
