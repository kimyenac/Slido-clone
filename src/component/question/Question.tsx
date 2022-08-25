import {useState} from "react";
import styled from "@emotion/styled";
import QuestionPopup from "./QuestionPopup";
import SendPopup from "./SendPopup";

const QuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: box-shadow 0.3s ease;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #39ac37;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 28%);
  cursor: pointer;
  z-index: 10;
`;

const Question = () => {

    const [popupVisible, setPopupVisible] = useState(false);
    const [sendVisible, setSendVisible] = useState(false);

    const showPopup = () => {
        setPopupVisible(true);
        setSendVisible(false);
    };

    return (
        <>
            <QuestionButton onClick={showPopup}>
                <img src={"/icons/ic_question.svg"} alt="Get Help" />
            </QuestionButton>
            <QuestionPopup popupVisible={popupVisible} setPopupVisible={setPopupVisible} sendVisible={sendVisible} setSendVisible={setSendVisible} />
            <SendPopup sendVisible={sendVisible} setSendVisible={setSendVisible} />
        </>
    )
};

export default Question;