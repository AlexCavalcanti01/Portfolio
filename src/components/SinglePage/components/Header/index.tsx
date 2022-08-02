import * as C from './styles';

export const Header = () => {
    const Menu = [
        {id:0, name:'Sobre Mim'},
        {id:1, name:'Projetos'},
        {id:2, name:'Skills'},
        {id:3, name:'Educação'}
    ]
    return (
        <C.Container>
                {Menu.map((Props) => <C.MenuItem>{Props.name}</C.MenuItem>)}
        </C.Container>
    );
}