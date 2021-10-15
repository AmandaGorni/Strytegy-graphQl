import React from "react";
import * as S from './style'
import { graphql, useStaticQuery } from "gatsby";

export function Footer(){
    
    const data = useStaticQuery(graphql`
    query{
        alldata{
            projects {
                aboutUs
                about
                imgBrand{
                  url
                }
                brand
                social
                instagram
                face
                linkedin
                blog
                helpful
                faq
                terms
                privicy
                support    
              }
        }
    }
    `)
    
    const {
        aboutUs,
        about,
        imgBrand,
        brand,
        social,
        instagram,
        face,
        linkedin,
        blog,
        helpful,
        faq,
        terms,
        privicy,
        support  } = data.alldata.projects[0]

    return(
        <>
        <S.ContactContainer>
      <S.ContactBox>
        <S.AboutContainer>         
            <S.AboutBox>
              <h4>{aboutUs}</h4>
              <p>{about}</p>
            </S.AboutBox>         
            <S.BrandBox>
              <img src={imgBrand.url} alt="S"/>
              <p>{brand}</p>
            </S.BrandBox>      
        </S.AboutContainer>
        <S.MideasBox>
           <S.Mideas>
            <h4>{social}</h4>
            <p>{instagram}</p>
            <p>{face}</p>
            <p>{linkedin}</p>
            <p>{blog}</p>
          </S.Mideas>
          <S.Mideas>
            <h4>{helpful}</h4>
            <p>{faq}</p>
            <p>{terms}</p>
            <p>{privicy}</p>
            <p>{support}</p>
          </S.Mideas>
        </S.MideasBox>
      </S.ContactBox>
    </S.ContactContainer>
        </>
    )
}