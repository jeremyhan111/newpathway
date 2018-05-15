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
							description="Our rigorous SAT curriculum include hours of learning 
										with our experienced teachers in the Reading, Writing 
										and Math sections. Our prep class will provide you with 
										tips and tricks to score well on the SAT. We offer both
										private and group classes."
						/>
					</Col>
					<Col xs={12} md={4}>
						<Test
							title="ACT"
							color="#53a2e3"
							link="/act"
							description="Our ACT curriculum trains students in the Reading, Writing,
							Math, and Science sections. Our experienced teachers will prepare you to
							perform your best on test day. We offer both private an group classes."
						/>
						
					</Col>

					<Col xs={12} md={4}>
						<Test
							title="SATII"
							color="#69de92"
							link="/satii"
							description="Get ready for the SAT subject test exams by meeting with
										our knowledgeable teachers."
						/>
					</Col>
				</Row>

				<Row>
					<Col xs={12} md={4}>
						<Test
							title="AP EXAMS"
							color="#f4ad49"
							link="/ap"
							description="Prepare for the AP Exams with someone who can guide you through
										every step of the learning process."
						/>
					</Col>
					<Col xs={12} md={4}>
						<Test
							title="TOEFL"
							color="#6757e2"
							link="/toefl"
							description="Learn English vocabulary and grammar with some of the best teachers
										in Shanghai."
						/>
						
					</Col>
				</Row>
			</div>
		)
	}
}

export default High;