import React from 'react'
import './Navbar.css'
import $ from 'jquery';
import jQuery from 'jquery'
import Polotono from './Polotono'
import { browserHistory } from 'react-router';
jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 8) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
});
function Navbar() {
    return (
        <>
            <header className="header-area overlay">
    <nav className="navbar navbar-expand-md navbar-dark">
		<div className="container">
		<img src={require('../images/logodesignwd.png').default} alt="imges" />
			<a href="/Homepage" className="navbar-brand">WeDesign</a>
			
			<button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
				<span className="menu-icon-bar"></span>
				<span className="menu-icon-bar"></span>
				<span className="menu-icon-bar"></span>
			</button>
			
			<div id="main-nav" className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li><a href="#" className="nav-item nav-link active">Photo Editing</a></li>
					<li><a href="/FindADesigner" className="nav-item nav-link">Find a Designer</a></li>
					<li className="dropdown">
						<a href="#" className="nav-item nav-link" data-toggle="dropdown">Services</a>
						
					</li>
					<li className="dropdown">
			<a href="/Polotono" onClick={() => { browserHistory.push('/Polotono') }} className="nav-item nav-link" data-toggle="dropdown">Create Design</a>
						
					</li>
				
				</ul>
			</div>
		</div>
<div id="button">
<a href="/LoginForm" className="button button-primary">Sign in</a>
<a href="/SignupForm" className="button button-primary" >Join Us</a>
</div>
</nav>
	</header>
{/* <script type="text/javascript">
	function backblur() {

	}
	
</script> */}

        </>
    )
}

export default Navbar
