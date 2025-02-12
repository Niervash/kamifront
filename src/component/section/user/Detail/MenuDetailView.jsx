import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://backend-production-c259.up.railway.app"; // Sesuaikan URL backend

export const MenuDetailView = () => {
  const { id } = useParams();
  const [jasa, setJasa] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/jasa/${id}`)
      .then((res) => res.json())
      .then((data) => setJasa(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  if (!jasa) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto border rounded-lg shadow-md p-6">
      <img src={jasa.image_url} alt={jasa.title} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{jasa.title}</h1>
      <p className="text-gray-700 mt-2">{jasa.description}</p>
    </div>
  );
};
