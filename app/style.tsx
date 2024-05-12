// style.tsx
import styled from 'styled-components';
import '../public/fonts/druk-wide-bold-cufonfonts-webfont/style.css';
import '../public/fonts/AkzidenzGrotesk/style.css';

export const HomePageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: auto;
`;

export const BlackSection = styled.div`
    height: 105vh;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
`;

export const PresentationTitleDiv = styled.div`
    max-width: 80vw;
    align-items: center;
    margin-left: 3vw;
`;

export const AnnaName = styled.p`
    font-family: 'Druk Wide Bold Bold';
    font-size: 8vw;
    height: 45vh;
    background: linear-gradient(to right, #D1076D, #FF920F);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 20vh;
    margin-bottom: 10px;
`;

export const DevSubtitle = styled.p`
    font-family: 'Druk Wide Bold Bold';
    font-size: 5vh;
    color: white;
    text-align: justify;
    line-height: 3vw;
    margin: 0;
`;

export const IconDiv = styled.div`
    padding-top: 38vh; 
    padding-right: 5.2vw;
`;

export const AnnaIcon = styled.img`
    width: 480px;
`;

export const ColorfullSection = styled.div`
    height: 105vh;
    width: 100%;
    background: linear-gradient(to right, #D1076D, #FF920F);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleDiv = styled.div`
`;

export const ExperienciasTitle = styled.p`
    font-family: 'Druk Wide Bold Bold';
    font-size: 6vw;
    color: black;
    margin: 0px;
`;

export const InformationsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    width: 55vw;
`;

export const IconAndTextDiv = styled.div`
    display: ruby;
    justify-content: center;
    margin-top: 7vh;
`;

export const Icon = styled.img`
    width: 5vw;
`;

export const Description = styled.p`
    margin-top: 8vh;
    text-align: center;
    width: 24vw;
    font-family: 'Akzidenz Grotesk Pro Light';
    font-weight: bold;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
`;

export const ProgramaEstagiarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin-top: 5vh;
`;

export const ProgramaTitle = styled.p`
    font-size: 4vw;
    margin-bottom: 0px;
    background: linear-gradient(to right, #D1076D, #FF920F);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent !important;
    font-family: 'Druk Wide Bold Bold';
`;

export const EstagiarTitle = styled.p`
    font-size: 6vw;
    margin: 0px;
    background: linear-gradient(to right, #D1076D, #FF920F);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-family: 'Druk Wide Bold Bold';
`;

export const ProgramaEstagiarText = styled.p`
    font-size: 3vh !important;
    text-align: center;
    font-family: 'Akzidenz Grotesk Pro Light';
    font-weight: bold;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    margin-top: 6vh;
`;

export const Agradecimento = styled.p`
    font-size: 6vw;
    margin: 0px;
    background: black;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-family: 'Druk Wide Bold Bold';
`;

export const AnnaIconWink = styled.img`
    width: 20vw;
    margin-top: 50px;
`;
