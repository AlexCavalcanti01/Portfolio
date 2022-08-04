import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 138rem;
    background: var(--body);
    @media(max-width: 1440px) {
        height: 168rem;
    }
    @media(max-width: 1280px) {
        height: 235rem;
    }
    
    
`;
export const PlanetArea = styled.div`
    position: absolute;
    left: 0;
    @media(max-width: 1280px) {
        position: relative;
    }
`;
export const ImgPlanet = styled.img``;
export const ImgArea = styled.div`
    margin-top: -30rem;
    position: absolute;
    right: 0;
    @media(max-width: 1440px) {
        margin: auto;
    }
`;
export const ImgPerson = styled.img``;
export const Title = styled.h2`
    font-weight: 800;
    font-size: 3.6rem;
    line-height: 4.9rem;
    text-align: center;

    color: var(--text);
    
    padding-top: 7.2rem;
    padding-bottom: 10.5rem;
    @media(max-width: 1280px) {
        position: relative;
    }
`;

