import styled from "@emotion/styled";
import { createPortal } from "react-dom";

const Wrapper = styled.div<{display: boolean}>`
  display: ${({display}) => display ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.48);
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Close = styled.img`
  position: absolute;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  top: -16.8rem;
  right: -31.5rem;
  z-index: 2;
`;

const ModalVideo = ({display, onClose}: {display: boolean; onClose: () => void}) => {
    return createPortal(
        <Wrapper display={display} onClick={onClose}>
            <Container>
                {display && (
                    <Iframe
                        width={'944'}
                        height={'531'}
                        src={'https://www.youtube.com/embed/TqZHb67kPTs?autoplay=1'}
                        title={'YouTube video player'}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    >
                    </Iframe>
                )}
                <Close src={'/icons/feature/ic_close.svg'} alt={'close-Modal'} onClick={onClose} />
            </Container>
        </Wrapper>,
        document.body
    );
};

export default ModalVideo;