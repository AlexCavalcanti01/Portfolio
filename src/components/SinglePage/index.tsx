import * as C from './styles';

import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const SinglePage = () => {
    return (
       <C.Container>
            <Header />
            <Main />
            <AboutMe />
       </C.Container> 
    );
}