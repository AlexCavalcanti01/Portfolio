import styled from "styled-components";

interface Props  {
    idActive: number;
    id: any;
} 

export const Container = styled.div`
    width: 100%;
    height: 10%;
    
    background: var(--sections);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
`;
export const MenuItem = styled.button<Props>`
    color: var(--text);
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.7rem;
    &:hover {
        background: var(--buttons);
    }
`;