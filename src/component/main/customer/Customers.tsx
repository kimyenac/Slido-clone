import styled from "@emotion/styled";
import CustomerSlide from "./CustomerSlide";

const Container = styled.div`
  padding: 80px 104px;
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 700;
  padding-bottom: 48px;
`;

const Customers = () => {

    return (
        <Container>
            <MainTitle>
                Trusted by 860K customers worldwide
            </MainTitle>
            <CustomerSlide />
        </Container>
    )
};

export default Customers;