import styled from "@emotion/styled";
import {css} from "@emotion/react";

const Container = styled.div`
  width: 100%;
  background-color: #39ac37;
  padding: 24px 24px 16px;
  color: #fff !important;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 24%);
  z-index: 2;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  justify-content: center;
`;

const HeaderTitleContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const PrevIcon = styled.img<{help: boolean}>`
  ${({help}) => help ? css`opacity: 0; cursor: default` : 'cursor: pointer;'}
`;

const HeaderTitle = styled.div`
  white-space: nowrap;
  line-height: 24px;
  font-size: 20px;
  color: #fff !important;
  font-weight: 400;
  text-align: center;
`;

const CloseIcon = styled.img`
  cursor: pointer;
`;

const SearchBox = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  font-size: 14px;
  width: 100%;
  margin: 0;
  border: none;
  border-radius: 4px;
  padding: 16px 40px;
  outline: none;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 16px;
  left: 7px;
  margin: 0;
  padding: 0 9px;
  outline: none;
`;

const QuestionHeader = ({setPopupVisible, showSearch, setShowSearch, setSendVisible}:
                            {setPopupVisible: (popupVisible: boolean) => void;
                                showSearch: boolean;
                                setShowSearch: (showSearch: boolean) => void;
                                setSendVisible: (sendVisible: boolean) => void }) => {

    const closePopup = () => {
        setPopupVisible(false);
        showHelpPopup();
        setSendVisible(false);
    }

    const showSearchPopup = () => {
        setShowSearch(true);
    };

    const showHelpPopup = () => {
        setShowSearch(false);
    };

    return (
        <Container>
            <HeaderTitleContainer>
                {showSearch && (
                    <>
                        <PrevIcon onClick={showHelpPopup} help={false} src='/icons/feature/ic_prev.svg' alt='Help로 돌아가기' />
                        <HeaderTitle>Search</HeaderTitle>
                    </>
                )}
                {!showSearch && (
                    <>
                        <PrevIcon help={true} src='/icons/feature/ic_prev.svg' alt='Help로 돌아가기' />
                        <HeaderTitle>Help</HeaderTitle>
                    </>
                )}
                <CloseIcon onClick={closePopup} src='/icons/feature/ic_close.svg' alt='Popup 닫기' />
            </HeaderTitleContainer>
            <SearchBox>
                <SearchInput onClick={showSearchPopup} placeholder='Search' />
                <SearchIcon>
                    <img src='/icons/feature/ic_search.svg' alt='search' />
                </SearchIcon>
            </SearchBox>
        </Container>
    )
};

export default QuestionHeader;