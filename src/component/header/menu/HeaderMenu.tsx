import styled from "@emotion/styled";
import MainMenuItem from "./MainMenuItem";
import { MainMenu } from "./types";

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 36px;
`;

type HeaderProps = {
    list: MainMenu[];
}

const HeaderMenu = ({list}: HeaderProps) => {
    return(
        <Container>
            {list.map((item) => (
                <MainMenuItem key={item.id} item={item} />
            ))}
        </Container>
    );
} ;

export default HeaderMenu;