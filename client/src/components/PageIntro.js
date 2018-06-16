import React from 'react';

import chalkboard from './../images/title.svg';
import { Grid, Row, Col } from 'react-bootstrap';

const PageIntro = (props) => {
	return (
		<div>
			<Row>
				<Col xs={12} md={6} mdOffset={3}>
					<br/><br/>
					<div className="intro">
						<div className="intro__container">
							<h1 className="intro__title">{props.title}</h1>
						</div>
					</div>
					<br/><br/>
					<hr/>
				</Col>
			</Row>
		</div>
	)
}

export default PageIntro;