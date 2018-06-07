import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { setActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import { Translate } from 'react-localize-redux';

import nplogo from './../images/nplogo.png';

const Header = (props) => (
	<header>
  		<Navbar inverse collapseOnSelect>
			<Navbar.Header>
			    <Navbar.Brand>
			      	<NavLink to="/"><img src={nplogo} alt="New Pathway Logo"/></NavLink>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
			    <Nav pullRight>
			      	<NavItem eventKey={1}>
			        	<NavLink to="/"><Translate id="home">Home</Translate></NavLink>
			      	</NavItem>
			      	<NavItem eventKey={2}>
			        	<NavLink to="/services"><Translate id="services">Services</Translate></NavLink>
			        </NavItem>
			        <NavItem eventKey={3}>
			        	<NavLink to="/team"><Translate id="team">Team</Translate></NavLink>
			        </NavItem>
			        <NavItem eventKey={3}>
			        	<NavLink to="/about"><Translate id="about">About</Translate></NavLink>
			        </NavItem>
			        <NavItem eventKey={4}>
			        	<NavLink to="/contact"><Translate id="contact">Contact Us</Translate></NavLink>
			        </NavItem>
			    </Nav>
			</Navbar.Collapse>
		</Navbar>
		<div className="container language-menu">
			<ul className="language-menu__list">
				<li className="language-menu__item"
					onClick={() => {props.dispatch(setActiveLanguage('en'))}}>ENG</li>
				<li className="language-menu__item"
					onClick={() => {props.dispatch(setActiveLanguage('zh'))}}>中文</li>
				<li className="language-menu__item"
					onClick={() => {props.dispatch(setActiveLanguage('ko'))}}>한국어</li>
				<li className="language-menu__item"
					onClick={() => {props.dispatch(setActiveLanguage('ja'))}}>日本語</li>
			</ul>

			<nav className="social-media-bar">
	  			<SocialIcon url="https://twitter.com/newpathwayed/" style={{ height: 20, width: 20 }}/>
	  			<SocialIcon url="https://www.facebook.com/NewPathwayEducation/" style={{ height: 20, width: 20 }}/>
	  			<SocialIcon url="https://www.linkedin.com/company/new-pathway-education-&-technology-group/" style={{ height: 20, width: 20 }}/>
	  			<SocialIcon url="https://www.youtube.com/user/NewPathwayEducation" style={{ height: 20, width: 20 }}/>
	  		</nav>
		</div>
	</header>	
);

export default connect()(Header);
