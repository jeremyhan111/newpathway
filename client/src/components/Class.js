import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PageIntro from './PageIntro';
import Features from './Features';
import ContactButton from './ContactButton';

const Class = (props) => {
	const test = `${props.test} Prep`
	return (
		<div className="container">
			<PageIntro
				title={test}
			/>

			<Row>
				<Col sm={12} md={8}>
					<div className="class">
						<h4 className="class__about">About the {props.test}</h4>
						<p className="class__description">
							{props.testDescription}
						</p>
				

						<h4 className="class__about">About our course</h4>
						<p className="class__description">
							{props.classDescription}
						</p>
					</div>
				</Col>

				<Col sm={12} md={4}>
					<img className="test__logo" src={props.testLogo}/>
					<h4 className="test__links">Useful Links</h4>
					<a className="test__link" href={props.usRegister}>{props.test} US Registration</a><br/><br/>
					<a className="test__link" href={props.internationalRegister}>{props.test} International Registration</a><br/><br/>
					<a className="test__link" href={props.testDates}>{props.test} Test Dates</a><br/><br/>
					<a className="test__link" href={props.testCenter}>Find your Test Center</a>
					<br/><br/><br/><br/>
					<h4 className="test__links">Download our Class Schedule</h4>
					<a className="test__link">Schedule.pdf</a>
				</Col>
			</Row>

			<Features/>
			<ContactButton/>
		</div>
	)
}

export default Class;