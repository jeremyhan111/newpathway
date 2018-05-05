import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PageIntro from './PageIntro';
import Test from './Test';

class High extends React.Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<PageIntro 
					title="High School"
				/>

				<Row>
					<Col xs={12} md={4}>
						<Test
							title="SAT"
							color="#ef4658"
							link="/sat"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna 
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
					</Col>
					<Col xs={12} md={4}>
						<Test
							title="ACT"
							color="#53a2e3"
							link="/act"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna 
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
						
					</Col>

					<Col xs={12} md={4}>
						<Test
							title="SATII"
							color="#69de92"
							link="/satii"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna 
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
					</Col>
				</Row>

				<Row>
					<Col xs={12} md={4}>
						<Test
							title="AP EXAMS"
							color="#f4ad49"
							link="/ap"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna 
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
					</Col>
					<Col xs={12} md={4}>
						<Test
							title="TOEFL"
							color="#6757e2"
							link="/toefl"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna 
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
						
					</Col>
				</Row>
			</div>
		)
	}
}

export default High;