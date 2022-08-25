import styled from "@emotion/styled";
import MainHeader from "./mainHeader/MainHeader";
import Utils from "./utils/Utils";
import MiddleBox from "./middleBox/MiddleBox";
import Cards from "./cards/Cards";
import Badges from "./badges/Badges";
import CompanyLogos from "./companyLogos/CompanyLogos";
import GreenPlace from "./greenPlace/GreenPlace";
import SearchForm from "./searchForm/SearchForm";
import Posts from "./posts/Posts";
import WhatIsSlido from "./whatIsSlido/WhatIsSlido";
import MainFeatures from "./mainFeatures/MainFeatures";
import Customers from "./customer/Customers";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
    return (
        <Container>
            <SearchForm />
            <MainHeader />
            <Utils />
            <WhatIsSlido />
            <MiddleBox />
            <MainFeatures />
            <Cards />
            <Badges />
            <Customers />
            <CompanyLogos />
            <GreenPlace />
            <Posts />
        </Container>
    )
}

export default Main;