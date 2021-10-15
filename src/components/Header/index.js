import React from "react";
import * as S from './style'

import { graphql, useStaticQuery } from 'gatsby'

export function Header(){ 

const data = useStaticQuery(graphql`
    query {
     alldata {
      projects {
        logo {
            url
            }
            btnblog
            btnfaq
            btnenter
            btnlang
      }
    }
  }
`)

  
  const {logo, btnblog, btnfaq, btnenter, btnlang} = data.alldata.projects[0]

    return (
        <S.BoxHeader>
            <S.ContainerHeader>
            <S.Logo src={logo.url} alt={"logo strytegy"}/>
            <div>
            <S.BtnInfo>{btnblog}</S.BtnInfo>
            <S.BtnInfo>{btnfaq}</S.BtnInfo>
            <S.BtnInfo>{btnenter}</S.BtnInfo>
            <S.BtnInfo>{btnlang}</S.BtnInfo>
            </div>
            </S.ContainerHeader>
        </S.BoxHeader>
    )

} 

// {
//     logo,
//     blog,
//     faq,
//     lang,
//     enter

// }