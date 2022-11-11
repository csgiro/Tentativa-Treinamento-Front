import styled from 'styled-components';

export const Feed = styled.div`
    width: 600px;
    height: 224px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    border: 1px solid #000000;
    border-radius: 16px;

    @media only screen and (min-width: 1880px) {
        width: 784px;
        height: 184px;
        display: flex;
        flex-direction: column;
        padding: 16px;
        gap: 8px;
        border: 1px solid #000000;
        border-radius: 16px;
    }
`;

export const FeedTop = styled.div`
    width: 334px;
    height: 56px;
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 8px;
`;

export const FeedText = styled.div`
    margin-left: 40px;
    width: 520px;
    height: 140px;

    @media only screen and (min-width: 1880px) {
        margin-left: 40px;
        width: 704px;
        height: 104px;
    }
`;

export const Text = styled.div`
    font-size: 24px;
    font-family: Fredoka;
`;

export const FeedBottom = styled.div`
    width: 100%;
    height: 96px;
    padding: 0px 40px;
    display: flex;
    justify-content: space-between;
`;

export const HeartContainer = styled.div`
    width: 44px;
    height: 16px;
    display: flex;
`;

export const IconHeart = styled.img`
    width: 16px;
    height: 16px;
`;

export const Heart = styled.span`
    font-size: 16px;
`;

export const EmojiContainer = styled.div`
    width: 44px;
    height: 16px;
    display: flex;
`;

export const IconEmoji = styled.img`
    width: 16px;
    height: 16px;
`;

export const Emoji = styled.span`
    font-size: 16px;
`;

export const DowloadContainer = styled.img`
    width: 16px;
    height: 16px;
    display: flex;
`;

export const AnswerContainer = styled.div`
    width: 80px;
    height: 16px;
    display: flex;
`;

export const Answer = styled.span`
    font-family: Fredoka;
    font-size: 16px;
`;

export const IconeImg = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 120px;
`;
