import styled from "@emotion/styled";

const Container = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const LinkList = styled.li`
  white-space: nowrap;
  margin-left: 2.813rem;
  text-align: center;
`;

const LinkButton = styled.button`
  text-decoration: none;
  color: inherit;
  border: none;
  background: transparent;
  font-family: inherit;
  cursor: pointer;
  font-size: .875rem;
  
  :hover {
    color: #39ac37;
    text-decoration: underline;
  }
`;

const SocialLink = () => {
    return (
        <Container>
            <LinkList>
                <LinkButton>Privacy Settings</LinkButton>
            </LinkList>
            <LinkList>
                <LinkButton>Status Page</LinkButton>
            </LinkList>
        </Container>
    )
};

export default SocialLink;