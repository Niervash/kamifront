import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://backend-production-c259.up.railway.app"; // Sesuaikan URL backend

export const MenuDetailView = () => {
  return (
    <div className="max-w-2xl mx-auto border rounded-lg shadow-md p-6">
      <img
        src={jasa.image_url}
        alt={jasa.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{jasa.title}</h1>
      <p className="text-gray-700 mt-2">{jasa.description}</p>
    </div>
  );
};
