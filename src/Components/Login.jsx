import React from "react";
import styled from "styled-components";
import img from "../chat-img.png";

import { auth, provider } from "../Firebase/Firebase";

const Login = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainerC>
      <LoginInContainerC>
        <img src={img} alt="logo" />
        <h6> تسجيل الدخول الي شات بريفكتو &#128516;</h6>
        <p>
          عباره عن غرف جماعية
          <br /> تقدر تتواصل مع ناس مختلفة بدون الكشف عن هويتك للمرح فقظ .
        </p>
        <span className="text-warning" style={{ fontSize: "10px" ,fontWeight:'400' }}>
          متجاوب فقظ مع الكومبيوتر والجهاز اللوحي
        </span>
        <button className="btn btn-primary" onClick={handleSignIn}>
          تسجيل الدخول بواستطة جوحل
        </button>
        <span>
          BY:
          <a
            href="https://www.mostafamohamed.ml/"
            target="_blank"
            rel="noreferrer"
          >
            &#9829; Mostafa Mohamed
          </a>
        </span>
        <span style={{ fontSize: "10px" }}>كل الحقوق محفوظة &copy; 2021</span>
      </LoginInContainerC>
    </LoginContainerC>
  );
};

export default Login;

const LoginContainerC = styled.div`
  background-color: #fff;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInContainerC = styled.div`
  box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 46%);
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 30px;
  }
  > p {
    font-size: 12px;
    line-height: 2;
    color: #333;
  }
  > button {
    padding: 6px;
    color: #fff;
    font-size: 13px !important;
    margin-top: 10px;
  }
  > span {
    display: block;
    margin-top: 10px;
    > a {
      text-decoration: none;
      color: #0d6efd;
    }
  }
`;
