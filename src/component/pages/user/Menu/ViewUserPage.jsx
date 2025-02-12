import React from "react";
import { UserSearchView } from "../../../section/user/Menu/UserSearchView";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";

export const ViewUserPage = () => {
  return (
    <div>
      <NavbarUser>
        <UserSearchView />
      </NavbarUser>
    </div>
  );
};
