import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {css} from "@emotion/react";

const Container = styled.div<{show: boolean}>`
  ${({show}) => show ? css`display: flex` : css`display: none`}
  
  transform: none;
  bottom: 1rem;
  right: 6.75rem;
  
  left: auto;
  padding: 2rem;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
  
  position: fixed;
  background-color: #fff;
  width: calc(100% - 1.5rem);
  max-width: 27.5rem;
  flex-direction: column;
  border-radius: 0.25rem;
  z-index: 5;
  transition: .3s;
`;

const ManagerContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ManagerImg = styled.img`
  max-width: 5.5rem;
  height: auto;
  padding-right: 1rem;
  display: block;
`;

const Manager = styled.div`
  display: block;
`;

const BannerTitle = styled.h2`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.375rem;
  font-weight: 700;
  color: #000;
`;

const BannerText = styled.p`
  color: #000;
  font-size: 1rem;
  line-height: 1.5rem;
  
  a {
    color: #39ac37;
    cursor: pointer;
    text-decoration: underline;
    
    :hover {
      text-decoration: none;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: .875rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 0.25rem;
  border: 0.037rem solid #39ac37;
  color: #000;
  background-color: #fff;
  min-width: calc(calc(100% - 1.5rem) / 1.95);
  
  :hover {
    background-color: #000;
    color: #fff;
  }
`;

const ManagerBanner = () => {

    const [managerVisible, setManagerVisible] = useState(false);

    useEffect(() => {
        async function initializeManagerValue() {
            const visible = window.localStorage.getItem('manager-cookie');
            const value = JSON.parse(visible ?? 'true');

            if (value) {
                setManagerVisible(value);
            }
        }

        initializeManagerValue();
    }, []);

    const hideManagerBanner = () => {
        setManagerVisible(false);
        window.localStorage.setItem('manager-cookie', 'false');
    };

    return (
        <Container show={managerVisible}>
            <ManagerContainer>
                <ManagerImg src={"/icons/cookie.svg"} alt={"cookie symbol."}/>
                <Manager>
                    <BannerTitle>Your privacy matters.</BannerTitle>
                    <BannerText>
                        We use <a>cookies</a> to improve your experience, analyze traffic, and serve personalized ads. <a>Privacy settings</a>.
                    </BannerText>
                </Manager>
            </ManagerContainer>
            <ButtonsContainer>
                <Button onClick={hideManagerBanner}>Reject all</Button>
                <Button onClick={hideManagerBanner}>Allow all</Button>
            </ButtonsContainer>
        </Container>
    )
};

export default ManagerBanner