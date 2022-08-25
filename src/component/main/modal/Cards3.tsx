import styled from "@emotion/styled";
import {useState} from "react";
import {css} from "@emotion/react";
import ModalVideo from "./ModalVideo";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin: 2.5rem auto 2.5rem;
  padding: 5rem 2rem 3rem;
`;

const VideoCard = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: 1rem;
`;

const CardImg = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 0.75rem;

  cursor: pointer;
`;

const PlayButton = styled.div<{onHover: boolean}>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  img {
    transition: transform 0.3s;
    ${({onHover}) => onHover && css`transform: translate(-50%, -50%) scale(1.1)`}
    ${({onHover}) => !onHover && css`transform: translate(-50%, -50%) scale(1.0)`}
  }
`;

const Cards3 = () => {

    const [onHover, setHover] = useState(false);
    const [showModal, setModal] = useState(false);

    const onOver = () => {setHover(true)};
    const onLeave = () => {setHover(false)};
    const onShowClick = () => {setModal(true)};
    const onModalClose = () => {setModal(false)};

    return (
        <>
            <Container>
                <VideoCard onMouseEnter={onOver} onMouseLeave={onLeave} onClick={onShowClick}>
                    <CardImg src={'/icons/whatIsSlido/what_is_slido.png'} alt={'Video: Slido in 90 seconds.'}/>
                    <PlayButton onHover={onHover}>
                        <img src={'/icons/whatIsSlido/play_button.svg'} alt="Play button"/>
                    </PlayButton>
                </VideoCard>
            </Container>
            <ModalVideo display={showModal} onClose={onModalClose}/>
        </>
    )
};

export default Cards3;