import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';

import colleges from './../images/colleges.png';
import scores from './../images/scores.png';

const Statistics = () => {
	return (
		<Row className="show-grid row--spacing container">
			<Col xs={12} md={12}>
				<p className="blurb blurb--spacing">
					<Translate id="ourstudents">
						Our students earn excellent scores and attend
						top universities
					</Translate>
				</p>

				<Carousel controls={true}
						  interval={2500}>
					<Carousel.Item>
							<img src={colleges} alt="Colleges"/>
					</Carousel.Item>

					<Carousel.Item>
						<img src={scores} alt="Scores"/>
					</Carousel.Item>
				</Carousel>
			</Col>
		</Row>

	)
}

export default Statistics;