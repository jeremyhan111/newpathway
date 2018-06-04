import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Jobs extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<Row>
					<Col sm={12} md={4} mdOffset={1}>
						<h1 className="jobs__header">Join the Team</h1>
						<p className="jobs__subheader">And impact the lives of students all over China</p>
					</Col>
				</Row>
			</div>

		)
	}
}

export default Jobs;