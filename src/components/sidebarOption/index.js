import React from "react";
import "./SidebarOption";
import { db } from "../../firebase";
import { SidebarOptionChannel, SidebarOptionContainer } from "./SidebarOption";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: "10px" }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
