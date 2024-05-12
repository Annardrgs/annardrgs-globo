"use client"
import React, { useState } from 'react';
import {
  HomePageContainer,
  BlackSection,
  PresentationTitleDiv,
  AnnaName,
  DevSubtitle,
  IconDiv,
  AnnaIcon,
  ColorfullSection,
  TitleDiv,
  ExperienciasTitle,
  InformationsDiv,
  IconAndTextDiv,
  Icon,
  Description,
  ProgramaEstagiarContainer,
  ProgramaTitle,
  EstagiarTitle,
  ProgramaEstagiarText,
  Agradecimento,
  AnnaIconWink
} from "./style";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HomePageContainer>
      <BlackSection>
        <PresentationTitleDiv>
          <AnnaName>Anna Clara Rodrigues</AnnaName>
          <DevSubtitle>Desenvolvedora de Software</DevSubtitle>
        </PresentationTitleDiv>
        <IconDiv>
          <AnnaIcon src="AnnaIcon.svg" />
        </IconDiv>
      </BlackSection>
      <ColorfullSection>
        <div style={{ display: 'ruby', height: '80vh' }}>
          <TitleDiv>
            <ExperienciasTitle>Experiências</ExperienciasTitle>
          </TitleDiv>
          <InformationsDiv>
            <IconAndTextDiv>
              <Icon src="faculdadeIcon.svg" />
              <Description>• Universidade Federal Fluminense - Em Curso:<br/><br/>  Bacharelado em Ciência da Computação<br/><br/>  • Universidade Cruzeiro do Sul - Em Curso:<br/><br/>Tecnólogo em Ciência de Dados</Description>
            </IconAndTextDiv>
            <IconAndTextDiv>
              <Icon src="workIcon.svg" />
              <Description>@Grupo Soma • Abril/2024 - Presente:<br/><br/>Estágio em Engenharia de Dados<br/><br/>@IBM • Abril/2022 - Abril/2024:<br/><br/>Estágio em Software Development<br/><br/>@IBM • Outubro/2020 - Abril/2022:<br/><br/>Jovem Aprendiz de Computer Operation</Description>
            </IconAndTextDiv>
            <IconAndTextDiv>
              <Icon src="diversidadeIcon.svg" />
              <Description>• Primeira experiência de Estágio;<br/><br/>• Diversidade do time;<br/><br/>• Pluralidade de ideias;<br/><br/>• Diversidade de soluções frente à desafios;<br/><br/>• Inclusão, inovação e trabalho em equipe.<br/><br/></Description>
            </IconAndTextDiv>
          </InformationsDiv>
        </div>
      </ColorfullSection>
      <BlackSection>
        <ProgramaEstagiarContainer>
          <ProgramaTitle>Programa</ProgramaTitle>
          <EstagiarTitle>Estagiar</EstagiarTitle>
          <ProgramaEstagiarText>• Globo e Tecnologia;<br/><br/>• Construção do Conhecimento;<br/><br/>• Política da Empresa;<br/><br/>• Sentimento de Pertencimento e Senso de Identidade;<br/><br/>• Relação de Troca.</ProgramaEstagiarText>
        </ProgramaEstagiarContainer>
      </BlackSection>
      <ColorfullSection>
        <Agradecimento>Obrigada!</Agradecimento>
        <AnnaIconWink 
          src={isHovered ? "AnnaIconWink.svg" : "AnnaIcon.svg"} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
        />
      </ColorfullSection>
    </HomePageContainer>
  );
}
