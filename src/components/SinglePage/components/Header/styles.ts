import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10%;
    
    background: var(--sections);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    @media(max-width: 930px) {
        display: flex;
        justify-content: flex-end;
    }
`;
export const MenuItem = styled.button`
    color: var(--text);
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.7rem;
    &:hover {
        background: var(--buttons);
    }
    @media(max-width: 930px) {
        display: none;
    }
`;
export const MenuBurguer = styled.img`
    
    @media(max-width: 930px) {
        display: inline;
        width: 10%;
        padding-right: 5rem;
    }
    @media(min-width: 931px) {
        display: none;
    }
`;