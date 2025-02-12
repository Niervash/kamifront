import React from "react";
import JasaSearch from "../../../section/user/Menu/UserSearchView";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";

export const ViewUserPage = () => {
  return (
    <div>
      <NavbarUser>
        <JasaSearch />
      </NavbarUser>
    </div>
  );
};
