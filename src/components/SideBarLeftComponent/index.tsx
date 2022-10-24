import * as S from './styles';

export type SideBarLeftProps = {
    text: string;
    img: string;
};

const SideBarLeftComponent: React.FC<SideBarLeftProps> = ({ text, img }) => (
    <S.Container>
        <S.IconeImg src={img} />
        <S.Text>{text}</S.Text>
    </S.Container>
);

export default SideBarLeftComponent;
