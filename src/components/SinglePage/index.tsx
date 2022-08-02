import * as C from './styles';

import { ProjectsGit } from './components/ProjectsGit';
import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Skills } from './components/Skills';

export const SinglePage = () => {
    return (
       <C.Container>
            <Header />
            <Main />
            <AboutMe />
            <ProjectsGit />
            <Skills />
       </C.Container> 
    );
}