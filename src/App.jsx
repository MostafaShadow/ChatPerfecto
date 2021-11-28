import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth/";
import "firebase/auth";

import Spinner from "react-spinkit";

import { auth } from "./Firebase/Firebase";
import Login from "./Components/Login";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import ChatContainer from "./Components/Chat/ChatContainer";

function App() {
  //[step 9 ] login
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <LoaderContainerC>
        <LoaderC>
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </LoaderC>
      </LoaderContainerC>
    );
  }
  return (
    <AppContainerC>
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <div className="mt-5">
            <div className="row">
              <div className="col-12">
                <div className="row justify-content-center ">
                  <div className="col-4 col-lg-3">
                    <SidebarContainer />
                  </div>
                  <div className="col-6 col-lg-8">
                    <AppBodyC>
                      <Routes>
                        <Route path="/" element={<ChatContainer />}></Route>
                      </Routes>
                    </AppBodyC>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </AppContainerC>
  );
}

export default App;

const AppContainerC = styled.div``;

const AppBodyC = styled.div``;

const LoaderContainerC = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  margin-top: -20px;
`;

const LoaderC = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
