import React from 'react'


import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

import GlobalStyle from '../components/GlobalStyle';


export default function index() {

   return (
    <div>
    <Header/>
    <Main/>
    <Footer/>
    <GlobalStyle />
    </div>
  )
}
