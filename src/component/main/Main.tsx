import styled from "@emotion/styled";
import IndexHeader from "./naming/IndexHeader";
import Logos from "./naming/Logos";
import MiddleBox from "./naming/MiddleBox";
import Cards from "./naming/Cards";
import Badges from "./naming/Badges";
import Logos2 from "./naming/Logos2";
import CtaGreen from "./naming/CtaGreen";
import Search from "./naming/Search";
import Cards2 from "./naming/Cards2";
import Cards3 from "./modal/Cards3";
import Accordion from "./accordion/Accordion";
import Customers from "./customer/Customers";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
    return (
        <Container>
            <Search />
            <IndexHeader />
            <Logos />
            <Cards3 />
            <MiddleBox />
            <Accordion />
            <Cards />
            <Badges />
            <Customers />
            <Logos2 />
            <CtaGreen />
            <Cards2 />
        </Container>
    )
}

export default Main;