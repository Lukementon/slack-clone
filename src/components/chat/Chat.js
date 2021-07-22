import styled from "styled-components";

export const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 60px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

export const ChatMessages = styled.div``;

export const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
