import React from "react";
import { UserHomeView } from "../../../section/user/Home/UserHomeView";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import { UserJumbotronView } from "../../../section/user/Home/Jumbotron/UserJumbotronView";

export const HomeUserPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <div className="flex-grow bg-red-800 p-4">
        <UserJumbotronView />
      </div>
    </div>
  );
};
