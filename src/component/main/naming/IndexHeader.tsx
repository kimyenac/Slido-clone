/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import {css} from "@emotion/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  line-height: 5rem;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: -0.5px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const Horizontal = styled.div<{marginTop?: number, marginBottom?: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  ${({marginTop}) => marginTop && css`margin-top: ${marginTop}rem`}
  ${({marginBottom}) => marginBottom && css`bottom: ${marginBottom}rem`}
`;

const Button = styled.button`
  height: 56px;
  padding: 0.9375rem 2rem;
  
  width: auto;
  
  border: 0.0625rem solid #39ac37;
  color: #fff;
  background-color: #39ac37;
  border-radius: 0.25rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0.75rem 1rem;
  
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #000;
    border: 0.0625rem solid #000;
  }
`;

export const Link = styled.a`
  font-weight: 700;
  color: #39ac37;
  letter-spacing: -0.5px;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`;

const IndexHeader = () => {
    return (
        <Container>
            <Title>
                Your go-to interaction app <br/>
                for hybrid meetings
            </Title>
            <SubTitle>
                Engage your participants with live polls, Q&A, quizzes and word clouds <br />
                — whether you meet in the office, online or in-between.
            </SubTitle>
            <Horizontal marginTop={2} marginBottom={0.75}>
                <Button>Get started for free</Button>
                <Link>Schedule a demo</Link>
            </Horizontal>
            <Horizontal marginTop={3} marginBottom={2}>
                <video src={"/videos/videos_welcome.mp4"} css={css`width: 800px;`} autoPlay loop playsInline muted />
            </Horizontal>
        </Container>
    )
}

export default IndexHeader;