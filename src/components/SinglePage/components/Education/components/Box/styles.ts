import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
                         "   .     oneBox  oneBox "
                         " twoBox  twoBox     .   ";
    grid-row-gap: 10.8rem;
`;
export const OneBoxArea = styled.div`
    width: 100%;
    height: 33.2rem;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 8.2rem;

    background: var(--sections);

    grid-area: oneBox;
`;
export const TwoBoxArea = styled.div`
    width: 100%;
    height: 33.2rem;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 8.2rem;

    background: var(--sections);

    grid-area: twoBox;
`;
export const BoxOne = styled.div`
    width: 37rem;
    height: 31.8rem;
`;
export const BoxTwo = styled.div`
    width: 37rem;
    height: 31.8rem;
`;
export const BoxTitle = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 1.7rem;
    line-height: 2.5rem;
    text-align: center;
`;
export const Yellow = styled.div`
    width: auto;
    height: 0.6rem;
    margin-top: 2rem;

    background: var(--buttons);
`;
export const BoxText = styled.p`
    width: auto;
    height: auto;

    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;

    padding-top: 2.3rem;
    padding-left: 1.3rem;
`;
