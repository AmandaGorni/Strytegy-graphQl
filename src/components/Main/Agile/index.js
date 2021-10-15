import React from "react";
import * as S from './style'
import { graphql, useStaticQuery } from "gatsby";

export function Agile(){
  const data = useStaticQuery(graphql`
  query {
    alldata{
      projects {
        facilitiesMeet
        facilitiesShare
        facilitiesWalls
        facilitiesWork
        gifMeet {
          url
        }
        agileparagraph
        agiletitle
        meetParagraph
        meetTitle
      }
    }
  }
  `)

  const {facilitiesMeet, 
        facilitiesShare, 
        facilitiesWalls, 
        facilitiesWork, 
        gifMeet, 
        agileparagraph,
        agiletitle,
        meetParagraph,
        meetTitle
      } = data.alldata.projects[0]
    return(
      <>
    <S.AgileContainer>
      <S.AgileBox>
      {console.log("to aqui:", data)}
        <h2>{agiletitle}</h2>
        <p>{agileparagraph}</p>
      </S.AgileBox>
      <S.ProjectsContainer>
        <S.ProjectsBox>
        <h3>{facilitiesMeet}</h3>
        </S.ProjectsBox>
        <S.ProjectsBox>
          <h3>{facilitiesWalls}</h3>
        </S.ProjectsBox>
        <S.ProjectsBox>
          <h3>{facilitiesShare}</h3>
        </S.ProjectsBox>
        <S.ProjectsBox>
          <h3>{facilitiesWork}</h3>
        </S.ProjectsBox>
      </S.ProjectsContainer>
    </S.AgileContainer>
     <S.MeetContainer>
     <S.MeetBox>      
         <S.ImageGif  src={gifMeet.url} alt='quadro'/>      
       <S.MeetTextBox>
         <h2>{meetTitle}</h2>
         <p>{meetParagraph}</p>
       </S.MeetTextBox>
     </S.MeetBox>
   </S.MeetContainer>
   </>
    )
}
