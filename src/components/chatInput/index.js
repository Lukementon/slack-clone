import { Button } from "@material-ui/core";
import React, { useState } from "react";
import firebase from "firebase";
import { auth, db } from "../../firebase";
import { ChatInputContainer } from "./ChatInput";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = e => {
    e.preventDefault();

    if (!channelId) return false;

    console.log(channelId);

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
