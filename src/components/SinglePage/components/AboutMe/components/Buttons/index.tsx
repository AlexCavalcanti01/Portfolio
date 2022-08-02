import * as C from './styles';

import LinkedinIcon from '../../../../../../assets/icon-linkedin.svg';
import LinkIcon from '../../../../../../assets/icon-link.svg';

export const BntLinkedin = () => {
    return (
        <C.Container 
            href='https://www.linkedin.com/in/alexcavalcanti01/'
            target="_blank"
            >
                <C.BntImg src={LinkedinIcon} />
                <C.BntText>Linlkedin</C.BntText>
        </C.Container>
        
    );
}

export const BntLink = () => {
    return (
        <C.Container
            href='https://drive.google.com/file/d/1l6lw41qm8ABDOo0fki7Sp0YdD7cEax9J/view?usp=sharing'
            target="_blank"
            >
            <C.BntImg src={LinkIcon} />
            <C.BntText>Currículo</C.BntText>
        </C.Container>
    );
} 