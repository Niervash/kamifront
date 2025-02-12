import React, { useEffect, useState } from "react";
import { Card } from "../../../bases/Card/Card";
import { TitleTho } from "../../../bases/Title/Title";
import { fetchDataWithJWT } from "../../../COnfig/Net_conn";

export const UserMenuView = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataWithJWT();
        setCardsData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setCardsData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="max-w-screen-xl mx-auto py-10">
        {cardsData.length > 0 && <TitleTho title={"category"} />}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              source={card.image_url}
              title={card.title}
              description={card.description}
              price={card.price}
              category={card.category}
              location={card.location}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
