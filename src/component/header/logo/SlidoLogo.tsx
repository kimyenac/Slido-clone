import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
`;

const LogoImg = styled.img`
  width: 4.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const SlidoLogo = () => {
    return (
        <Container>
            <LogoImg alt='Slido logo' src='/icons/ic_logo.svg' />
        </Container>
    );
};

export default SlidoLogo;