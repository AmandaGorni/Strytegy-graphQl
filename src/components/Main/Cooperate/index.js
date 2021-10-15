import React from "react";
import * as S from './style' 

import HtmlParser from "react-html-parser";
import { graphql, useStaticQuery } from "gatsby";

export function Cooperate (){

    const data = useStaticQuery(graphql`
    
    query{
        alldata{
            projects {
            depoTitle
            depParagraph {
                html
            }
            collaborateTitle
            collabParagraph
            btnCreate
      }
    }
}
    `)

    const { depoTitle,
        depParagraph,
        collaborateTitle,
        collabParagraph,
        btnCreate} = data.alldata.projects[0]

    return(
        <>
        <S.EvidenceContainer>
        <S.EvidenceBox>
        <h2>{depoTitle}</h2>
        <article>{HtmlParser(depParagraph.html)}</article>
        </S.EvidenceBox>
        <div>
            <S.BorderWave xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 120">
            <path fill="#ede8f8" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,135.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </S.BorderWave>
        </div>
        </S.EvidenceContainer>      
        <S.CollaborateContainer>
        <S.CollaborateBox>
        <h2>{collaborateTitle}</h2>
        <p>{collabParagraph}</p>
        <button>{btnCreate}</button>
        </S.CollaborateBox>
        </S.CollaborateContainer>
        </>
    )
}