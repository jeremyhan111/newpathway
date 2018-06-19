import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

import user from './../images/user.svg';
import pencils from './../images/pencils.svg';
import medal from './../images/medal.svg';

const ServicesShowcase = () => {
	return (
		<Row className="show-grid row--spacing row--top container">
			<h1 className="blurb__title"><Translate id="ourservices">OUR SERVICES</Translate></h1>
			<Col xs={12} md={4}>
				<div className="blurb">
					<Link to="/services">
						<div className="services__link">
							<img className="blurb__svg" src={pencils} alt="Pencils"/><br/><br/>
							<b><Translate id="testprep">TEST PREP & TUTORING</Translate></b><br/><br/>
						</div>
					</Link>
					<Translate id="testprep__blurb">
						We offer top notch test prep service in standardized tests such as SAT, ACT, SAT subject tests, 
						AP tests and TOEFL. Face-to-face and virtual classes are available in all subjects. 
						Features mobile apps for homework practice and management reports.
					</Translate>
				</div>
			</Col>
			<Col xs={12} md={4}>
				<div className="blurb">
					<Link to="/services">
						<div className="services__link">
							<img className="blurb__svg" src={user} alt="Camps"/><br/><br/>
							<b><Translate id="camps">CAMPS & WORKSHOPS</Translate></b><br/><br/>
						</div>
					</Link>
					<Translate id="camps__blurb">
						Summer & Winter camps in technology, business, medicine, international relations and engineering fields. 
						Soft skill development workshops.
					</Translate>
				</div>
			</Col>
			<Col xs={12} md={4}>
				<div className="blurb">
					<Link to="/consulting">
						<div className="services__link">
							<img className="blurb__svg" src={medal} alt="Medal"/><br/><br/>
							<b><Translate id="admissions">ACADEMIC CONSULTING</Translate></b><br/><br/>
						</div>
					</Link>
					<Translate id="admissions__blurb">
						Our students have gotten into top schools (boarding/day schools, colleges and graduate schools) in the U.S.
					</Translate>
				</div>
			</Col>
		</Row>
	)
}

export default ServicesShowcase;