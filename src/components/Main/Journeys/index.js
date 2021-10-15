import React from "react";
import * as S from './style'
import { graphql, useStaticQuery } from "gatsby";

export function Journeys(){
    const data = useStaticQuery(graphql`
    query {
        alldata {
            projects {
                draftImg {
                  url
                }
                journeysTitle
                journeysParagraph
                teamsTitle
                teamsParagraph
            }
        }
      }
    `)

    const {draftImg, 
        journeysTitle, 
        journeysParagraph, 
        teamsTitle, 
        teamsParagraph} = data.alldata.projects[0]

    return(
    <>
    <S.JourneysContainer>
      <S.JourneysBox >
        <S.ImgDraft src={draftImg.url} alt="desenhando"/>
        <S.JourneysTextBox>
          <h2>{journeysTitle}</h2>
          <p>{journeysParagraph}</p>
        </S.JourneysTextBox>
      </S.JourneysBox>
    </S.JourneysContainer>
    <S.TeamsContainer>
      <S.TeamsBox>
        <span>
        <h2>{teamsTitle}</h2>
        <p>{teamsParagraph}</p>
        </span>
      </S.TeamsBox>
    </S.TeamsContainer>
    </>
    )
}