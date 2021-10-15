import styled from "styled-components";

export const StartBox = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1366px;
width: 90%;
margin:auto;
height: 69vh;
margin-top: 9%;
background: url(${props => props.backgroundImg}) no-repeat right;
background-size: 50%;
`

export const StartTexts = styled.div`

    width: 60%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    

    h1 {
        font-size: 3.3vw;
    }

    h2 {
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 1.2vw;
        width: 75%;
        
    }
`

export const BtnstartNow = styled.button`
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
`


