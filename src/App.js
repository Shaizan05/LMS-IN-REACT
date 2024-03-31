import './App.css';
// import Navbar from './componet/Navbar'
import Home from './componet/Home'
import Footer from './componet/Footer'
import { useState } from 'react'
import Admin from './componet/Admin';


function App() {
  const [homeVisible,IshomeVisible]=useState(true);
  const [bookVisible,IsbookVisible]=useState(false);
  const [userVisible,IsuserVisible]=useState(false);
  const [contVisible,IscontVisible]=useState(false);

  function dashboard(parem){
    if(parem==="home"){
      IshomeVisible(true);
      IsbookVisible(false);
      IscontVisible(false);
      IsuserVisible(false);

    }
    if(parem==="book"){
      IsbookVisible(true);
      IshomeVisible(false);
      IscontVisible(false);
      IsuserVisible(false);
    
    }
    if(parem==="contact"){
      IscontVisible(true);
      IshomeVisible(false);
      IsbookVisible(false);
      IsuserVisible(false);
    }
    if(parem==="user"){
      IscontVisible(false);
      IshomeVisible(false);
      IsbookVisible(false);
      IsuserVisible(true);
    }
    
    }

    function logOut(parem){
      
        document.cookie="status=";
        if(parem==="admin"){
          document.location.href="admin.html"
        }
        if(parem==="user"){
          document.location.href="login.html"
        }
      
    }

    function getCookie(name) {
      // Split cookie string and get all individual name=value pairs in an array
      var cookieArr = document.cookie.split(";");
      
      // Loop through the array elements
      for(var i = 0; i < cookieArr.length; i++) {
          var cookiePair = cookieArr[i].split("=");
          
          /* Removing whitespace at the beginning of the cookie name
          and compare it with the given string */
          if(name === cookiePair[0].trim()) {
              // Decode the cookie value and return
              return decodeURIComponent(cookiePair[1]);
          }
      }
      
      // Return null if not found
      return null;
  }


if(getCookie("status")==="user"){
  return (
    <>    
 <nav className="navbar" id='navb' role="navigation" aria-label="main navigation" style={{backgroundColor:"#AAFCBB"}}>
           
           <img src="img/bro.png" alt='/' width="70px" height="50px" style={{backgroundColor:"lightgreen",borderRadius:"100%"}} />

       <div id="navbarBasicExample" className="navbar-menu">
         <div className="navbar-start">
           <a  onClick={()=>dashboard("home")} className="navbar-item" >
             HOME
           </a>
           <a  onClick={()=>dashboard("book")} className="navbar-item">
             BOOK
           </a>
           <a  onClick={()=>dashboard("contact")} className="navbar-item">
               CONTACT-US
             </a>
             <a  className="navbar-item">
               MY PROFILE
             </a>
           </div>
         </div>
     
         <div className="navbar-end">
           <div className="navbar-item">
             <div className="buttons">
            
               <a  onClick={()=>logOut("user")} className="button is-primary">
                 Log out
               </a>
             </div>
           </div>
         </div>
       
     </nav>

    <div>
      {homeVisible?<Home process="home"/>:false}
      {bookVisible?<Home process="book"/>:false}
      {contVisible?<Home process="contact"/>:false}

    </div>
             <Footer/> 

    </>
      );
  }

  if(getCookie("status")==="admin"){
    return(
      <>
    
    <nav className="navbar" id='navb' role="navigation" aria-label="main navigation" style={{backgroundColor:"#AAFCBB"}}>
           
           <img src="img/bro.png" alt='/' width="70px" height="50px" style={{backgroundColor:"lightgreen",borderRadius:"100%"}} />

       <div id="navbarBasicExample" className="navbar-menu">
         <div className="navbar-start">
           {/* <a  onClick={()=>dashboard("home")} className="navbar-item" >
             HOME
           </a> */}
           <a  onClick={()=>dashboard("home")} className="navbar-item">
             USER'S
           </a>
           <a  onClick={()=>dashboard("user")} className="navbar-item">
             BOOK
           </a>
           <a  onClick={()=>dashboard("contact")} className="navbar-item">
               CONTACT-US
             </a>
            
           </div>
         </div>
     
         <div className="navbar-end">
           <div className="navbar-item">
             <div className="buttons">
            
               <a onClick={()=>logOut("admin")} className="button is-primary">
                 Log out
               </a>
             </div>
           </div>
         </div>
       
     </nav>

    <div>
      {homeVisible?<Admin process="user"/>:false}
      {userVisible?<Admin process="book"/>:false}
      {contVisible?<Home process="contact"/>:false}

    </div>
      
      <Footer/> 
      </>
    );
  }


}

export default App;
