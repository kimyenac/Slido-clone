import styled from "@emotion/styled";
import {css} from "@emotion/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column-gap: 2rem;
  column-gap: 2rem;
  
  position: relative;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 3rem;
`;

const Container = styled.div`
  color: #999;
  text-align: center;
  display: flex;
  width: 55%;
  justify-content: space-between;
  padding-top: 1.875rem;
`;

const Copyright = styled.span`
  color: #999;
  text-align: center;
  line-height: 1.5rem;
  font-size: .875rem;
`;

const WebexLogo = styled.img`
  cursor: pointer;
`;

const FooterCopyright = () => {
    return (
        <Wrapper>
            <Container>
                <Copyright>© 2022 Cisco Systems, Inc. All rights reserved.</Copyright>
                <Copyright>
                </Copyright>
                <Copyright>
                    <WebexLogo src={'/icons/ic_webex.svg'} alt='Webex by Cisco logo.' />
                </Copyright>
                <Copyright>Slido is now part of Webex.</Copyright>
            </Container>
        </Wrapper>
    )
};

export default FooterCopyright;