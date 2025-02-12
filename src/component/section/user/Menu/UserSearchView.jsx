import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchData } from "../../../COnfig/Net_conn";

export const UserSearchView = () => {
  const query = new URLSearchParams(useLocation().search).get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchData(query)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hasil Pencarian</h1>
      <p className="text-lg text-gray-700">Menampilkan hasil untuk: {query}</p>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {results.map((item, index) => (
          <li key={index} className="border p-2 my-2 rounded-md">
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
