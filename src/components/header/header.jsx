import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import PDF from '../../assests/document/Vignesh Elangovan.pdf'
import './header.css'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(1),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   header: {
//     backgroundColor: "grey", color: "Black", boxShadow: "0px 0px 0px 0px", fontFamily: "Itim"
//   }
// }));

export default function ButtonAppBar() {

  return (
    // <div className={classes.root}>
    //   <AppBar position="sticky" className={classes.header}>
    //     <Toolbar>
    //       <Typography variant="h4" className={classes.title} >
    //         Vignesh Elangovan

    //       </Typography>

    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //         <MenuIcon />
    //       </IconButton>

    //     </Toolbar>
    //   </AppBar>
    // </div>
    <header>
      <nav className="navbar navbar-expand-lg font">
        <div style={{ color: "white", marginLeft:"10px",fontSize:"20px" }} className="navbar-brand">Vignesh Elangovan</div>
       
        <ul className="navbar-nav navbar-brand justify-content-end navbar-collapse">
          <li >
            <Link style={{ color: "white",fontSize:"20px" }} className="nav-link" to="/home">Home</Link>
          </li>


          <li  className="nav-link" >
            <a href={PDF}  style={{ color: "white",fontSize:"20px" ,textDecoration: "none" }}>   My Resume</a>
          
        </li>
          <li><Link style={{ color: "white",fontSize:"20px"  }} className="nav-link" to="/contact">Contact</Link></li>
        </ul>

      </nav>
    </header>
  );
}
