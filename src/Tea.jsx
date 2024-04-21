import React from "react";
import Card from "./components/Card";

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
      <div className='middle-container'>
        {randomThree.map((teaObject) => (
          <>
            <Card objectInfo={teaObject} key={teaObject.id} />
          </>
        ))}
      </div>
      <button id='btn' onClick={getTeaList}>
        Generate
      </button>
    </>
  );
}
