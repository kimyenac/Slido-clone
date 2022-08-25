import styled from "@emotion/styled";
import {css} from "@emotion/react";

const Wrapper = styled.div`
  top: 68px;
  position: absolute;
  background-color: #fff;
  color: #464646;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: none;
  bottom: 60px;
  overflow: hidden;
  padding-left: 22px;
  height: 600px;
`;

const Container = styled.div`
  overflow: auto;
  height: 100%;
`;

const FormTitle = styled.div`
  font-weight: 500;
  text-align: center;
  color: rgba(0 0 0 0.8);
  font-size: 17px;
  padding: 0 35px;
  line-height: 20px;
  position: relative;
`;

const FormBody = styled.div`
  margin-top: 20px;
`;

const Form = styled.div`
  margin-top: 10px;
`;

const Label = styled.div`
  text-align: left;
  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  color: rgba(0 0 0 0.6);
  padding: 2px 10px 2px 0px;
  overflow: hidden;
`;

const Field = styled.div<{height: string}>`
  border: 1px solid rgba(0, 0, 0, 0.2);
  
  input {
    margin: 0;
    width: 100%;
    ${({height}) => css`height: ${height}`};
    line-height: normal;
    background: 0 0;
    border: none;
    font-size: 12px;
    padding: 3px;
    text-align: left;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 19px;
  padding-top: 10px;
  line-height: 19px;
`;

const CheckBoxLabel = styled.label`
  padding: 0 0 0 5px;
  font-size: 12px;
  cursor: pointer;
`;

const StartChat = styled.div`
  padding: 10px 80px 2px;
`;

const StartChatButton = styled.button`
  transition: color .5s ease-out, background-color .2s ease-out, border-color .2s ease-out;
  border: 1px solid #39ac37;
  border-radius: 5px;
  min-width: 30px;
  padding: 12px 30px;
  font-size: 15px;
  line-height: 15px;
  color: #39AC37;
  cursor: pointer;
  
  :hover {
    background-color: #39ac37;
    color: #fff;
  }
`;

const SendPopupMain = ({setSendVisible}: {setSendVisible: (sendVisible: boolean) => void;}) => {

    const sendMail = () => {
        setSendVisible(false);
    }

    return (
        <Wrapper>
            <Container>
                <FormTitle>What can we help you with?</FormTitle>
                <FormBody>
                    <div>
                        <Label>
                            <label>Your email</label>
                        </Label>
                        <Field height='25px'>
                            <input type={"text"} name={'email'} required />
                        </Field>
                    </div>
                    <Form>
                        <Label>
                            <label>Type your question and contact our support</label>
                        </Label>
                        <Field height='100px'>
                            <input type={"text"} name={'message'} required />
                        </Field>
                    </Form>
                </FormBody>
                <div>
                    <CheckContainer>
                        <input type='checkbox' name='remember' required />
                        <CheckBoxLabel>
                            This is a private computer, remember me
                        </CheckBoxLabel>
                    </CheckContainer>
                </div>
                <StartChat>
                    <StartChatButton onClick={sendMail}>Start chat</StartChatButton>
                </StartChat>
            </Container>
        </Wrapper>
    )
};

export default SendPopupMain;