import React, { useRef, useState } from "react";
import firebase from "@firebase/app-compat";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import styled from "styled-components";
import Feathericon from "feather-icons-react";
import { useAuthState } from "react-firebase-hooks/auth/";

import { db, auth } from "../../Firebase/Firebase";

const ChatInput = ({ roomId, roomName , bottomChatRef }) => {
  //[step 8] get info => googel with useAuthState

  const [user] = useAuthState(auth);
  //[step 10 ] add messages in room database  => room id
  const [inputValue, setInputValue] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    const {uid} = auth.currentUser;
    if (roomId) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        message: inputValue,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        uid,
        userImg: user.photoURL,
      });
      bottomChatRef.current.scrollIntoView({
        behavior: "smooth",
      });

      // do empty input value ""
      setInputValue("");
    }
    
  };
  
  return (
    <ChatInputContainerC>
      <form className={roomId ? "d-block" : "d-none"}>
        <div className="row">
          <div className="col-12">
            <div className="row ">
              <div className="col-10">
                <InputContainerC>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`ارسال رسالة الي ${roomName}`}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </InputContainerC>
              </div>
              <div className="col-2">
                <ButtonContainerC>
                  <button
                    type="submit"
                    className="btn"
                    disabled={inputValue.trim() ? false : true}
                    onClick={sendMessage}
                  >
                    <Feathericon icon="send" color="#fff" />
                  </button>
                </ButtonContainerC>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ChatInputContainerC>
  );
};

export default ChatInput;

const ChatInputContainerC = styled.div`
  border-radius: 10px;
  > form {
    position: fixed;
    width: 70%;
    bottom: 20px;
  }
`;

const InputContainerC = styled.div`
  width: 100%;

  > input {
    width: 100%;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
  }
`;
const ButtonContainerC = styled.div`
  > button {
    background: #962696;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: 3px;
  }
`;
