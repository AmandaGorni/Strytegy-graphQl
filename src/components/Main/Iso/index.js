import React from "react";
import * as S from './style'
import { graphql, useStaticQuery } from "gatsby";

export function Iso(){
    
    const data = useStaticQuery(graphql`
    query {
      alldata{
        projects {
                securityTitle
                securityISO
                securityLGPD
                allowlistining
                imgIso {
                  url
                }
            }
        }
    }

    `)
    
    const {securityTitle,
        securityISO,
        securityLGPD,
        allowlistining,
        imgIso} = data.alldata.projects[0]
    
    return(
        <S.IsoContainer>
        <S.Isotitle>{securityTitle}</S.Isotitle>
        <S.IsoImg src={imgIso.url}/>
        <S.IsoLGPD>{securityLGPD}</S.IsoLGPD>
        <S.IsoLGPD>{securityISO}</S.IsoLGPD>
        <S.IsoLGPD>{allowlistining}</S.IsoLGPD>
        </S.IsoContainer>
    )
}