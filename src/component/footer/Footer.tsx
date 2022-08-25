import styled from "@emotion/styled";
import FooterLinks from "./link/FooterLinks";
import FooterSocials from "./social/FooterSocials";
import FooterCopyright from "./copyright/FooterCopyright";

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 1.5rem;
  font-size: .875rem;
  line-height: 1.5rem;
`;

const Footer = () => {
    return (
        <Container>
            <FooterLinks />
            <FooterSocials />
            <FooterCopyright />
        </Container>
    )
};

export default Footer;