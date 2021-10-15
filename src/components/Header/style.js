import styled from "styled-components";

export const Logo = styled.img`
    width: 142px;
`

export const BoxHeader = styled.section`
    box-shadow: 1px 5px 5px rgb(230, 230, 230);
    background-color: #fff;
    position: fixed;
    top:0;
    width: 100%;
    
    z-index: 3;
    
`
export const ContainerHeader = styled.div`
    
    max-width: 1366px;
    width: 90%;
    margin:auto;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BtnInfo = styled.button`
    background: transparent;
    cursor: pointer;
    margin-right: 3rem;
    font-size: 20px;
    
&:nth-child(-n+2){
    position:relative; 
    &::after {
    content:"";
    position:absolute;
    top:100%;
    left:0;
    width:20%;
    height:3px;
    background: transparent;
    transition:0.2s;
    border-radius:10px

  }
  &:hover:after{
    width:100%;
    background:#000;
  }

}
&:nth-child(3) {
    min-width: 180px;
    height: 45px;
    padding: 5px 10px;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px; 
    background-color: rgb(255, 235, 151);
    z-index: 1;
    &:hover:after {
    width: 100%;
    left: 0;
    }
    &:after {
    border-radius: 5px;
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease;
    background-color: #FFCE06;
    right: 0;
    }
}
    &:nth-child(4) {
        width: 30px;
        height: 30px;
        border: solid 1px #000;
        border-radius: 50%;
        font-size: 10px;
        margin-right: 0;
      }
`


  