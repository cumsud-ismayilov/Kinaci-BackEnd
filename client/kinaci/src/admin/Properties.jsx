import { useEffect, useState } from "react";

export default function Properties() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/properties")
      .then(r => r.json())
      .then(d => setData(d));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Properties</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
