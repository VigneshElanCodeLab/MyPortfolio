import React from 'react'

import Socialmedia from '../socialmedia/socialmedia.jsx'
import './home.css'
function Hello (){

        return(
            <div className="main">
               <h5 className="hello animate__animated animate__backInDown " >
                Hello!!! 
                </h5>
             
                <h3 className="main-title animate__animated animate__backInUp">
                I am Vignesh Elangovan 
                </h3>
                <h2 className="main-title animate__animated   animate__zoomInUp">
               Software engineer with 2 years of
               
               <br/> experience in web and api development 
                </h2>
                <Socialmedia/>
                  </div>
                    
        )

}
export default Hello;