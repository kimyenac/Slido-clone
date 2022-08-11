import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Login = styled.a`
  height: 24px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: left;
  cursor: pointer;
  
  :hover {
    color: #39ac37;
    text-decoration: underline solid rgb(57, 172, 55);
  }
`;

const SignUp = styled.button`
  margin-left: 2rem;
  padding: 0.935rem 2rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #39ac37;
  border-radius: 0.25rem;
  cursor: pointer;
  
  :hover {
    color: #fff;
    background-color: #000;
  }
`;


const HeaderAccount = () => {
    return (
        <Container>
            <Login>Log In</Login>
            <SignUp>Sign Up</SignUp>
        </Container>
    )
};

export default HeaderAccount