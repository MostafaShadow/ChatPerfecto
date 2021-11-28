import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { enterRoomFuction } from "../../Features/AppSlice";

import { useRef } from "react";

const SidebarChat = ({ title, id }) => {
  // [ step  6]  handle slect room by id on click it
  const dispatch = useDispatch();
  const handlleSelectRoom = () => {
    if (id) {
      dispatch(
        enterRoomFuction({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarChatContainerC>
      <SidebarChatContentC onClick={handlleSelectRoom}>
        <h4>{title}</h4>
      </SidebarChatContentC>
    </SidebarChatContainerC>
  );
};

export default SidebarChat;

const SidebarChatContainerC = styled.div``;

const SidebarChatContentC = styled.div`
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.5s;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;

  &:hover {
    background-color: #f7f7f7;
  }

  > h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 2;
    text-indent: 2px;
    color: #686060;
  }
`;
