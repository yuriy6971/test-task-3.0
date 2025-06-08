import React from "react";
import s from "./UsersPage.module.css";
import Users from "../../components/users/Users";
import Butt_ShowMore from "../../assets/buttons/Butt_ShowMore";

const UsersPage = () => {
  return (
    <div className={s.users_container}>
      <h2 className={s.users_title}>Working with GET request</h2>

       <div className={s.butt_show_more}>
        <Butt_ShowMore />
      </div>

      <div className={s.block_users}>
        <Users />
      </div>
      <div className={s.butt_show_more}>
        <Butt_ShowMore />
      </div>
    </div>
  );
};

export default UsersPage;
