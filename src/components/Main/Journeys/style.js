import styled from "styled-components";

export const JourneysContainer = styled.section`
display: flex;
    margin:51px 0 51px 0;
    height: auto;
`
export const JourneysBox = styled.div`
max-width: 1366px;
    width: 90%;
    margin: auto;
    height: 422px;
    display: flex;   
    justify-content: space-around;
    align-items: center;
`
export const JourneysTextBox = styled.div`
    width:50%;
    h2{
        font-size: 3vw;
        margin-bottom: 1vw;
    }
    p {
        font-size: 1.2vw;
    }
`
export const TeamsContainer = styled.section`
background-color:#22254B ;
`
export const TeamsBox = styled.div`
    max-width: 1366px;
    width: 50%;
    margin: auto;
    height: 60vh;
    color:#fff;
    span{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        height: 34vh;
    }
    h2{
        font-size: 3vw;       
    }
    p{
        font-size: 1.2vw;       
    }
`
export const ImgDraft = styled.img`
    width: 28%;
`