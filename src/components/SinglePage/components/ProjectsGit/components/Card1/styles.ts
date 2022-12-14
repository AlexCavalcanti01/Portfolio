import styled from "styled-components";

export const Container = styled.div`
    width: 370px;
    height: 288px;
    background: var(--sections);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 30px;

    border-radius: 2rem;
    @media(max-width: 850px) {
        width: 500px;
        height: 320px;
        margin-left: -5rem;
    }
    @media(max-width: 540px) {
        width: 350px;
        height: 288px;
        margin-left: 2rem;
    }
    
`;
export const Title = styled.h2`
    font-weight: 700;
    font-size: 3rem;
    line-height: 2.5rem;

    color: var(--text);
`;
export const Text = styled.p`
    width: 95%;
    height: 12.6rem;

    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;

    color: var(--text);

    margin-top: 2.5rem;
    margin-bottom: 0.3rem;
`;
export const Bnt = styled.a`
    width: 12.4rem;
    height: 4rem;

    font-weight: 800;
    font-size: 2rem;
    line-height: 2.5rem;

    text-align: center; 
    padding-top: 0.5rem;

    color: var(--text);
    background: var(--buttons);
    border-radius: 5px;
    @media(max-width: 850px) {
        width: 95%;
    }
`;