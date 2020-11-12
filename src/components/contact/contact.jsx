import React, { Component } from 'react'
 import callImage from '../../assests/images/call.png'
 import mail from '../../assests/images/white-mail.png'
import location from '../../assests/images/location-bg.png'
import './contact.css'
class Contact extends Component {

    render() {
        let contactRender =(
   <>
            <h2 style={{ color: "white", textAlign: "center" }} className="font"> Contact </h2>
            <div className="row" style={{marginTop:"100px"}}>
                <div className="col col-4">
<img className="animate__animated animate__heartBeat  contact"src={callImage} alt="phone" key={Date.now()}></img>                </div>
            <div className="col col-4">
            <img className="animate__animated animate__heartBeat  mail"src={mail} key={Date.now()} alt="mail"></img>  
            </div>
            <div className="col col-4">
            <img className="animate__animated animate__heartBeat  location"src={location} key={Date.now()}alt="location"></img>  

            </div>
            </div>
            <br/>
            <div className="row ">
                <div className="col col-4 font ">
            <p style={{ color: "white",marginLeft:"25%"  }} > +91 9952616220</p>
            </div>
            <div  className="col col-4">
            <p className="mailcontent" >vignesh.e06@outlook.com</p>
            </div> 
            <div  className="col col-4 address font">
            <p style={{ color: "white",marginLeft:"14%" }} > Perungalathur, Chennai</p>
            </div></div></>
        );
        return (
            <div style={{overflow:"hidden" }}>
              
               {contactRender}
                </div>
            )
    }
}
export default Contact;