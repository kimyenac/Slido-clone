import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
`;

const LogoImg = styled.img`
  width: 72px;
  height: 24px;
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