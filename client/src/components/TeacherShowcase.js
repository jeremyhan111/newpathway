import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';

import alex from './../images/alex.jpg';
import pete from './../images/pete.jpg';
import charles from './../images/charles.jpg';
import kirk from './../images/kirk.jpg';
import sandy from './../images/sandy.jpg';

const TeacherShowcase = () => {
	return (
		<Row className="show-grid row--spacing container">
			<Col xs={12} md={6} mdPush={6}>
				<div className="blurb__media">
					<Carousel className="carousel__team"
							  indicators={false} 
							  interval={4000}>
						<Carousel.Item>
							<img className="carousel__teacher" src={alex} alt="Alex Cion"/>
							<Carousel.Caption>
								<div className="carousel-caption__textbox">
									<h2>Alex Cion</h2>
									<p>Lehigh, Taught 4+ years</p>
								</div>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="carousel__teacher" src={pete} alt="Peter Carver"/>
							<Carousel.Caption>
								<div className="carousel-caption__textbox">
									<h2>Peter Carver</h2>
									<p>GWU, Taught 8+ years</p>
								</div>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="carousel__teacher" src={kirk} alt="Kirk Cowgill"/>
							<Carousel.Caption>
								<div className="carousel-caption__textbox">
									<h2>Kirk Cowgill</h2>
									<p>UCDavis, Taught 4+ years</p>
								</div>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="carousel__teacher" src={sandy} alt="Sandy Qi"/>
							<Carousel.Caption>
								<div className="carousel-caption__textbox">
									<h2>Sandy Qi</h2>
									<p>UChicago, Taught 3+ years</p>
								</div>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="carousel__teacher" src={charles} alt="Charles Carrier"/>
							<Carousel.Caption>
								<div className="carousel-caption__textbox">
									<h2>Charles Carrier</h2>
									<p>Guilford, Taught 4+ years</p>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</Col>
			<Col xs={12} md={6} mdPull={6}>
				<div className="blurb">
					<p className="blurb__text"><Translate id="meetteam__blurb">Meet our experienced and well-educated team of international teachers</Translate></p>
					<Link to="/team"><button className="link__button"><Translate id="meetteam">Meet The Team</Translate></button></Link>
				</div>
				
			</Col>
		</Row>
	)
}

export default TeacherShowcase;