import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--body);
    @media(max-width: 930px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
// =================== Img =====================//
export const Img = styled.img`
    width: 50%;
    padding-top: 5rem;
    @media(max-width: 930px) {
        margin-left: -6rem;
        order: -1;
    }
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
    @media(max-width: 1080px) {
        margin-right: -5rem;
    }
    @media(max-width: 975px) {
        margin-right: -10rem;
    }
    @media(max-width: 930px) {
        width: 100%;

        padding-top: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: unset;
        margin: unset;
    }
    
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

    @media(max-width: 930px) {
        font-size: 1.9rem;
        padding-bottom: 2rem;
    }
`;
export const Bnt = styled.a`
    background: var(--buttons);
    border-radius: 10px;

    padding: 15px 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`;
export const BntText = styled.p`
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 2.7rem;
    text-align: center;

    color: #FFFFFF;
`;
export const BntImg = styled.img``;