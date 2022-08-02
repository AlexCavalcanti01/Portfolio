import * as C from './styles';

import { BntLinkedin, BntLink } from './components/Buttons';

import Img from '../../../../assets/Img.jpg';

export const AboutMe = () => {
    return (
        <C.Container>
            <C.AreaImg>
                <C.Img src={Img} />
            </C.AreaImg>
            <C.AreaDescription>
                <C.Title>Sobre Mim</C.Title>
                <C.Text>Desenvolvedor de Software com experiência no Desenvolvimento Web utilizando frameworks Javascript como React. Possuo bons conhecimentos sobre a reprodução de layouts, responsividade, SEO e diversas outras questões relacionadas ao desenvolvimento WEB, em especial do frontend. Já atuei em projetos de alta relevância para clientes do setor de pagamentos tanto como Desenvolvedor como quanto QA.</C.Text>
                <C.BtnArea>
                    <BntLinkedin />
                    <BntLink />
                </C.BtnArea>
            </C.AreaDescription>
        </C.Container>
    );
}