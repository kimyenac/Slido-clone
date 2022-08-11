import styled from "@emotion/styled";

export const Icon = styled.img`
  width: 55px;
  height: 55px;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Description = styled.p`
  text-align: start;
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