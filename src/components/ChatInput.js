import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function ChatInput() {

    const sendMessage = e => {
        e.preventDefault(); // prevents refresh
    }

    return (
        <ChatInputContainer>
            <form action="" >
                <input placeholder={`Message #ROOM`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    
`;