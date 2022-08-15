import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100%;
  padding: 6rem 0;
  background-color: #39ac37;
  text-align: center;
`;

const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 80rem;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Button = styled.a`
  margin-top: 1rem;
  padding: 0.9375rem 2rem;
  width: auto;
  color: #000;
  font-size: 1rem;
  text-decoration: none;
  line-height: 1.5rem;
  font-weight: bold;
  text-align: center;
  border: 0.0625rem solid #39ac37;
  border-radius: 0.25rem;
  background: #fff;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #000;
    border-color: #000;
  }
`;

const CtaGreen = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Make your meetings more <br />
                    interactive with Slido.
                </Title>
                <ButtonContainer>
                    <Button>Try it free</Button>
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
};

export default CtaGreen;