import styled from "styled-components";

export const AgileContainer = styled.section`
    background:linear-gradient(rgb(255, 255, 255) 10%, rgb(255, 250, 228) 100%);
`
export const AgileBox = styled.div`
    max-width: 1366px;
    width: 90%;
    margin: auto;
    height: 208px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    h2 {
    font-size: 2.3vw;
    }
    p{
    font-size: 1.2vw;
    letter-spacing: 1px;
    width: 65%;
    text-align: center;
    margin-top: 26px;
    }
`

export const ProjectsContainer = styled.div`
    max-width: 1366px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;   
    border-radius: 20px;
    position: relative;
    top: 50px;
    background-color:#fff;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 20px;
    padding: 8px;

`

export const ProjectsBox = styled.div`
    width: 100%;
    height:101px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 11px;
    h3{
        width: 100%;
    }
    &:hover {
        background-color:#FFCE06;
    }
    :not(:last-child)::after{
    content: "";
    position: relative;
    right: -0.5px;
    width: 1px;
    height: 50%;
    background-color: rgb(34, 37, 75);
    z-index: 1;
    }
`
export const MeetContainer  = styled.section`
background-color:#22254B ;
`
export const MeetBox = styled.div`
    max-width: 1366px;
    width: 90%;
    margin: auto;
    height: 422px;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
`
export const ImageGif = styled.img`
    width: 37%;
    height: 67%;
`

export const MeetTextBox = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
    font-size: 2.5vw;
    color:#fff;
    }
    p {
    font-size: 1.1vw;
    margin-top: 30px;
    letter-spacing: 1px;
    color:#fff; 
    }
`
