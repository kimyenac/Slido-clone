import styled from "@emotion/styled";
import {css} from "@emotion/react";
import QuestionFooter from './QuestionFooter';
import QuestionMain from "./QuestionMain";

const Container = styled.div<{visible: boolean}>`
  ${({visible}) => visible ? css`display: block` : css`display: none`};
`;

const QuestionPopup = ({popupVisible, setPopupVisible, sendVisible, setSendVisible}:
                           {popupVisible: boolean;
                               setPopupVisible: (popupVisible: boolean) => void;
                               sendVisible: boolean;
                               setSendVisible: (sendVisible: boolean) => void }) => {

    return (
        <Container visible={popupVisible}>
            <QuestionMain setPopupVisible={setPopupVisible} setSendVisible={setSendVisible} />
            <QuestionFooter setPopupVisible={setPopupVisible} sendVisible={sendVisible} setSendVisible={setSendVisible} />
        </Container>
    )

};

export default QuestionPopup;