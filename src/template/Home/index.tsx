import SideBarLeftComponent from 'components/SideBarLeftComponent';
import SideBarRightComponent from 'components/SideBarRightComponent';
import FeedComponent from 'components/FeedComponent';

import { useEffect, useState } from 'react';

import PiusServices from 'services/PiusService';
import { Piu } from 'interfaces/Piu';
import * as S from './styles';

const HomeTemplate = () => {
    const [selected, setSelect] = useState(false);

    const [piusArray, setPiusArray] = useState<Piu[]>([]);

    useEffect(() => {
        const asyncService = async () => {
            const response = await PiusServices.getPius();
            setPiusArray(response);
        };

        asyncService();
    }, []);

    return (
        <S.MainBody>
            <S.HeaderContainer>
                <S.HeaderTitle>
                    <S.Icon src="/assets/logo.svg" />
                    <S.MainTitle>Piupiuwer</S.MainTitle>
                </S.HeaderTitle>
                <S.HeaderSearch>
                    <S.Search>
                        {!selected && <S.SearchImg src="/assets/search.svg" />}
                        <S.SearchInput
                            onFocus={() => setSelect(true)}
                            onBlur={() => setSelect(false)}
                        />
                    </S.Search>
                    <S.SearchProfile src="/assets/profileGodoy.png" />
                </S.HeaderSearch>
            </S.HeaderContainer>
            <S.Body>
                <S.SideBarLeft>
                    <S.LeftContainerTop>
                        <S.FirstDiv>
                            <S.Message src="/assets/message.svg" />
                            <S.SearchBar>
                                <S.SearchBarImg src="/assets/search.svg" />
                            </S.SearchBar>
                        </S.FirstDiv>
                        <SideBarLeftComponent
                            text="Ouuuu responde aeeeee!"
                            img="/assets/profileA.png"
                        />
                        <SideBarLeftComponent
                            text="Denovo cara??? Não..."
                            img="/assets/profileC.png"
                        />
                        <SideBarLeftComponent
                            text="Sabe se é verdade que o..."
                            img="/assets/profileM.png"
                        />
                        <SideBarLeftComponent
                            text="Como que foi lá? Me..."
                            img="/assets/profileL.png"
                        />
                        <S.Feed>
                            <S.WriteFeed
                                rows={5}
                                placeholder="No que tá pensando?"
                            />
                            <S.Send>Enviar</S.Send>
                        </S.Feed>
                    </S.LeftContainerTop>
                </S.SideBarLeft>
                <S.Middle>
                    {piusArray.map((piu) => (
                        <FeedComponent
                            name={piu.user.username}
                            text={piu.text}
                            emoji="10"
                            img={piu.user.avatar}
                            heart={piu.likes.length}
                            id={piu.id}
                        />
                    ))}
                </S.Middle>
                <S.SideBarRight>
                    <S.RightContainerTop>
                        <S.TitleTop>Assuntos do Momento</S.TitleTop>
                        <SideBarRightComponent
                            text="Preço do petróleo sobe e..."
                            img="/assets/profileGlobo.png"
                        />
                        <SideBarRightComponent
                            text="Matuê libera seu novo albu..."
                            img="/assets/profileMatue.png"
                        />
                        <SideBarRightComponent
                            text="Flamengo é considerado o..."
                            img="/assets/profileFlamengo.png"
                        />
                        <SideBarRightComponent
                            text="Luva de pedreiro irá apres..."
                            img="/assets/profileLuva.png"
                        />
                        <SideBarRightComponent
                            text="Poli Júnior é a maior e me..."
                            img="/assets/profilePoliJunior.png"
                        />
                        <SideBarRightComponent
                            text="Jade Picon respoden a pro..."
                            img="/assets/profileJade.png"
                        />
                    </S.RightContainerTop>
                    <S.ContainerBottom>
                        <S.TitleContainer>
                            <S.TitleBottom>Siga também:</S.TitleBottom>
                        </S.TitleContainer>
                        <SideBarRightComponent
                            text="Poli júnior"
                            img="/assets/profilePoliJunior.png"
                        />
                        <SideBarRightComponent
                            text="Flamengo"
                            img="/assets/profileFlamengo.png"
                        />
                    </S.ContainerBottom>
                </S.SideBarRight>
            </S.Body>
        </S.MainBody>
    );
};
export default HomeTemplate;
