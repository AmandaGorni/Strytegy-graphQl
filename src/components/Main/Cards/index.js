import React from "react";
import * as S from './style'
import HtmlParser from 'react-html-parser';

import { graphql, useStaticQuery } from "gatsby";

export function Cards(){
    
    const data = useStaticQuery(graphql`
    query{
        alldata{
            projects {
                imgCoin {
                  url
                }
                imgSquad {
                  url
                }
                imgStart {
                  url
                }
                cardCoin {
                  html
                }
                cardFound {
                  html
                }
                cardFree {
                  html
                }
                cardSquad {
                  html
                }
                cardStartup {
                  html
                }
                cardTeam {
                  html
                }
                
              }
            }
        }
    
    `)

    const {cardTeam, cardStartup, cardSquad, cardFree, cardFound, cardCoin, imgCoin, imgStart, imgSquad} = data.alldata.projects[0]
    
    return(
    <S.Cards>
      <S.CardContainer>
        <S.CardBox>
          <S.CardTextTop>
            {HtmlParser(cardFree.html)}
          </S.CardTextTop>
          <S.CardDraft>
            <S.ImgCards src={imgStart.url} alt="ambitious"/>
            {HtmlParser(cardStartup.html)}
          </S.CardDraft>
          <S.CardTextTop>
            {HtmlParser(cardTeam.html)}
          </S.CardTextTop>
          <S.CardTeams>
            <S.ImgCards src={imgCoin.url} alt="professionals"/>
            {HtmlParser(cardCoin.html)}
          </S.CardTeams>
          <S.CardText>
            {HtmlParser(cardFound.html)}
          </S.CardText>
          <S.CardTeams>
            <S.ImgCards src={imgSquad.url} alt="teams"/>
            {HtmlParser(cardSquad.html)}
          </S.CardTeams>
        </S.CardBox>
      </S.CardContainer>
    </S.Cards>
    )
}