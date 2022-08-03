import * as C from './styles';

import { ProjectsGit } from './components/ProjectsGit';
import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export const SinglePage = () => {
    return (
       <C.Container>
            <Header />
            <Main />
            <AboutMe />
            <ProjectsGit />
            <Skills />
            <Education />
            <Footer />
       </C.Container> 
    );
}