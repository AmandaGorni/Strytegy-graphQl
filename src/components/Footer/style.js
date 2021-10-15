import styled from "styled-components";

export const ContactContainer = styled.section`
background-image: linear-gradient(rgba(83, 33, 196, 0.1) 10%, rgba(34, 37, 75, 0.1) 100%);
`

export const ContactBox = styled.div`
max-width: 1366px;
    margin: auto;
    width: 90%;
    height:300px ;
    display: flex;
    justify-content: space-between;
`

export const MideasBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
`

export const Mideas = styled.div`
width: 32%;

h4{
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 12px;
    
}
p{
    letter-spacing: 1px;
    line-height: 24px;

}
`
export const AboutContainer = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const AboutBox = styled.div`
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const BrandBox = styled.div`
    display: flex;
    align-items:center;
    height: 21%;
    
    img {
        height: 100%;
        margin-right: 2%;
    }
`