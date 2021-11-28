import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

import styled from "styled-components";
import { selectRoomId } from "../../Features/AppSlice";
import ChatInput from "./ChatInput";
import { db } from "../../Firebase/Firebase";
import Message from "./Message";

const ChatContainer = () => {
  // [Step 7] select room id => store by = selectRoomId = (state) => state.app.roomId;
  const roomId = useSelector(selectRoomId);

  // [step 9 ] get  message in chat and save in roomMessages
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  // get details in doc
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  // scroll inner chat
  const bottomChatRef = useRef(null);
  useEffect(() => {
    bottomChatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);
  return (
    <ChatContainerC className="container">
      <div className="row">
        <div className="col-12">
          <ChatContainerHeaderC>
            <h4>{roomDetails?.data().name}</h4>
            <hr />
          </ChatContainerHeaderC>
        </div>
        <div className="col-12">
          <ChatContainerMessages>
            {/* push message in room chat */}
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImg, uid } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImg={userImg}
                  uid={uid}
                />
              );
            })}
          </ChatContainerMessages>
          <BootmChatC ref={bottomChatRef} />
        </div>
        <div className="col-12">
          <ChatContainerInput>
            <ChatInput
              bottomChatRef={bottomChatRef}
              roomId={roomId}
              roomName={roomDetails?.data().name}
            />
          </ChatContainerInput>
        </div>
      </div>
    </ChatContainerC>
  );
};

export default ChatContainer;

const ChatContainerC = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ChatContainerHeaderC = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  background: #fff;
  z-index: 44555555;
  height: fit-content;
  > h4 {
    padding-top: 20px;
    color: #000;
    font-weight: 700;
  }
  > hr {
    color: #ddd;
  }
`;

const ChatContainerMessages = styled.div`
  margin-top: 7rem;
`;
const ChatContainerInput = styled.div``;

const BootmChatC = styled.div`
  padding-bottom: 10rem;
`;
