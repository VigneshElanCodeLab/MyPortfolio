import React, { Component } from 'react'

class Socialmedia extends Component{
render(){
    return(
        <div  className="row">          
        <div className="col-lg-2 col-2 col-md-2">
         <a href="https://github.com/VigneshElanCodeLab" style={{color:"white ", lineHeight:"150px"}}>
          <i className="fa fa-github animate__animated animate__heartBeat"></i>   
         </a>
 </div>
<div className="col-lg-2 col-2 col-md-2"> 
        <a href="https://twitter.com/vignesh_e06" style={{color:"white ", lineHeight:"150px"}} >
        <i className="fa fa-twitter animate__animated animate__heartBeat"></i>
  
</a>  
</div>
<div className="col-lg-2 col-2 col-md-2"> 
        <a href="https://www.linkedin.com/in/vignesh-elangovan-ba456295/" style={{color:"white ", lineHeight:"150px"}} >
        <i className="fa fa-linkedin animate__animated animate__heartBeat"></i>
  
</a>  
</div>
</div>
    )
}
}

export default Socialmedia;