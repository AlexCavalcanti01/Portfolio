import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18.9rem;

    background: var(--sections);
`;
// ================= Img ==================//
export const AreaImg = styled.div`
    width: 40.2rem;
    height: 40.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background: var(--buttons);
    border-radius: 300px;
`;
export const Img = styled.img`
    width: 98%;
    height: 98%;

    border-radius: 100%;
`;
// ================= Description ==================//
export const AreaDescription = styled.div`
    width: 40%;
`;
export const Title = styled.h2`
    font-weight: 800;
    font-size: 3.6rem;
    line-height: 4.9rem;
`;
export const Text = styled.p`
    width: 57.5rem;
    height: auto;

    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;

    padding-top: 4.5rem;
    padding-bottom: 3.3rem;
`;
export const BtnArea = styled.div`
    display: flex;
    gap: 8rem;
`;