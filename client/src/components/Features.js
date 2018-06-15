import React from 'react';
import { Row, Col } from 'react-bootstrap';

import pen from './../images/pen.svg';
import computer from './../images/computer.svg';
import abacus from './../images/abacus.svg';
import sqrrt from './../images/square-root.svg';

const Features = () => {
	return (
		<div className="container features">
			<Row>
				<Col sm={12} md={6} lg={3}>
					<section className="feature">
						<img className="feature__svg" src={pen}/>
						<h3><b>Experienced Teachers</b></h3>
						<p className="feature__description">
							Our teachers hail from top schools and boast years of teaching experience, including time spent teaching at universities. 
						</p>
					</section>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<section className="feature">
						<img className="feature__svg" src={computer}/>
						<h3><b>Proven Results</b></h3>
						<p className="feature__description">
							Our teachers have helped hundreds of students achieve their goal scores on all of the tests offered.
						</p>
					</section>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<section className="feature">
						<img className="feature__svg" src={abacus}/>
						<h3><b>Personal Attention</b></h3>
						<p className="feature__description">
							Our teachers develop curriculums tailored to their students' strengths and weaknesses.
							
						</p>
					</section>
				</Col>
				<Col sm={12} md={6} lg={3}>
					<section className="feature">
						<img className="feature__svg" src={sqrrt}/>
						<h3><b>Dedication</b></h3>
						<p className="feature__description">
							Our teachers are dedicated to helping students succeed in the classroom and beyond.
						</p>
					</section>
				</Col>
			</Row>
		</div>
	)
}

export default Features;