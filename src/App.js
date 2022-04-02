import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import NavBar from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Profile from "./component/Profile";
import Error from "./component/Error";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Company from "./component/Company";
import Service from "./component/Service";
import Post from "./component/Post";
import OnePost from "./component/OnePost";
//-------------------------------------------------------------
function App() {
  let [id, setId] = useState("");
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  let onBody = (data) => {
    setBody(data);
  };

  let onTitle = (data) => {
    setTitle(data);
  };

  let onId = (data) => {
    setId(data);
  };
  //-------------------------------------------------------------
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />}></Route>
          <Route path="service" element={<Service />}></Route>
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/post"
          element={<Post onBody={onBody} onTitle={onTitle} onId={onId} />}
        ></Route>
        <Route
          path="/onepost"
          element={<OnePost body={body} title={title} id={id} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
