import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PageIntro from './PageIntro';
import Features from './Features';
import sat from './../images/sat.png';



const Sat = () => {
	return (
		<div className="container">
			<PageIntro
				title="Sat Prep"
			/>

			<Row>
				<Col sm={12} md={8}>
					<div className="class">
						<h4 className="class__about">About the SAT</h4>
						<p className="class__description">
							“Prestige Only” is our high end consulting service which mentors students to 
							gain acceptance into top 30 US universities and boarding schools. Understanding 
							the holistic and nuanced nature of the US admissions landscape, “Prestige Only” 
							offers a comprehensive package of 1-on-1 mentorship, application development and 
							test preparation. This is in conjunction with our elite study tours that introduce 
							families to the intricacies of top US universities and boarding schools.
						</p>
				

						<h4 className="class__about">About our course</h4>
						<p className="class__description">
							“Prestige Only” is our high end consulting service which mentors students to 
							gain acceptance into top 30 US universities and boarding schools. Understanding 
							the holistic and nuanced nature of the US admissions landscape, “Prestige Only” 
							offers a comprehensive package of 1-on-1 mentorship, application development and 
							test preparation. This is in conjunction with our elite study tours that introduce 
							families to the intricacies of top US universities and boarding schools.
						</p>
					</div>
				</Col>

				<Col sm={12} md={4}>
					<img className="test__logo" src={sat}/>
					<h4 className="test__links">Useful Links</h4>
					<a className="test__link" href="https://collegereadiness.collegeboard.org/sat/register">SAT US Registration</a><br/><br/>
					<a className="test__link" href="https://collegereadiness.collegeboard.org/sat/register/international">SAT International Registration</a><br/><br/>
					<a className="test__link" href="https://collegereadiness.collegeboard.org/sat/register/dates-deadlines">SAT Test Dates</a><br/><br/>
					<a className="test__link" href="https://collegereadiness.collegeboard.org/sat/register/find-test-centers">Find your Test Center</a>
				</Col>
			</Row>

			<Features/>
			
		</div>
	)
}

export default Sat;