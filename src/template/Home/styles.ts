import styled from 'styled-components';

export const MainBody = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 120px;
    padding: 0 120px 0 120px;
    background-color: #83c5be;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.div`
    width: 408px;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MainTitle = styled.span`
    font-family: fredoka;
    font-weight: medium;
    font-size: 64px;
`;

export const Icon = styled.img`
    width: 88px;
    height: 88px;
    border-radius: 120px;
`;

export const HeaderSearch = styled.div`
    width: 544px;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Search = styled.div`
    width: 440px;
    height: 64px;
    display: flex;
    background-color: #fafafa;
    border-radius: 8px;
    padding: 8px;
    align-items: center;
    border: 1px solid #000000;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 56px;
    outline: none;
    border: none;
    background-color: #fafafa;
    font-family: 24px;
`;

export const SearchImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const SearchProfile = styled.img`
    width: 88px;
    height: 88px;
    border-radius: 120px;
`;

export const SideBarLeft = styled.div`
    display: flex;
    width: 416px;
    height: 100vh;
    background-color: #fafafa;
    margin-left: 120px;
    border-right: 1px solid #000000;
`;

export const LeftContainerTop = styled.div`
    width: 414px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 8px;
    border-bottom: 1px solid #83c5be;
`;

export const FirstDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 8px;
`;

export const Message = styled.img`
    width: 48px;
    height: 48px;
`;

export const SearchBar = styled.div`
    width: 288px;
    height: 48px;
    display: flex;
    background-color: #fafafa;
    border-radius: 16px;
    padding: 8px;
    align-items: center;
    border: 1px solid #020303;
`;

export const SearchBarImg = styled.img`
    width: 24px;
    height: 30px;
`;

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 24px;
`;

export const WriteFeed = styled.textarea`
    width: 352px;
    height: 104px;
    border-radius: 16px;
    border: 1px solid #000000;
    padding: 8px;
    margin-top: 16px;
    font-size: 16px;
`;

export const ThinkingFeed = styled.span`
    font-family: fredoka;
    opacity: 0.5;
    font-size: 20px;
`;

export const Send = styled.button`
    font-family: Fredoka;
    font-size: 20px;
    width: 120px;
    height: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background-color: #83c5be;
    border: 1px solid #000000;
`;

export const RightContainerTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 8px 8px 8px;
    width: 416px;
    height: 616px;
    border-radius: 24px;
    background-color: #f1f1f1;
`;

export const TitleTop = styled.span`
    font-family: fredoka;
    font-weight: bold;
    font-size: 32px;
`;

export const ContainerBottom = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 8px 8px 8px;
    width: 416px;
    height: 232px;
    border-radius: 24px;
    background-color: #f1f1f1;
`;

export const TitleContainer = styled.div`
    width: 100%;
    padding: 0px 8px 0px 24px;
`;

export const TitleBottom = styled.span`
    font-family: fredoka;
    font-weight: bold;
    font-size: 32px;
`;

export const SideBarRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 416px;
    height: 100vh;
    background-color: #fafafa;
    margin-right: 120px;
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    width: 416px;
    height: 100vh;
    background-color: #fafafa;
    gap: 16px;
`;
