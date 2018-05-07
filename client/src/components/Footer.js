import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer">
			<Grid>
				<Row>
					<Col sm={12} md={3}>
						<ul className="footer__list">
							<li className="footer__list-item footer__list-title"><Link to="/services">Services</Link></li>
							<li className="footer__list-item"><Link to="/elementary">Elementary School</Link></li>
							<li className="footer__list-item"><Link to="/middle">Middle School</Link></li>
							<li className="footer__list-item"><Link to="/high">High School</Link></li>
							<li className="footer__list-item"><Link to="/consulting">Academic Counseling</Link></li>
						</ul>
					</Col>
					<Col sm={12} md={3}>
						<ul className="footer__list">
							<li className="footer__list-item footer__list-title"><Link to="/team">Teams</Link></li>
							<li className="footer__list-item"><Link to="/team">Test Prep</Link></li>
							<li className="footer__list-item"><Link to="/team">ELA</Link></li>
							<li className="footer__list-item"><Link to="/team">Prestige Only</Link></li>
						</ul>
					</Col>
					<Col sm={12} md={3}>
						<ul className="footer__list">
							<li className="footer__list-item footer__list-title">Other Stuff</li>
							<li className="footer__list-item">Blah</li>
						</ul>
					</Col>
					<Col sm={12} md={3}>
						<ul className="footer__list">
							<li className="footer__list-item footer__list-title"><Link to="/about">Company</Link></li>
							<li className="footer__list-item">Careers</li>
							<li className="footer__list-item">About Us</li>
							<li className="footer__list-item">Locations</li>
							<li className="footer__list-item">Contact Us</li>
						</ul>
					</Col>
				</Row>

				<Row>
					<Col sm={12}>
						<div className="social-media-bar footer-bar">
							Copyright(C) New Pathway Education. All rights reserved <br/>
				  			<SocialIcon url="https://twitter.com/newpathwayed/" style={{ height: 20, width: 20 }}/>
				  			<SocialIcon url="https://www.facebook.com/NewPathwayEducation/" style={{ height: 20, width: 20 }}/>
				  			<SocialIcon url="https://www.linkedin.com/company/new-pathway-education-&-technology-group/" style={{ height: 20, width: 20 }}/>
				  			<SocialIcon url="https://www.youtube.com/user/NewPathwayEducation" style={{ height: 20, width: 20 }}/>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	)
}

export default Footer;