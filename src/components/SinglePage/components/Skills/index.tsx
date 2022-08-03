import * as C from './styles';

import IconHTML from '../../../../assets/icon-html.png';
import IconJS from '../../../../assets/icon-js.svg';
import IconCSS from '../../../../assets/icon-css.svg';
import IconFIGMA from '../../../../assets/icon-figma.svg';

export const Skills = () => {
    return (
        <C.Container>
            <C.Container1>
                <C.Title>Habilidadades</C.Title>
                <C.Text>HTML5, CSS3, JavaScript, ReactJS, React-Native, TypesScript, Responsividade, Styled-Components, Routes, Hooks, Api, Figma.</C.Text>
            </C.Container1>
            <C.Container2>
                <C.IconHTML src={IconHTML} />
                <C.IconJS src={IconJS} />
                <C.IconCSS src={IconCSS} />
                <C.IconFIGMA src={IconFIGMA} />
            </C.Container2>
        </C.Container>
    );
}