import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PageIntro from './PageIntro';
import Test from './Test';

const Middle = () => {
	return (
		<div className="container">
			<PageIntro 
				title="Middle School"
			/>

			<Row>
				<Col xs={12} md={4}>
					<Test
						title="SSAT"
						color="#ef4658"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat."
					/>
				</Col>
				<Col xs={12} md={4}>
					<Test
						title="ISEE"
						color="#53a2e3"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat."
					/>
					
				</Col>

				<Col xs={12} md={4}>
					<Test
						title="ELA"
						color="#69de92"
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

export default Middle;