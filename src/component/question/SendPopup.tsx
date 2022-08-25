import styled from "@emotion/styled";
import {css} from "@emotion/react";
import SendPopupMain from "./SendPopupMain";

const Container = styled.div<{visible: boolean}>`
  ${({visible}) => visible ? css`display: block` : css`display: none`};

  position: fixed;
  z-index: 10;
  box-shadow: none;
  border: 1px solid #eee;
  background: #fff;
  color: #464646;
  border-radius: 10px;
  
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.2s ease-out;
  padding: 0;
  opacity: 1;
  bottom: 0.1rem !important;
  height: 25rem;
  width: 350px;
  right: 0.1rem;
`;

const SendPopupHeader = styled.div`
  padding-left: 129px;
  padding-top: 25px;
  border-color: #eee;
  background-color: #fff;
  color: #464646;
  height: 100px;
`;

const SlidoLogo = styled.img`
  width: 4rem;
  height: 1.3rem;
`;

const CloseIcon = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
  margin-left: 110px;
`;

const SendPopup = ({sendVisible, setSendVisible}:
                       {sendVisible: boolean;
                           setSendVisible: (sendVisible: boolean) => void;}) => {

    const closePopup = () => {
        setSendVisible(false);
    }

    return (
        <Container visible={sendVisible}>
            <SendPopupHeader>
                <SlidoLogo src='/icons/ic_logo.svg' />
                <CloseIcon onClick={closePopup} src='/icons/feature/ic_gray_close.png' alt='Close' />
            </SendPopupHeader>
            <SendPopupMain setSendVisible={setSendVisible} />
        </Container>
    )
};

export default SendPopup;