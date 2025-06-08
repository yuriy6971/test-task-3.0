
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Layout from "./components/Layout";
import Home from "./pages/homePage/Home"
import LoginPage from "./pages/loginPage/LoginPage"
import UsersPage from './pages/usersPage/UsersPage'

function App() {
  return (
    <div className="App">
         <Header />
    <Routes>
      <Route path = "/" element = {<Layout />} >
      <Route index element = {<Home />} />
      <Route path = "/login" element = {<LoginPage />} />
      <Route path = "/users" element = {<UsersPage />} /> 
      </Route>
    </Routes>

    </div>
  );
}
export default App;
