import React from "react";
import { JumbotronCard } from "../../../../fragment/JumbotronCard/JumbotronCard";

export const UserJumbotronView = () => {
  return (
    <div>
      <div className="min-h-screen">
        <section className="max-w-screen-xl mx-auto py-30">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            <JumbotronCard />
          </div>
        </section>
      </div>
    </div>
  );
};
