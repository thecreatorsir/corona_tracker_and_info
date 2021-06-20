import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  async function setCounter() {
    const data = await fetch(
      "https://api.countapi.xyz/hit/coronaTracker/visits"
    );
    const res = await data.json();
    setcount(res.value);
  }
  useEffect(() => {
    setCounter();
  }, []);

  return (
    <div>
      <h5>Page Hits : {count}</h5>
    </div>
  );
}

export default Counter;
