import { useEffect, useState } from "react";

export default function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/contacts")
      .then(r => r.json())
      .then(d => setData(d));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Contacts</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
