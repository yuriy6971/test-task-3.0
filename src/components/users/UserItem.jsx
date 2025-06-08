import React from "react";
import s from "./Users.module.css";

const UserItem = (props) => {
  const {  name, email, photo, position, phone } = props;
  return (
    <div className={s.item_container}>
      <img className={s.photo_user} src={photo} alt="pics" />
      <p className={s.user_name}>{name}</p>
      <div className={s.info_user}>
        <p className={s.user_position}>{position}</p>
        <p className={s.user_email}>{email}</p>
        <p className={s.user_phone}>{phone}</p>
      </div>
    </div>
  );
};

export default UserItem;
