import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: 0;
    
}
body{
    color:#25294C;
    min-height: 100vh;
    font-family: 'Archivo', sans-serif;
    margin:auto;
    
}

html{
        
    @media(max-width:1088px){
       
    }
    @media(max-width:728px){
        
    }
}



`;

export default GlobalStyle;