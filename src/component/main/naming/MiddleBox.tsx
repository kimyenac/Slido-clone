/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Container = styled.article`
  padding: 5rem 1rem;
  text-align: center;
 
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.125;
  text-align: center;
  
  span {
    color: #39ac37;
  }
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
  letter-spacing: -0.3px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const MiddleBox = () => {
    return (
        <Container>
            <Title>
                It’s how you <span>include everyone</span> <br/>
                in your meetings
            </Title>
            <SubTitle>
                Slido gives you everything you need to engage your participants, capture their views and make everyone feel <br/>
                connected – whether you’re running a team call, training or an all-company meeting.
            </SubTitle>
        </Container>
    )
}

export default MiddleBox;