import * as S from './styles';

export type FeedComponentProps = {
    img: string;
    name: string;
    text: string;
    heart: string;
    emoji: string;
};

const FeedComponent: React.FC<FeedComponentProps> = ({
    img,
    name,
    text,
    heart,
    emoji
}) => (
    <S.Feed>
        <S.FeedTop>
            <S.IconeImg src={img} />
            <S.Text>{name}</S.Text>
        </S.FeedTop>
        <S.FeedText>
            <S.Text>{text}</S.Text>
        </S.FeedText>
        <S.FeedBottom>
            <S.HeartContainer>
                <S.IconHeart src="/assets/Heart.svg" />
                <S.Heart>{heart}</S.Heart>
            </S.HeartContainer>
            <S.EmojiContainer>
                <S.IconEmoji src="/assets/Emoji.svg" />
                <S.Emoji>{emoji}</S.Emoji>
            </S.EmojiContainer>
            <S.DowloadContainer src="/assets/Dowload.svg" />
            <S.AnswerContainer>
                <S.Answer>responder</S.Answer>
            </S.AnswerContainer>
        </S.FeedBottom>
    </S.Feed>
);

export default FeedComponent;
