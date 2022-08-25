import styled from "@emotion/styled";
import QuestionHeader from "./QuestionHeader";
import {useState} from "react";
import QuestionHelpList from "./QuestionHelpList";

const Container = styled.div`
  position: fixed;
  width: 400px;
  max-height: 45rem;
  background: #f0f2f8;
  overflow: hidden;
  z-index: 10;
  box-sizing: border-box;
  transition: all 0.2s ease-out;
  border: 0;
  padding: 0;
  opacity: 1;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 24%);
  bottom: 3.75rem !important;
  height: calc(100% - 3.75rem - 5rem - 1.25rem);
  border-radius: 0.5rem 0;
  right: 1rem;
`;

const QuestionMain = ({setPopupVisible, setSendVisible}:
                          {setPopupVisible: (popupVisible: boolean) => void;
                              setSendVisible: (sendVisible: boolean) => void}) => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <Container>
            <QuestionHeader showSearch={showSearch} setPopupVisible={setPopupVisible} setSendVisible={setSendVisible} setShowSearch={setShowSearch} />
            {!showSearch && (
                <QuestionHelpList></QuestionHelpList>
            )}
        </Container>
    )
};

export default QuestionMain;