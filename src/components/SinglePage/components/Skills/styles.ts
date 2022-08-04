import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 53.4rem;

    display: flex;

    background: var(--sections);
    @media(max-width: 930px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const Container1 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.6rem;

    padding-left: 15.2rem;
    @media(max-width: 930px) {
        padding-left: 2.5rem;
        padding-top: 5rem;
    }
`;
export const Title = styled.h2`
    width: 90%;
    font-style: normal;
    font-weight: 800;
    font-size: 3.6rem;
    line-height: 4.9rem;
`;
export const Text = styled.p`
    width: 100%;
    height: 25.3rem;
    @media(max-width: 930px) {
        height: auto;
        padding-bottom: 8rem;

    }
`;

export const Container2 = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 89px 89px 89px 89px;
    grid-template-rows: 91px 91px;
    grid-template-areas: "  js   .   html   .  "
                         "   .  css    .  figma";
    grid-row-gap: 2rem;
    align-content: center;
    justify-content: center;
    @media(max-width: 930px) {
        display: flex;
        gap: 2rem;
    }
    
`;
export const IconHTML = styled.img`
    grid-area: html;
    align-self: center;
    justify-self: center;

    background: var(--body);
    padding: 1.2rem 2.3rem;
    border-radius: 5px;
`;
export const IconJS = styled.img`
    grid-area: js;
    align-self: center;
    justify-self: center;

    background: var(--body);
    padding: 1.8rem 2.3rem;
    border-radius: 5px;
`;
export const IconCSS = styled.img`
    grid-area: css;
    align-self: center;
    justify-self: center;

    grid-column-start: 1;
    grid-column-end: 3;

    background: var(--body);
    padding: 1.8rem 2.3rem;
    border-radius: 5px;
`;
export const IconFIGMA = styled.img`
    grid-area: figma;
    align-self: center;
    justify-self: center;

    background: var(--body);
    padding: 1.8rem 2.3rem;
    border-radius: 5px;
    
    grid-column-start: 3;
    grid-column-end: 5;
`;
