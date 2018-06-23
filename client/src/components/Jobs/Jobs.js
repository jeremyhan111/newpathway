import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import JobGenre from './JobGenre';
import Job from './Job';
import npicon from './../../images/npicon.png';

class Jobs extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<div className="jobs__intro">
					<Row>
						<Col sm={12} md={6} mdOffset={1}>
							<h1 className="jobs__header">JOIN THE TEAM</h1>
						</Col>
					</Row>
				</div>
				<Row>
					<Col sm={12} md={8}>
						<p className="jobs__section">
							At New Pathway, our teachers and mentors are committed to providing our students with an educational 
							experience that will prepare them to succeed in college and beyond. Whether you're a teacher, a curriculum 
							developer, or a coder, the work that you do will help inspire thousands of students in their everyday lives.
						</p>

						<p className="jobs__section">
							The main reason why so many of us chose New Pathway, and why we stay, is because of the people we work with. 
							Our people resonate well with each other. We believe that providing the most qualified and capable teachers 
							and staff is the most important factor. If you believe that you can provide a positive influence and dedicate 
							yourself to teach students, New Pathway is looking for you!
						</p>
					</Col>

					<Col sm={12} md={4}>
						<img className="jobs__npicon" src={npicon}/>
					</Col>
				</Row>

				<p className="jobs__section jobs__section--spacing">Please send your resume to npathway@eiceeducation.com if you are interested in any of the positions</p>

				<div className="job__block">
					<JobGenre title="Business Development"/>
					<Job title="Business Development Manager" location="Shanghai" lookingFor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." responsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." requirements="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>
				<div className="job__block">
					<JobGenre title="Marketing"/>
					<Job title="Marketing Lead" location="Shanghai" lookingFor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." responsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." requirements="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat."/>
					<Job title="Marketing Analyst" location="Shanghai" lookingFor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." responsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." requirements="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat."/>
					<Job title="Marketing Manager" location="Shanghai" lookingFor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." responsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." requirements="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>
				<div className="job__block">
					<JobGenre title="Operations"/>
					<Job title="Operations Analyst" location="Shanghai" lookingFor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." responsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." requirements="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>
				<div className="job__block">
					<JobGenre title="Teaching"/>
					<Job title="Math/Science Teacher" location="Shanghai" lookingFor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." responsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." requirements="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat."/>
					<Job title="Lead Teacher" location="Shanghai" />
					<Job title="English/Reading Teacher" location="Shanghai" lookingFor="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." responsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." requirements="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>
			</div>

		)
	}
}

export default Jobs;