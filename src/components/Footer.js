import React from 'react'

function Footer() {
    return (
        <>
             <footer className="container-fluid bg-grey py-5">
<div className="container">
   <div className="row">
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 ">
               <div className="logo-part">
                  <h1>WeDesign</h1>
                  <p>Design with Us</p>
                  <p>WeDesign is the online design platform that connects high-quality, professional designers with clients worldwide.</p>
               </div>
            </div>
            <div className="col-md-6 px-4">
               <h6> About Us</h6>
               <p>Designing Website</p>
               <p>Create your own Design</p>
               <a href="#" className="btn-footer"> More Info </a>
               <a href="#" className="btn-footer"> Contact Us</a>
            </div>
         </div>
      </div>
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 px-4">
               <div className="row ">
                  <div className="col-md-6">
                     <ul>
                        <li> <a href="/Hompage"> Home</a> </li>
                        <li> <a href="#"> About</a> </li>
                        <li> <a href="#"> Service</a> </li>
                        <li> <a href="/FindADesigner"> Find A Designer</a> </li>
                        <li> <a href="#">PhotoEditing</a> </li>
                        <li> <a href="#"> Contact</a> </li>
                     </ul>
                  </div>
                  <div className="col-md-6 px-4">
                     <ul>
                        <li> <a href="#"> Cab Faciliy</a> </li>
                        <li> <a href="#"> Fax</a> </li>
                        <li> <a href="#"> Terms</a> </li>
                        <li> <a href="#"> Policy</a> </li>
                        <li> <a href="#"> Refunds</a> </li>
                        <li> <a href="#"> Paypal</a> </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="col-md-6 ">
               <h6> Newsletter</h6>
               <div className="social">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
               </div>
               <p>That's technology limitation of LCD monitors</p>
            </div>
         </div>
      </div>
   </div>
</div>
</footer>
        </>
    )
}

export default Footer
