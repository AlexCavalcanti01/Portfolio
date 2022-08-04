import * as C from './styles';

import IconMenuBurguer from '../../../../assets/menu-hamburguer.svg'

export const Header = () => {
    const Menu = ['Sobre Mim', 'Projetos', 'Skills', 'Educação'];
    
    return (
        <C.Container >
                {Menu.map((Props) => <C.MenuItem>{Props.toString()}</C.MenuItem>)}
                <C.MenuBurguer src={IconMenuBurguer} />
        </C.Container>
    );
}