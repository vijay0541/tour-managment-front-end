import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';


const Layouts =()=>{
    return(
        <>
        <Header/>
        <Routers/>
        <Footer/>
        </>
    )
}
export default Layouts;