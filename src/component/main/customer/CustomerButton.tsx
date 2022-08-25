import styled from "@emotion/styled";
import {useCallback, useState} from "react";

const Container = styled.div`
  position: absolute;
  top: 26rem;
  left: 5rem;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SlideButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 90px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberContainer = styled.div`
  font-weight: bold;
  font-size: 18px;
  //display: flex;
  //margin: 0 1rem;
  //font-weight: 700;
`;

const CustomerButton = ({ current, length, showPrev, showNext }:
                            { current: number;
                                length: number;
                                showPrev: () => void;
                                showNext: () => void;}) => {

    const [activate, setActivate] = useState<boolean>(true);
    const timeDir = useCallback(
        (callback: () => void) => {
            if (activate) {
                setActivate(false);
                callback();

                setTimeout(() => {
                    setActivate(true);
                }, 550);
            }
        },
        [activate]
    );

    return (
        <Container>
            <SlideButton onClick={timeDir.bind(this, showPrev)}>
                <img src='/icons/feature/slide-prev.svg' alt='이전 슬라이드' />
            </SlideButton>
            <NumberContainer>
                <span>{current}/{length}</span>
            </NumberContainer>
            <SlideButton onClick={timeDir.bind(this, showNext)}>
                <img src='/icons/feature/slide-next.svg' alt='이후 슬라이드' />
            </SlideButton>
        </Container>
    )
};

export default CustomerButton;