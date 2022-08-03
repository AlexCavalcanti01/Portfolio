import { useState } from 'react';
import * as C from './styles';

export const Header = () => {
    const Menu = [
        {id:0, name:'Sobre Mim' },
        {id:1, name:'Projetos'},
        {id:2, name:'Skills'},
        {id:3, name:'Educação'}
    ]
    const [click, setClick] = useState(0);
    return (
        
        <C.Container >
                {Menu.map((Props) => <C.MenuItem onClick={()=>setClick(Props.id)} id={Props.id} idActive={click} key={Props.id}>{Props.name}</C.MenuItem>)}
        </C.Container>
    );
}