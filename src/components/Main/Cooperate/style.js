import styled from "styled-components";

export const EvidenceContainer = styled.section`
background-color:#22254B ;
height: 60vh;
`
export const EvidenceBox = styled.div`
    max-width: 1366px;
    width: 50%;
    margin: auto;
    padding:14px;
    height: 80%;
    color:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    h2{
        font-size: 3vw;       
    }
    article{
        
        font-size: 1vw;  
        line-height: 2.0;
    }
`

export const CollaborateContainer = styled.section`
background-color:#ede8f8;

`

export const CollaborateBox = styled.div`
    max-width: 1366px;
    width: 50%;
    margin: auto;
    height: 60vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;

    button {
        width: 180px;
        height: 48px ;
        font-size: 21px;
        background-color: #FFCE06;
        border: 1px solid rgb(255, 206, 6);
        border-radius: 4px;
        font-weight: 700;
        cursor:pointer;
        transition-duration: 0.3s;
        &:hover {
            box-shadow: 0px 0px 0px 5px #FFCE06;
        }
    }
    h2{
        font-size: 3vw;       
    }
    p{
        font-size: 1.2vw;       
    }
`
export const BorderWave = styled.svg`
    position: relative;
    bottom: 40px;
    
`