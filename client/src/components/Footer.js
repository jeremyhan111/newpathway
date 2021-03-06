import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
	return (
		<footer className="footer">
			<Grid>
				<Row>
					<Col xs={4} sm={4} md={4}>
						<nav>
							<ul className="footer__list">
								<li className="footer__list-item footer__list-title"><Link to="/">Home</Link></li>
								<li className="footer__list-item"><Link to="/team">Team</Link></li>
							</ul>
							
						</nav>
					</Col>
					<Col xs={4} sm={4} md={4}>
						<nav>
							<ul className="footer__list">
								<li className="footer__list-item footer__list-title"><Link to="/services">Services</Link></li>
								<li className="footer__list-item"><Link to="/middle">Middle School</Link></li>
								<li className="footer__list-item"><Link to="/high">High School</Link></li>
								<li className="footer__list-item"><Link to="/consulting">Counseling</Link></li>
							</ul>
	
						</nav>
					</Col>
					<Col xs={4} sm={4} md={4}>
						<nav>
							<ul className="footer__list">
								<li className="footer__list-item footer__list-title"><Link to="/about">Company</Link></li>
								<li className="footer__list-item"><Link to="/jobs">Jobs</Link></li>
								<li className="footer__list-item"><Link to="/about">About Us</Link></li>
								<li className="footer__list-item"><HashLink to="/contact#locations">Locations</HashLink></li>
								<li className="footer__list-item"><Link to="/contact">Contact Us</Link></li>
							</ul>
						</nav>
					</Col>
				</Row>

				<Row>
					<Col sm={4} smOffset={4}>
						<nav className="social-media-bar footer-bar">
							Copyright(C) New Pathway Education<br/>
				  			<SocialIcon url="https://twitter.com/newpathwayed/" style={{ height: 20, width: 20 }}/>
				  			<SocialIcon url="https://www.facebook.com/NewPathwayEducation/" style={{ height: 20, width: 20 }}/>
				  			<SocialIcon url="https://www.linkedin.com/company/new-pathway-education-&-technology-group/" style={{ height: 20, width: 20 }}/>
				  			<SocialIcon url="https://www.youtube.com/user/NewPathwayEducation" style={{ height: 20, width: 20 }}/>
						</nav>
					</Col>
				</Row>
			</Grid>
		</footer>
	)
}

export default Footer;