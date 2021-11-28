import React from "react";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase";

const Message = ({ message, timestamp, user, userImg, uid }) => {
  return (
    <div className={"d-flex row"}>
      <div
        className={`col-12 d-flex ${
          uid === auth.currentUser.uid ? "message-sent" : "message-resevid"
        }`}
      >
        <MessagesParentC>
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          <MessageContainerC className="message-bg">
            <MessageTitelC>
              <p>{message}</p>
            </MessageTitelC>
            <MessageInfoC>
              <MessageInfoTitleC>
                <img src={userImg} alt="" />
                <h5>{user}</h5>
              </MessageInfoTitleC>
              <MessageInfoTitleC></MessageInfoTitleC>
            </MessageInfoC>
          </MessageContainerC>
        </MessagesParentC>
      </div>
    </div>
  );
};

export default Message;

const MessagesParentC = styled.div`
  margin-bottom: 20px;
  > span {
    display: inline-block;
    font-size: 13px;
    margin-right: 31px;
    opacity: 0.5;
  }
`;
const MessageContainerC = styled.div`
  width: clamp(150px, 220px, 230px);
  margin-right: 20px;
  border-radius: 15px 15px 35px 10px;
`;

const MessageTitelC = styled.div`
  padding: 5px;
  > p {
    padding: 3px;
    margin-top: 5px;
  }
`;
const MessageInfoC = styled.div`
  margin-top: 10px;
`;
const MessageInfoTitleC = styled.div`
  position: relative;
  bottom: 0;
  right: 0;
  width: fit-content;
  height: 0px;
  > img {
    position: absolute;
    top: -20px;
    right: -13px;
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: var(--RdeiusImg);
  }
  > h5 {
    font-size: 15px;
    font-weight: 700;
    margin-right: 23px;
    display: inline-block;
    text-transform: capitalize;
  }
`;
