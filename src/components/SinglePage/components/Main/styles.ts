import styled from "styled-components";

export const Container = styled.div`
    max-width: 144rem;
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--body);
`;
// =================== Img =====================//
export const Img = styled.img`
    width: 60%;
`;
// =================== Description =====================//
export const AreaDescription = styled.div`
    width: 44.3rem;
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-left: 2.5rem;
    margin-left: 5rem;
`;
export const Title = styled.h3`
    font-size: 2.4rem;
    line-height: 3.3rem;

    color: rgba(256, 256, 256, 0.6);
`;
export const Name = styled.h2`
    font-size: 3.6rem;
    line-height: 4.9rem;
`;
export const Text = styled.p`
    font-size: 2.4rem;
    line-height: 3.3rem;

    padding-top: 1rem;
    padding-bottom: 5rem;
`;
export const Bnt = styled.button`
    background: var(--buttons);
    border-radius: 10px;

    padding: 15px 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`;
export const BntText = styled.p`
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.7rem;
    text-align: center;

    color: #FFFFFF;
`;
export const BntImg = styled.img``;