import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';

const Testimonials = () => {
	return (
		<Row className="container show-grid row--spacing row--top testimonials">
			<h1 className="blurb__title"><Translate id="testimonials">TESTIMONIALS</Translate></h1>
			<Col xs={12} md={4}>
				<p className="blurb">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
					laboris nisi ut aliquip ex ea commodo consequat." 
					<br/>
					<br/>
					<i>John Kim, scored a 1580 on the SAT</i>
				</p>
			</Col>
			<Col xs={12} md={4}>
				<p className="blurb">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
					laboris nisi ut aliquip ex ea commodo consequat." 
					<br/>
					<br/>
					<i>April Chen, scored a 35 on the ACT</i>
				</p>
			</Col>
			<Col xs={12} md={4}>
				<p className="blurb">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
					laboris nisi ut aliquip ex ea commodo consequat." 
					<br/>
					<br/>
					<i>Eric Li, scored a 1540 on the SAT</i>
				</p>
			</Col>
		</Row>
	)
}

export default Testimonials;