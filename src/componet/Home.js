import React from 'react'
export default function Home(props) {
  if(props.process ==="home"){

  return (
    <>
 <center> <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"style={{height:"50%", width:"100%"}}>
               
               <ol className="carousel-indicators">
               
                 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
              <div className="carousel-inner">
                 <div className="carousel-item active">
                   <img className="d-block w-100" src="img/lib1.jpg" alt="First slide" style={{height:"500px"}}/>
                   
                 </div>
         
                 <div className="carousel-item">
                   <img className="d-block w-100" src="img/lib3.jpg" alt="Third slide" style={{height:"500px"}}/>
                 </div>
                 <div className="carousel-item">
                   <img className="d-block w-100" src="img/lib4.jpg" alt="Third slide" style={{height:"500px"}}/>
                 </div>
                 <div className="carousel-item">
                   <img className="d-block w-100" src="img/lib5.jpg" alt="Third slide" style={{height:"500px"}}/>
                 </div>
               </div>
               <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="sr-only">Previous</span>
               </a>
               
               <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="sr-only">Next</span>
               </a>
             </div>
             </center>
<center>
<div className="card card-body">
              <center><h1 style={{fontSize: "large",marginTop:"10px"}}><b>TRENDING BOOKS</b></h1></center><hr style={{backgroundColor:"black",border:"1px solid black"}}/>

              <div className="d-flex justify-content row justify-content-between p-5" style={{backfaceVisibility:"visible"}}>

              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/book1.png" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">PYTHON PROGRAMING</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/book2.jpg" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">C++ PROGRAMING</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/book5.jpg" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">C PROGRAMING</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/book4.jpg" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">JAVA PROGRAMING</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content row justify-content-between p-5" style={{backfaceVisibility:"visible"}}>

              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/book6.jpg" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">BIOLOGY</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/book7.jpg" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">PHYSICS</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/book8.jpg" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">MATH</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
              <div className="card1" style={{width: "18rem"}}>
                <img id='img1' className="card-img-top" src="img/BOOK10.jpg" alt="card"/>
                <div className="card-body">
                  <h5 className="card-title">CHEMISTRY</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">BUY</a>
                </div>
              </div>
            </div>
            </div></center>

 
                </>

  )
  }
 

  if(props.process==="book"){
    return (
      <>
      
<center>

<div>
  <center><h1 className='hd'><b>PROGRAMMING BOOKS</b></h1></center><hr id='hr'/>

  <div id="bunch1" className="d-flex justify-content row justify-content-between p-5 m-5">
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/book1.png" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">PYTHON PROGRAMING</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/book2.jpg" alt="Card" />
    <div className="card-body">
      <h5 className="card-title">C++ PROGRAMING</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/book5.jpg" alt="Card" />
    <div className="card-body">
      <h5 className="card-title">C PROGRAMING</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/book4.jpg" alt="Card" />
    <div className="card-body">
      <h5 className="card-title">JAVA PROGRAMING</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
</div>
<center><h1 className='hd'><b>SCIENCE BOOKS</b></h1></center><hr id='hr'/>

<div id="bunch1" className="d-flex justify-content row justify-content-between p-5  m-5">
  
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/book6.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">BIOLOGY</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/pysics.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">PHYSICS</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/book8.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">MATH</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/BOOK10.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">CHEMISTRY</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
</div>
<center><h1 className='hd'><b>HISTORY BOOKS</b></h1></center><hr id='hr'/>

<div id="bunch1" className="d-flex justify-content row justify-content-between p-5 m-5">

  <div className="card1">
    <img id='img1' className="card-img-top " src="img/hist1.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">BIOLOGY</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/hist2.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">PHYSICS</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/hist3.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">MATH</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/hist4.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">CHEMISTRY</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
</div>
<center><h1 className='hd'><b>FINANCE BOOKS</b></h1></center><hr id='hr'/>

<div id="bunch1" className="d-flex justify-content row justify-content-between p-5 m-5">

  <div className="card1">
    <img id='img1' className="card-img-top " src="img/finance1.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">BIOLOGY</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/finance2.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">PHYSICS</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top " src="img/finance3.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">MATH</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
  <div className="card1">
    <img id='img1' className="card-img-top" src="img/finance4.jpg" alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">CHEMISTRY</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a id="buybtn" href="/" className="btn btn-success">BUY</a>
    </div>
  </div>
</div>
</div>
</center>

      
      </>
    )
  }

  
  if(props.process ==="contact"){
    return (
      <>
      <div className="container1">
      <div className="content1">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Surkhet, NP12</div>
            <div className="text-two">Birendranagar 06</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+0098 9893 5647</div>
            <div className="text-two">+0096 3434 5678</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">codinglab@gmail.com</div>
            <div className="text-two">info.codinglab@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
          <form>
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <div className="button1">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
      </>
    )}


}
