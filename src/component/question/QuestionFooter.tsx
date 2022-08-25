import styled from "@emotion/styled";

const Container = styled.div`
  position: fixed;
  width: 25rem;
  background-color: #43bbc1;
  color: #fff;
  z-index: 10;
  overflow: hidden;
  box-sizing: border-box;
  transition-property: right, max-height;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  border-radius: 0 0 0.5rem 0.5rem;
  border: 0;
  padding: 0;
  opacity: 1;
  bottom: 1rem;
  right: 1rem;
  max-height: 2.75rem;
`;

const QuestionFooterButton = styled.button`
  border: none;
  background: none;
  font-size: 0.875rem;
  line-height: 1.05rem;
  padding: 0.85rem;
  text-align: center;
  color: #fff;
  width: 100%;
  cursor: pointer;
`;

const QuestionFooter = ({setPopupVisible, sendVisible, setSendVisible}:
                            {setPopupVisible: (popupVisible: boolean) => void;
                                sendVisible: boolean;
                                setSendVisible: (sendVisible: boolean) => void }) => {

    const sendPopup = () => {
        setPopupVisible(false);
        setSendVisible(true);
        console.log(sendVisible);
    }

    return (
        <Container>
            <QuestionFooterButton onClick={sendPopup}>
                Didn't find an answer? <u>Chat with us</u>
            </QuestionFooterButton>
        </Container>
    )
};

export default QuestionFooter;