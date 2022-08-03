import * as C from './styles';

import GitIcon from '../../../../assets/icon-github.svg';
import LinkedinIcon from '../../../../assets/icon-linkedin-footer.svg';

export const Footer = () => {
    return (
        <C.Container>
            <C.Bnt href='https://github.com/AlexCavalcanti01' target="_blank"><C.GitHub src={GitIcon} /></C.Bnt>
            <C.Bnt href='https://www.linkedin.com/in/alexcavalcanti01/' target="_blank"><C.Linkedin src={LinkedinIcon} /></C.Bnt>
            
        </C.Container>
    );
}