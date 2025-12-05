import { useEffect, useState } from "react";

export default function Comments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/comments")
      .then(r => r.json())
      .then(d => setData(d));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Comments</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
