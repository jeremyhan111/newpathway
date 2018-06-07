import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PageIntro from './PageIntro';

class About extends React.Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<PageIntro
					title="About Us"
				/>

				<Row className="row--spacing">
					<Col sm={12} md={8} mdOffset={2}>
						<div className="about__intro">
							<h1 className="about__title about__title--font">New Pathway Education</h1>
							<p className="about__paragraph">
								We provide the most innovative and inspirational one-stop platform 
								in terms of test preparation and college counseling. We facilitate 
								self-discovery and maximize student potential while ultimately 
								instilling in our students a confidence and skill set that transfers 
								to their academic lives and fuels their aspiration to higher education 
								in the world's best universities.
							</p>
						</div>
					</Col>
				</Row>
				<Row className="row--spacing">
					<Col sm={12} md={7}>	
						<h1 className="about__title">History</h1>	
						<p className="about__paragraph">
							New Pathway Education & Technology Group was founded in 2009. Our teachers 
							possess strong academic backgrounds, a passion for education, and varied 
							life experiences that inspire our students. We combine both online and offline 
							interactive teaching techniques developed upon the foundation of traditional 
							American educational values. We successfully mentor thousands of students each 
							year.
						</p>

						<p className="about__paragraph">
							As demand increased, we opened 7 campuses in China: 4 campuses in Shanghai, 2 
							in Beijing, 1 in Boston and 1 in New York City. Our training programs have been 
							expanded, ranging from TOEFL, SAT/ACT, SAT Subject, AP/IB, in addition to our 
							educators researched and developed more unique programs such as “Scholar Tree”, 
							“ELA”, and “Life Coaching” that will dramatically help students whose age from 
							6 to 17 years old improve their English capabilities, leadership, communication 
							skills and other crucial competitive advantage for their future under a total 
							English teaching environment. In terms of extra-curricular, we also provide plenty 
							of activities and projects including international communication, international 
							volunteer programs, leadership development and so on that we cooperated with the 
							most selective schools in the US and well-known organizations in China and overseas. 
							Through this abundant and worldwide platform we built for our students, we help them 
							discovery themselves, maximize their potential, and encourage them to pursue their 
							dreams, always be ready to take the challenge they may encounter. Eventually we hope 
							our students gain personal confidence and ability that transfers to their academic 
							lives and into their future as they aspire to higher education in the world’s best universities.
						</p>
					</Col>

					<Col sm={12} md={4} mdOffset={1}>
						<h1 className="about__title">Core Values</h1>
						<ul className="about__paragraph about__list">
							<li> <b>Passion & Initiative:</b><br/> We have purpose, we are inspired by our mission and thus we are determined </li>
							<li> <b>Teamwork:</b><br/> We are collaborative, we see our multi-cultural team as an asset and not an obstacle </li>
							<li> <b>Professionalism:</b><br/> We exercise high levels of professionalism and relay to our clients in this manner so we can produce the best work possible </li>
							<li> <b>Support & Care:</b><br/> We are for each other, our clients, and our students on a personal level and demonstrate respect for the individual. We are committed to the idea of maximizing each student’s potential </li>
							<li> <b>Quality & Results:</b><br/> We want to be the best and deliver only quality products and achieve real results. Whatever it takes (WIT) </li>
						</ul>
					</Col>
				</Row>


				<Row className="row--spacing">
					<Col sm={12} md={4}>
						<Fade top>
							<div className="value philosophy">
								<h1 className="about__title">Philosophy</h1>
								<p className="about__paragraph">
									Unlimited potential lies within every student, and the future of our world 
									will be molded by today's youth. As educators and innovators, it is our duty 
									to help shape a new pathway for our students' futures.
								</p>
							</div>
						</Fade>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={4}>
						<Fade top>
							<div className="value mission">
								<h1 className="about__title">Mission</h1>
								<p className="about__paragraph">
									The mission of New Pathway Education & Technology Group is to transform 
									students lives through education and mentorship.
								</p>
							</div>
						</Fade>
					</Col>
				</Row>
				<Row className="row--spacing">
					<Col sm={12} md={4}>
						<Fade top>
							<div className="value vision">
								<h1 className="about__title">Vision</h1>
								<p className="about__paragraph">
									To be the #1 test prep company focused on maximizing every student's potential.
								</p>
							</div>
						</Fade>
					</Col>
				</Row>
			</div>
		)
	}
}

export default About;