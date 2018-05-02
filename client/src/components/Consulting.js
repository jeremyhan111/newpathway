import React from 'react';

import PageIntro from './PageIntro';
import { Row, Col } from 'react-bootstrap';
import po from './../images/po-logo.png';

const Consulting = () => {
	return (
		<div className="container">
			<PageIntro
				title="Prestige Only"
			/>
			<Row>
				<Col sm={12} md={8}>
					<div className="consulting__body">
						<h4><b>ABOUT</b></h4>
						<p>
							“Prestige Only” is our high end consulting service which mentors students to 
							gain acceptance into top 30 US universities and boarding schools. Understanding 
							the holistic and nuanced nature of the US admissions landscape, “Prestige Only” 
							offers a comprehensive package of 1-on-1 mentorship, application development and 
							test preparation. This is in conjunction with our elite study tours that introduce 
							families to the intricacies of top US universities and boarding schools.
						</p>

						<p>
							A dynamic and passionate team of foreign senior consultants who have all graduated from 
							top 30 US universities, deliver our specialized mentorship service. Consultants build 
							comprehensive road maps, execute unique independent projects, and create compelling application 
							hooks and essays with each student based upon the student’s interests and goals. Consultants 
							serve as mentors and role models who provide detailed follow up reports and progress updates 
							to parents as they instill intrinsic motivation and passion in each student. The interactive 
							and personalized nature of our service typically spans 12 to 36 months. “Prestige Only” emphasizes 
							the process, as well as the result, which ensures that our students not only gain acceptance to, 
							but also excel in, elite US institutions.
						</p>
					</div>
				</Col>

				<Col sm={12} md={4}>
					<img className="consulting__logo" src={po}/><br/><br/>
					<a className="consulting__url" href="http://po.eic.org.cn/">po.eic.org.cn</a>
				</Col>
			</Row>
		</div>
	)
}

export default Consulting;