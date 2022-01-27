import React from 'react';
import './Profile.css';
import { TextField} from '@material-ui/core';
function Profile() {
  return (
  <>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
       
        <div class="col-md-6 ">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3 ">
                    <h1 class="text-left">WELCOME TO WEDESIGN</h1>
                </div>
                <div className='dropdown-divider'> </div>
                <h4 class="text">CREATE YOUR IDENTITY</h4>

                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name</label> <TextField  placeholder='Enter first name' fullWidth required/></div>
                    <div class="col-md-6"><label class="labels">Last Name</label> <TextField  placeholder='Enter second name' fullWidth required/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label>  <TextField  placeholder='Enter Username' fullWidth required/> </div>
                    <div class="col-md-12"><label class="labels">Address </label>  <TextField  placeholder='Enter Address' fullWidth required/>  </div>
                    <div class="col-md-12"><label class="labels">Postcode</label> <TextField  placeholder='Enter Postcode' fullWidth required/></div>
                    <div class="col-md-12"><label class="labels">State</label> <TextField  placeholder='Enter State' fullWidth required/></div>
                    <div class="col-md-12"><label class="labels">Area</label> <TextField  placeholder='Enter Area' fullWidth required/></div>
                    <div class="col-md-12"><label class="labels">Email ID</label> <TextField  placeholder='Enter Email' fullWidth required/></div>
                    <div class="col-md-12"><label class="labels">Education</label> <TextField  placeholder='Enter Education' fullWidth required/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label> <TextField  placeholder='Enter Country' fullWidth required/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label> <TextField  placeholder='Enter State/Region' fullWidth required/></div>
                </div>
                <div class="mt-5 text-center"><a href="/CreatePortfolio" className="button button-primary">Save Profile</a></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div className="profileimg">
            <img src={require('../images/profile.png').default} /></div>
        </div>
        </div>
    </div>
    </div>
  </>
  );
}

export default Profile;
