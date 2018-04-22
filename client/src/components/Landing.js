import React, { Component } from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

import prepsmith from './../media/prepsmith.mp4';
import alex from './../images/alex.jpg';
import pete from './../images/pete.jpg';
import charles from './../images/charles.jpg';
import kirk from './../images/kirk.jpg';
import sandy from './../images/sandy.jpg';
import colleges from './../images/colleges.png';
import scores from './../images/scores.png';
import user from './../images/user.svg';
import pencils from './../images/pencils.svg';
import medal from './../images/medal.svg';

export default class Landing extends Component {
	componentDidMount() {
		let el = document.querySelector('.landing');
		setTimeout(() => {el.classList.add('fade-in')}, 0);
	}

	render() {
		return (
			<div>
				<div className="landing landing--big">
					<h1 className="landing__title">New Pathway</h1>
					<h4 className="landing__subtitle"><Translate id="landing__subtitle">Teaching Lifelong Success</Translate></h4>

					<Link to="/contact"><button className="link__button landing__button--spacing">
						<Translate id="signup">Sign Up For Classes</Translate>
					</button></Link>
				</div>

				<Grid className="container__page">
					<Row className="show-grid row--spacing row--top container">
						<h1 className="blurb__title"><Translate id="ourservices">OUR SERVICES</Translate></h1>
						<Col xs={12} md={4}>
							<div className="blurb">
								<Link to="/services">
									<div className="services__link">
										<img className="blurb__svg" src={pencils} alt="Pencils"/><br/><br/>
										<b><Translate id="testprep">TEST PREP & TUTORING</Translate></b><br/><br/>
									</div>
								</Link>
								<Translate id="testprep__blurb">
									We offer top notch test prep service in standardized tests such as SAT, ACT, SAT subject tests, 
									AP tests and TOEFL. Face-to-face and virtual classes are available in all subjects. 
									Features mobile apps for homework practice and management reports.
								</Translate>
							</div>
						</Col>
						<Col xs={12} md={4}>
							<div className="blurb">
								<Link to="/services">
									<div className="services__link">
										<img className="blurb__svg" src={user} alt="Camps"/><br/><br/>
										<b><Translate id="camps">CAMPS & WORKSHOPS</Translate></b><br/><br/>
									</div>
								</Link>
								<Translate id="camps__blurb">
									Summer & Winter camps in technology, business, medicine, international relations and engineering fields. 
									Soft skill development workshops.
								</Translate>
							</div>
						</Col>
						<Col xs={12} md={4}>
							<div className="blurb">
								<Link to="/services">
									<div className="services__link">
										<img className="blurb__svg" src={medal} alt="Medal"/><br/><br/>
										<b><Translate id="admissions">ADMISSIONS CONSULTING</Translate></b><br/><br/>
									</div>
								</Link>
								<Translate id="admissions__blurb">
									Our students have gotten into top schools (boarding/day schools, colleges and graduate schools) in the U.S.
								</Translate>
							</div>
						</Col>
					</Row>




					<div className="container--grey">
						<Row className="show-grid row--spacing container">
							<Col xs={12} md={6} mdPush={6}>
								<div className="blurb__media">
									<Carousel className="carousel__team"
											  indicators={false} 
											  interval={4000}>
										<Carousel.Item>
											<img width={450} src={alex} alt="Alex Cion"/>
											<Carousel.Caption>
												<div className="carousel-caption__textbox">
													<h2>Alex Cion</h2>
													<p>Lehigh, Taught 4+ years</p>
												</div>
											</Carousel.Caption>
										</Carousel.Item>

										<Carousel.Item>
											<img width={450} src={pete} alt="Peter Carver"/>
											<Carousel.Caption>
												<div className="carousel-caption__textbox">
													<h2>Peter Carver</h2>
													<p>GWU, Taught 8+ years</p>
												</div>
											</Carousel.Caption>
										</Carousel.Item>

										<Carousel.Item>
											<img width={450} src={kirk} alt="Kirk Cowgill"/>
											<Carousel.Caption>
												<div className="carousel-caption__textbox">
													<h2>Kirk Cowgill</h2>
													<p>UCDavis, Taught 4+ years</p>
												</div>
											</Carousel.Caption>
										</Carousel.Item>

										<Carousel.Item>
											<img width={450} src={sandy} alt="Sandy Qi"/>
											<Carousel.Caption>
												<div className="carousel-caption__textbox">
													<h2>Sandy Qi</h2>
													<p>UChicago, Taught 3+ years</p>
												</div>
											</Carousel.Caption>
										</Carousel.Item>

										<Carousel.Item>
											<img width={450} src={charles} alt="Charles Carrier"/>
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
									<p className="blurb__text"><Translate id="meetteam__blurb"><b>Meet our experienced and well-educated team of international teachers</b></Translate></p>
									<Link to="/team"><button className="link__button"><Translate id="meetteam">Meet The Team</Translate></button></Link>
								</div>
								
							</Col>
						</Row>

						<Row className="show-grid row--spacing container">
							<Col xs={12} md={6}>
								<div className="blurb__media">
									<video id={"prepsmith-video"} autoPlay muted loop>
										<source src={prepsmith}/>
										Your browser does not support the video tag.
									</video>
								</div>

							</Col>

							<Col xs={12} md={6}>
								<div className="blurb">
									<p className="blurb__text">
										<Translate id="prepsmith__blurb"><b>One of the few learning centers in China with tech-team supported software to simulate <i>real</i> online testing conditions</b></Translate>
									</p>
									<a href="http://www.prepsmith.com"><button className="link__button">Check Out Prepsmith</button></a>
								</div>
							</Col>
						</Row>
					</div>







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


					<div className="container--grey">
						<Row className="show-grid row--spacing row--top testimonials container">
							<h1 className="blurb__title"><Translate id="testimonials">TESTIMONIALS</Translate></h1>
							<Col xs={12} md={4}>
								<div className="blurb">
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." 
									<br/>
									<br/>
									<i>John Kim, scored a 1580 on the SAT</i>


								</div>
							</Col>
							<Col xs={12} md={4}>
								<div className="blurb">
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." 
									<br/>
									<br/>
									<i>April Chen, scored a 35 on the ACT</i>
								</div>
							</Col>
							<Col xs={12} md={4}>
								<div className="blurb">
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									laboris nisi ut aliquip ex ea commodo consequat." 
									<br/>
									<br/>
									<i>Eric Li, scored a 1540 on the SAT</i>
								</div>
							</Col>
						</Row>
					</div>

					<Row className="show-grid row--spacing">
						<Col xs={12} md={12}>
							<div className="blurb">
								<Translate id="ready__blurb">
									Ready to improve your scores and get into your dream schools?
								</Translate>
							</div>
							<Link to="/contact"><button className="link__button">
								<Translate id="contact">
									Contact Us
								</Translate>
							</button></Link>
						</Col>
					</Row>



				</Grid>
			</div>
		)
	}
};
