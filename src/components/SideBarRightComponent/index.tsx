import * as S from './styles';

export type SideBarRightProps = {
    text: string;
    img: string;
};

const SideBarRightComponent: React.FC<SideBarRightProps> = ({ text, img }) => (
    <S.Container>
        <S.IconeImg src={img} />
        <S.Text>{text}</S.Text>
    </S.Container>
);

export default SideBarRightComponent;
