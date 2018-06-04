import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer">
			<Grid>
				<Row>
					<Col sm={12} md={4}>
						<nav>
							<ul className="footer__list">
								<li className="footer__list-item footer__list-title"><Link to="/services">Services</Link></li>
								<li className="footer__list-item"><Link to="/elementary">Elementary School</Link></li>
								<li className="footer__list-item"><Link to="/middle">Middle School</Link></li>
								<li className="footer__list-item"><Link to="/high">High School</Link></li>
								<li className="footer__list-item"><Link to="/consulting">Academic Counseling</Link></li>
							</ul>
						</nav>
					</Col>
					<Col sm={12} md={4}>
						<nav>
							<ul className="footer__list">
								<li className="footer__list-item footer__list-title"><Link to="/team">Teams</Link></li>
								<li className="footer__list-item"><Link to="/team">Test Prep</Link></li>
								<li className="footer__list-item"><Link to="/team">ELA</Link></li>
								<li className="footer__list-item"><Link to="/team">Prestige Only</Link></li>
							</ul>
						</nav>
					</Col>
					<Col sm={12} md={4}>
						<nav>
							<ul className="footer__list">
								<li className="footer__list-item footer__list-title"><Link to="/about">Company</Link></li>
								<li className="footer__list-item"><Link to="/jobs">Jobs</Link></li>
								<li className="footer__list-item"><Link to="/about">About Us</Link></li>
								<li className="footer__list-item"><Link to="/contact">Locations</Link></li>
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