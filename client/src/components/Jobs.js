import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import JobGenre from './JobGenre';
import Job from './Job';

class Jobs extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<Row>
					<Col sm={12} md={6} mdOffset={1}>
						<h1 className="jobs__header">Join the Team</h1>
						<p className="jobs__subheader">And impact the lives of students all over China</p>
					</Col>
				</Row>
				<div className="job__block">
					<JobGenre title="Business Development"/>
					<Job title="Business Development Manager" location="Shanghai" url="https://google.com"/>
					<Job title="Business Development Manager" location="Shanghai" url="https://google.com"/>
					<Job title="Business Development Manager" location="Shanghai" url="https://google.com"/>
					<Job title="Business Development Manager" location="Shanghai" url="https://google.com"/>
				</div>
				<div className="job__block">
					<JobGenre title="Marketing"/>
					<Job title="Marketing Lead" location="Shanghai" url="https://google.com"/>
					<Job title="Marketing Analyst" location="Shanghai" url="https://google.com"/>
					<Job title="Marketing Manager" location="Shanghai" url="https://google.com"/>
				</div>
				<div className="job__block">
					<JobGenre title="Operations"/>
					<Job title="Operations Analyst" location="Shanghai" url="https://google.com"/>
				</div>
				<div className="job__block">
					<JobGenre title="Teaching"/>
					<Job title="Math/Science Teacher" location="Shanghai" url="https://google.com"/>
					<Job title="Lead Teacher" location="Shanghai" url="https://google.com"/>
					<Job title="English/Reading Teacher" location="Shanghai" url="https://google.com"/>
				</div>
			</div>

		)
	}
}

export default Jobs;