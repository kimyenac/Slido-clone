import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {FooterLink} from "../type";
import FooterLinkItem from "./FooterLinkItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column-gap: 2rem;
  column-gap: 2rem;

  column-count: 2;
  margin-bottom: 1.5rem;
  hyphens: auto;

  padding-left: 2rem;
  padding-right: 2rem;

  position: relative;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const FooterLogo = styled.img`
  width: 4.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const ItemContainer = styled.ul`
  list-style: none;
  padding: 0;
  page-break-inside: avoid;
  break-inside: avoid;
`;

const FooterLinks = () => {

    const [footerLinkList, setFooterLinkList] = useState<FooterLink[]>([]);

    useEffect(() => {
        async function fetchFooterLinkList() {
            const response = await fetch("/mock/categories.json");
            const result = await response.json();
            setFooterLinkList(result.footer);
        }

        fetchFooterLinkList();
    }, []);

    return (
        <Container>
            <a href="/Users/kimyena/Desktop/React/slido-clone/public"><FooterLogo src={"/icons/ic_logo.svg"} alt={"Slido logo."} /></a>
            {footerLinkList.map((item) => {
                return (
                    <ItemContainer>
                        <FooterLinkItem key={item.id} isBold={true} title={item.name} />
                        {item.subCategories.map((subItem) => {
                            return <FooterLinkItem key={subItem.id} isBold={false} title={subItem.name} />
                        })}
                    </ItemContainer>
                )
            })}
        </Container>
    )
};

export default FooterLinks;