import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 225%;
    background: var(--body);
    
    
`;
export const PlanetArea = styled.div`
    position: absolute;
    left: 0;
    @media(max-width: 1280px) {
        position: relative;
    }

`;
export const ImgPlanet = styled.img`
    
`;
export const ImgArea = styled.div`
    margin-top: -30rem;
    position: absolute;
    right: 0;
    @media(max-width: 1440px) {
        margin: auto;
    }
    @media(max-width: 930px) {
        height: 53.2rem;
        margin-top: 3rem;
    }
    @media(max-width: 605px) {
        height: 32rem;
        
    }
`;
export const ImgPerson = styled.img`
    @media(max-width: 930px) {height: 80%;}
    @media(max-width: 685px) {height: 65%;}
    @media(max-width: 605px) {height: 100%;}
    @media(max-width: 605px) {display: none;}

`;
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

