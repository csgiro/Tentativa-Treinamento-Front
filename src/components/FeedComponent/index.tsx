import { useState, useEffect } from 'react';
import PiusServices from 'services/PiusService';
import * as S from './styles';

export type FeedComponentProps = {
    id: string;
    img: string;
    name: string;
    text: string;
    heart: number;
    emoji: string;
};

const FeedComponent: React.FC<FeedComponentProps> = ({
    img,
    name,
    text,
    heart,
    emoji,
    id
}) => {
    const [isLiked, setIsLiked] = useState(false);

    const [numberLike, setNumberLike] = useState(heart);

    async function handleLike() {
        const response = await PiusServices.PiuLike(id);
        if (response.operation === 'like') setNumberLike(numberLike + 1);
        else setNumberLike(numberLike - 1);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        async function aux() {
            const user = await PiusServices.getUser(
                '3c0e589d-daa2-47d6-890b-3a24c136b423'
            );
            if (user.likes.find((like) => like.piuId === id)) setIsLiked(true);
        }

        aux();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.Feed>
            <S.FeedTop>
                <S.IconeImg src={img} />
                <S.Text>{name}</S.Text>
            </S.FeedTop>
            <S.FeedText>
                <S.Text>{text}</S.Text>
            </S.FeedText>
            <S.FeedBottom>
                <S.HeartContainer onClick={handleLike}>
                    <S.IconHeart
                        src={
                            isLiked
                                ? '/assets/HeartRed.svg'
                                : '/assets/Heart.svg'
                        }
                    />
                    <S.Heart>{numberLike}</S.Heart>
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
};

export default FeedComponent;
