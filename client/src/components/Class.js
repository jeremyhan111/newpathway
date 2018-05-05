import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PageIntro from './PageIntro';
import Features from './Features';
import ContactButton from './ContactButton';

class Class extends React.Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		const test = `${this.props.test} Prep`
		return (
			<div className="container">
				<PageIntro
					title={test}
				/>

				<Row>
					<Col sm={12} md={8}>
						<div className="class">
							<h4 className="class__about">About the {this.props.test}</h4>
							<p className="class__description">
								{this.props.testDescription}
							</p>
					

							<h4 className="class__about">About our course</h4>
							<p className="class__description">
								{this.props.classDescription}
							</p>
						</div>
					</Col>

					<Col sm={12} md={4}>
						<img className="test__logo" src={this.props.testLogo}/>
						<h4 className="test__links">Useful Links</h4>
						<a className="test__link" href={this.props.usRegister}>{this.props.test} US Registration</a><br/><br/>
						<a className="test__link" href={this.props.internationalRegister}>{this.props.test} International Registration</a><br/><br/>
						<a className="test__link" href={this.props.testDates}>{this.props.test} Test Dates</a><br/><br/>
						<a className="test__link" href={this.props.testCenter}>Find your Test Center</a>
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
}


export default Class;