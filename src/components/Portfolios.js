import React, {useState} from 'react'
import './Portfolio.css'
import Portfolio from './PortfolioApi.js';


const Portfolios = () => {
    const[info , setInfo]=useState(Portfolio);
    
    return (
        <>
             <div className="portfolio-container">
                                    <div className='portfolio-data'>    
                                  
                                    <img src={require('../images/elyson.jpg').default} />
                                    <h2 className="portfolio-name">  Elyson </h2>
                                            <p className="designer-description subtle">
                                      Frond- end -developer
                                            </p>
                                    <div className='dropdown-divider'> </div>
                                        <div className="data-div">
                                                    <p >Age:</p>
                                                    <p >29</p>
                                                
                                                    <p >Freelancers:</p>
                                                    <p >Available</p>

                                                    <p >Education:</p>
                                                    <p >BSSE</p>
                                                
                                                    <p >Country:</p>
                                                    <p >Canada</p>

                                                    <p >Address:</p>
                                                    <p >block 7 bulding 204 head road</p>

                                                    
                                                    <p >Gender:</p>
                                                    <p >Male</p>
                                            </div>

                                    </div>
                                    <div className='top-div'>
                                        <h1 >I’m Elyson Romeiro
                        Font – End Developer</h1>
                        <p>I Love To Work Online As A Photoshop Editor & Wordpress Developer.I Do Professional Work Like Change Background Image , Final Touch , Any Photoshop Editing. Website Design, Wordpress Website, I have 3 Years Experience As A Photoshop Editor & 2 Years of Experience as a wordpress developer</p>
                        <a href="/SignupForm" className="button button-primary">Hire me</a>
                                        </div>
                                    
                                        <div className="my-services">
                                        <h1>My Services</h1>
                                     <p>I can create Beautiful Modern WordPress website.

i will provide solutions for your Responsive design need. 100% satisfaction guaranteed. Try Just once you will never be disappointed. </p>
                                        </div>
                                        <div className="box-services">
                                            <div className="box">
                                            <img src={require('../images/newWeb.jpeg').default} />
                                            </div>
                                            <div className="box">
                                            <img src={require('../images/3web.jpg').default} />
                        </div>
                        <div className="box">
                        <img src={require('../images/1web.jpg').default} />
                        </div>
                        <div className="box">
                        <img src={require('../images/2web.jpg').default} />
                        </div>
                        <div className="box">
                        <img src={require('../images/4web.jpg').default} />
                        </div>
                     
                                        </div>

                                        <div className="price-planIntro">
                                            <h1>Compare Packages </h1>
                                      </div>
                                        <div className="price-planCards">
                                       <div className="price-box">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="pricingTable orange">
                                                    <div className="pricingTable-header">
                                                        <i className="fa fa-adjust"></i>
                                                        <div className="price-value"> 900PKR <span className="month">1 project</span> </div>
                                                    </div>
                                                    <h3 className="heading">Standard</h3>
                                                    <div className="pricing-content">
                                                        <ul>
                                                            <li> Responsive design  <b>Yes</b></li>
                                                            <li> Prototype <b>Yes</b></li>
                                                            <li> No of pages  <b>6</b></li>
                                                            <li> Revisions <b>3</b></li>
                                                            <li> Delivery  <b>2</b></li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricingTable-signup">
                                                        <a href="/Payment">Select</a>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                     
                                       <div className="price-box">
                                       <div className="col-md-3 col-sm-6">
                <div className="pricingTable green">
                    <div className="pricingTable-header">
                        <i className="fa fa-briefcase"></i>
                        <div className="price-value"> 1200PKR<span className="month">1 project</span> </div>
                    </div>
                    <h3 className="heading">Business</h3>
                    <div className="pricing-content">
                        <ul>
                        <li> Responsive design  <b>Yes</b></li>
                         <li> Prototype <b>Yes</b></li>
                           <li> Source Code <b>Yes</b></li>
                           <li> No of pages  <b>6</b></li>
                        <li> Delivery  <b>6</b></li>
                        </ul>
                    </div>
                    <div className="pricingTable-signup">
                        <a href="/Payment">Select</a>
                    </div>
                </div>
            </div>
                                       </div>
                                       <div className="price-box">
                                       <div className="col-md-3 col-sm-6">
                <div className="pricingTable blue">
                    <div className="pricingTable-header">
                        <i className="fa fa-cube"></i>
                        <div className="price-value"> 1500PKR <span className="month">2 project</span> </div>
                    </div>
                    <h3 className="heading">Premium</h3>
                    <div className="pricing-content">
                        <ul>
                        <li> Responsive design  <b>Yes</b></li>
                         <li> Prototype <b>Yes</b></li>
                           <li> Source Code <b>Yes</b></li>
                           <li> No of pages  <b>6</b></li>
                        <li> Delivery  <b>6</b></li>
                        </ul>
                    </div>
                    <div className="pricingTable-signup">
                        <a href="/Payment">Select</a>
                    </div>
                </div>
            </div>
                                       </div>
                                        </div>
                                        </div>
  
        </>
    );
};

export default Portfolios;
