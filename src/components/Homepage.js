import './Homepage.css'


import React from 'react'

function Homepage() {
	return (
		<>
	


	
	<div className="banner">
		<div className="container">
			<h1>Bring Your Creative Vision to live with WeDesign.</h1>
			<p>Create your own design by using drag and drop templates or else Hire a top creative Designer for your brand identity. We Personally review Portfolios accept only best and more experience 10% of all designer application.This is how we gurrantee agency Quality Design for your every Graphic Design project.</p>
			<a href="#content" className="button button-primary">Get Started</a>
		</div>
	</div>


<main>
	<section id="content" className="content">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
			<img src={require('../images/h1.png').default} alt="imges" />
           
					<p>Professional designs.Get unique custom designs from pre-vetted creative professionals, all under the same roof. </p>
				</div>
				<div className="col-md-4">
				<img src={require('../images/ilts4.png').default} alt="imges" />
					<p>You will own full copyrights with all the necessary files of winning designs and use them extensively.. </p>
				</div>
				<div className="col-md-4">
				<img src={require('../images/ilts3.png').default} alt="imges" />
					<p>Your order is protected by ironclad money back guarantee! All we care about is your 100% satisfaction. </p>
				</div>
			</div>
		</div>
	</section>
</main>
{/* ***********************Services****************** */}
<section id="servicesContainer">
<div id="container-services">
             <h4 id="methodstitle">Two Methods to get creative designs</h4>
             <p>With our tried and tested creative process, and a global community of the best selected 5% graphic designers, we can transform your concept and ideas into unique, irresistible , custom design like your own design studio.</p>
        </div>  
	<div className="hireContainer">
	<div className="card" >
	  <img src={require('../images/designer.jpg').default} />
  <div className="card-body">
    <p className="card-text">Work together with one of our high quality, professional designers of your choice based on their portfolio.</p>
	<div id="hirebutton">
  <a href="#content" className="button button-primary">Hire a Designer</a>
  </div>
 
	</div>
	</div>
	</div>
	<div className="diyContainer">
	<div className="card" >
	  <div className="card" >
	  <img src={require('../images/diy.jpg').default} />
  <div className="card-body">
    <p className="card-text"> Connect with the designers, give feedback and pick your favorite design.</p>
	<div id="diybutton">
  <a href="#content" className="button button-primary">Create Design</a>
  </div>
  </div>
</div>
</div>
     
	</div>
</section>
   
      {/* new Section */}
	  <div id="facilitydiv">
             <h4 id="facility-title">Fabricate a strong brand your clients want</h4>
      </div>  
	  <section id="facility"> 
<div id="div1">
<img src={require('../images/div1.png').default} />
<h4 id="div-title">Professional design</h4>
<h5>All under one roof, get distinctive custom designs from pre-vetted creative specialists.</h5>
</div>
<div id="div2">
<img src={require('../images/div2.png').default} />
<h4 id="div-title">Money Back Gurranttee</h4>
<h5>Your purchase is backed by a 100% money-back guarantee! We just care about your complete satisfaction.</h5>
</div>
<div id="div3">
<img src={require('../images/div3.png').default} />
<h4 id="div-title">Get copyright & all files</h4>
<h5>You will have complete copyrights to all winning design files and will be able to use them freely.</h5>
</div>
	  </section>

      {/* ******************Slider*********** */}
	  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={require('../images/slider1.png').default} />
    </div>
    <div className="carousel-item">
    <img src={require('../images/slider2.png').default} />
    </div>
    <div className="carousel-item">
    <img src={require('../images/slider3.png').default} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* *****************get started portion****** */}
<div className="startwork">
<h1>It's simple and guaranteed to get a distinctive design!
There are two realities that everyone enjoys. Create a creative and professional designs with us. </h1>
<a href="#content" className="button button-primary">Get Started</a>
	</div>
  	
		</>
	)
}
export default Homepage;

