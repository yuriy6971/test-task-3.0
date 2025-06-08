import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import s from "./Login.module.css";
import cn from "classnames";
import {
  getPositionsThunkCreator,
  getTokenThunkCreator,
  postUserThunkCreator,
} from "../../redux/login_reducer";
import Preloader from "../common/Preloader";

const Login = () => {
  const { positions, token, toggleProfile } = useSelector(
    (state) => state.login
  );
  const { isFetching } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPositionsThunkCreator());
    dispatch(getTokenThunkCreator());
  }, []);

  

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      position_id: "1",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("position_id", data.position_id);
    formData.append("name", data.firstName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("photo", data.photo[0]);

    dispatch(postUserThunkCreator(formData, token));

    // alert(JSON.stringify(data));

    reset();
  };

 

  return (
    <div className={s.login_container}>
      { toggleProfile && <Navigate to="/users" /> }
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.block_input}>
          <div className={s.block_name}>
            <input
              className={cn(s.input_name, s.input)}
              {...register("firstName", {
                required: "Поле обязательно к заполнению...",
                minLength: {
                  value: 3,
                  message: "Миннимум 3 символа.",
                },
                maxLength: {
                  value: 10,
                  message: "Максимум 10символов.",
                },
              })}
              type="text"
              placeholder="your name..."
            />
            <div className={s.error_info}>
              {errors?.firstName && (
                <p>{errors?.firstName?.message || "Error"}</p>
              )}
            </div>
          </div>

          <div className={s.block_email}>
            <input
              className={cn(s.input_email, s.input)}
              {...register("email", {
                required: "Поле обязательно к заполнению.",
                pattern:
                  /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
              })}
              type="email"
              placeholder="your email..."
            />
            <div className={s.error_info}>
              {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
            </div>
          </div>

          <div className={s.block_tell}>
            <input
              className={cn(s.input_tel, s.input)}
              {...register("phone", {
                required: "Поле обязательно к заполнению.",
                pattern: /^[\+]{0,1}380([0-9]{9})$/,
              })}
              type="tell"
              placeholder="phone..."
            />
            <label className={s.tell_format}>+38xxxxxxxxx</label>
            <div className={s.error_tel}>
              {errors?.phone && <p>{errors?.phone?.message || "Error"}</p>}
            </div>
          </div>
        </div>

        <div className={s.block_btns}>
          <div className={s.block_radio}>
            <h5 className={s.title_position}>Select your position: </h5>

            <ul className={s.ul_radio}>
              {positions.map((item) => (
                <li key={item.id}>
                  <input
                    type="radio"
                    value={item.id}
                    {...register("position_id", {})}
                  />
                  <label> {item.name} </label>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.block_submit}>
            <div className={s.input_file}>
              <label> photo user : </label>
              <input type="file" {...register("photo", { required: true })} />
            </div>
            <button type="submit" className={cn(s.login)}>
              Sign up
            </button>
          </div>
        </div>
      </form>
      <div className={s.preload}>
        {isFetching && <Preloader />}
        
      </div>
    </div>
  );
};

export default Login;
