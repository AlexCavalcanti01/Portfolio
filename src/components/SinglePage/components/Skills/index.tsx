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
                <C.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus sapien molestie, dictum turpis quis, euismod felis. Duis hendrerit lacus eu quam pharetra, a hendrerit massa sodales. Curabitur lacinia leo nisl, sit amet suscipit turpis mollis in.</C.Text>
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