import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import { Card } from "../../../bases/Card/Card";
import { searchData } from "../../../COnfig/Net_conn";

const UserSearchView = () => {
  const query = new URLSearchParams(window.location.search).get("q");
  const [jasaList, setJasaList] = useState([]);
  const [error, setError] = useState(null); // Define the error state

  useEffect(() => {
    if (query) {
      searchData(query)
        .then(setJasaList)
        .catch((err) => {
          console.error(err);
          setError("An error occurred while fetching data."); // Set the error message
        });
    }
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <div className="flex-grow p-4">
        <section className="max-w-screen-xl mx-auto py-10 mt-10">
          <div className="container mx-auto p-4">
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error if exists */}
            <div
              id="resultContainer"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {jasaList.length > 0 ? (
                jasaList.map((jasa) => (
                  <Card
                    key={jasa.id}
                    source={jasa.image_url}
                    title={jasa.title}
                    description={jasa.description}
                    price={jasa.price}
                    category={jasa.category}
                    location={jasa.location}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  Tidak ada hasil ditemukan.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserSearchView;
