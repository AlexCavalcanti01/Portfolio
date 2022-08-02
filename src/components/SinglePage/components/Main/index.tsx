import * as C from './styles';

import Img from '../../../../assets/arte-inicial.svg';
import WppIcon from '../../../../assets/wpp-icon.svg';

export const Main = () => {
    return (
        <C.Container>
            <C.AreaDescription>
                <C.Title>Meu nome é</C.Title>
                <C.Name>ALEXSANDER SANTOS</C.Name>
                <C.Text>DESENVOLVEDOR FRONT-END JR.</C.Text>
                <C.Bnt href='https://wa.me/5581984125796' target="_blank"><C.BntImg src={WppIcon}/><C.BntText>FALE COMIGO</C.BntText></C.Bnt>
            </C.AreaDescription>
            <C.Img src={Img} />
        </C.Container>
    );
}