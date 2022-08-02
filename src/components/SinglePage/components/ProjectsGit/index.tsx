import * as C from './styles';

import Img from '../../../../assets/arte-astronauta.svg';

import { Card1 } from './components/Card1';
import { Card2 } from './components/Card2';
import { Card3 } from './components/Card3';
import { Card4 } from './components/Card4';
import { Card5 } from './components/Card5';
import { Card6 } from './components/Card6';

export const ProjectsGit = () => {
    return (
        <C.Container>
           <C.Title>Projetos</C.Title>
           <C.CardArea>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
                <Card6 />
           </C.CardArea> 
           <C.Img src={Img} />
        </C.Container>
    );
}