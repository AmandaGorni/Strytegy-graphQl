import React from "react";
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'


export function Start (){

  const data = useStaticQuery(graphql`
  query {
    alldata {
      projects {
        title
        subtitle
        btnPlay
        imagecss {
          url
        }
      }
    }
  }
  `)

  
  const {title, subtitle, btnPlay, imagecss} = data.alldata.projects[0]

    return(
    <section >
      <div>
        <S.StartBox backgroundImg = {imagecss.url}>
          <S.StartTexts>
            <h1>{title}</h1>
            <h2 >{subtitle}</h2>
            <S.BtnstartNow >{btnPlay}</S.BtnstartNow>
          </S.StartTexts>
        </S.StartBox>
      </div>
    </section>
    )
}