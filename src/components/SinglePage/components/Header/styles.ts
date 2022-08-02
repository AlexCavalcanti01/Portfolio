import styled from "styled-components";

export const Container = styled.div`
    max-width: 144rem;
    width: 100%;
    height: 10%;
    margin: auto;

    background: var(--sections);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    button {
        color: white;
        transition: transform 1s;
        transform: scale(0.8);
    }
    button:hover{
        background: var(--body);
        transform: scale(1.0);
    }
`;
export const MenuItem = styled.button`
    color: var(--text);
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.7rem;
`;