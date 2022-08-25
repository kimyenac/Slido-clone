import styled from "@emotion/styled";
import SocialForm from "./SocialForm";
import SocialIcon from "./SocialIcon";
import SocialBadge from "./SocialBadge";
import SocialLink from "./SocialLink";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  padding: 1.25rem 0;
  margin-top: 6.25rem;
`;

const Container = styled.article`
  position: relative;
  margin: 0 auto 0 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
`;

const FooterSocials = () => {

    return (
        <Wrapper>
            <Container>
                <SocialBadge />
                <SocialIcon />
                <SocialLink />
                <SocialForm />
            </Container>
        </Wrapper>
    )
};

export default FooterSocials;