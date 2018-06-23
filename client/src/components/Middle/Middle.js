import React from 'react';
import { Row, Col } from 'react-bootstrap';


import PageIntro from './../PageIntro';
import Test from './../Test';

class Middle extends React.Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<PageIntro 
					title="Middle School"
				/>

				<Row>
					<Col xs={12} md={4}>
						<Test
							title="SSAT/ISEE"
							color="#ef4658"
							link="/ssat-isee"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna 
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
					</Col>

					<Col xs={12} md={4}>
						<Test
							title="ELA"
							color="#53a2e3"
							link="/ela"
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

export default Middle;