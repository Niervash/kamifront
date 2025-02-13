import React from "react";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import { Card } from "../../../bases/Card/Card";

const UserSearchView = ({ jasaList, error }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <div className="flex-grow p-4">
        <div className="min-h-screen">
          <section className="max-w-screen-xl mx-auto py-10 mt-10">
            <div className="container mx-auto p-4">
              {error && <p className="text-red-500">{error}</p>}
              <div
                id="resultContainer"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {jasaList.map((jasa) => (
                  <Card
                    key={jasa.id}
                    source={jasa.image_url}
                    title={jasa.title}
                    description={jasa.description}
                    price={jasa.price}
                    category={jasa.category}
                    location={jasa.location}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserSearchView;
