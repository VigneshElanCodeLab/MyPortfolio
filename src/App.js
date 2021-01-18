import './App.css';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './components/contact/contact.jsx'
import Header from './components/header/header.jsx'
import './index.css'
import Home from './components/home/home'

function App() {
  
  
  return (
    <div className="body" >
<Router>
     <Header/>
     
     <br/>
      {/* <Paper  variant="h4" className={classes.root}  >
     Vignesh Elangovan
      </Paper> */}
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/home" component={Home}/>
      <Route path="/contact" component={Contact}/>

      </Switch>
      <div id="particles-js">
      
         
      <Particles backgroundColor="black"
       height={window.outerHeight}
    params={{
	    "particles": {
	        "number": {
	            "value": 40
	        },
	        "size": {
	            "value": 2
          },color :{
            value: ['black']
          }, line_linked: {
            color: '#67d867',
            opacity: 1
          }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
          },
         
	    }
	}} />
      </div> 
      </Router>

 </div>
  );
}

export default App;
