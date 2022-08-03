import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--body);
`;
export const Title = styled.h2`
    font-weight: 800;
    font-size: 3.6rem;
    line-height: 4.9rem;
    text-align: center;

    padding-top: 6.4rem;
    padding-bottom: 14.4rem;
`;
export const CardArea = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(150px, 400px));
    grid-template-rows: 288px 288px;
    grid-column-gap: 5.8rem;
    grid-row-gap: 9.5rem;

    justify-content: center;
    padding-right: 3rem;
`;
export const Img = styled.img`
    width: 60%;
    padding-top: 8rem;
`;