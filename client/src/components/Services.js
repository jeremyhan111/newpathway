import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PageIntro from './PageIntro';
import middle from './../images/student.svg';
import high from './../images/nerd.svg';
import grad from './../images/graduate.svg';

class Services extends React.Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}
	
	render() {
		return (
			<div className="container">
				<PageIntro 
					title="Services" 
				/>

				<Row className="row--spacing">
					<Col xs={12} md={6} lg={4}>
						<div className="blurb">
							<Link to="/middle">
								<div className="services__link">
									<img className="blurb__svg" src={middle} alt="Pencils"/><br/><br/>
									<b>MIDDLE SCHOOL</b><br/><br/>
								</div>
							</Link>
							<p id="testprep__blurb">
								We prepare middle school students to earn top marks on the ELA, SSAT, and ISEE exams.
							</p>
						</div>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<div className="blurb">
							<Link to="/high">
								<div className="services__link">
									<img className="blurb__svg" src={high} alt="Pencils"/><br/><br/>
									<b>HIGH SCHOOL</b><br/><br/>
								</div>
							</Link>
							<p id="testprep__blurb">
								We prepare high school students to earn their goal scores on the SAT, ACT, SATII, AP, and TOEFL exams.
							</p>
						</div>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<div className="blurb">
							<Link to="/consulting">
								<div className="services__link">
									<img className="blurb__svg" src={grad} alt="Pencils"/><br/><br/>
									<b>ACADEMIC CONSULTING</b><br/><br/>
								</div>
							</Link>
							<p id="testprep__blurb">
								We offer consulting to help students apply and gain admission to the top boarding schools and colleges.
							</p>
						</div>
					</Col>
				</Row>



			</div>
		)
	}
}

export default Services;