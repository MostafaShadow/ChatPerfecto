import React from "react";
import styled from "styled-components";
import SidebarChat from "./SidebarChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth/";

const SidebarContainer = () => {
  const [user] = useAuthState(auth);

  //  [ step 2] accsess channel in this firestore data
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  // [step 1]  (add rooms in database )
  const handleAddRoom = () => {
    const channelName = prompt("قم بكتابة اسم المحموعة");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <SideContainerC>
      <div className="row">
        <div className="col-12">
          <SideInfoC>
            <div className="row">
              <div className=" col-12 col-lg-3">
                <SideInfoImgC>
                  <img
                    src={user.photoURL}
                    alt=""
                    onClick={() => auth.signOut()}
                  />
                </SideInfoImgC>
              </div>
              <div className="col-12 col-lg-8">
                <SideInfoNameC>
                  <h6>{user.displayName}</h6>
                </SideInfoNameC>
              </div>
            </div>
          </SideInfoC>

          <SideHeaderC>
            <div className="row">
              <div className="col-12">
                <SideHeaderAddC onClick={handleAddRoom}>اضافة</SideHeaderAddC>
              </div>
            </div>
          </SideHeaderC>
          <hr />
          <SideContentC>
            {/*[step 3 ] get the channel inoformation {name , id} */}
            {channels?.docs.map((doc) => (
              <SidebarChat id={doc.id} key={doc.id} title={doc.data().name} />
            ))}
          </SideContentC>
        </div>
      </div>
    </SideContainerC>
  );
};

const SideContainerC = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 3px #ebebeb;
  overflow-y: scroll;
  overflow-x: hidden !important;
  height: 100vh;
`;
const SideInfoC = styled.div`
  padding: 10px; ;
`;
const SideInfoImgC = styled.div`
  > img {
    display: block;
    border-radius: var(--RdeiusImg);
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
const SideInfoNameC = styled.div`
  > h6 {
    text-transform: capitalize;
    font-weight: 700;
    margin-top: 10px;
    color: #0e0081;
  }
`;

const SideHeaderC = styled.div`
  padding: 5px;
`;

const SideHeaderAddC = styled.button`
  width: fit-content;
  padding: 9px 28px;
  cursor: pointer;
  background-color:#e8e6e6 ;
  border-radius: 7px;
  margin-top: 10px;
  border: none;
  outline: none;
`;

const SideContentC = styled.div``;

export default SidebarContainer;
