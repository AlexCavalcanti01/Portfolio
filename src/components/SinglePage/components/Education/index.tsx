import * as C from './styles';

import { Box } from './components/Box';

import  PersonImg from '../../../../assets/arte-pessoa-estrelas.svg';
import PlanetImg from '../../../../assets/arte-planeta.svg';

export const Education = () => {
    return (
        <C.Container>
            <C.ImgPlanet src={PlanetImg} />
            <C.Title> Educação e Experiencias</C.Title>
            <Box />
            <C.ImgPerson src={PersonImg} />  
        </C.Container>
    );
}