import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';

import prepsmith from './../media/prepsmith.mp4';



const Prepsmith = () => {
	return (
		<Row className="show-grid row--spacing container">
			<Col xs={12} md={6}>
				<div className="blurb__media">
					<video id={"prepsmith-video"} autoPlay controls muted loop>
						<source src={prepsmith}/>
						Your browser does not support the video tag.
					</video>
				</div>

			</Col>

			<Col xs={12} md={6}>
				<div className="blurb">
					<p className="blurb__text">
						<Translate id="prepsmith__blurb">One of the few learning centers in China with tech-team supported software to simulate <i>real</i> online testing conditions</Translate>
					</p>
					<a href="http://www.prepsmith.com"><button className="link__button">Check Out Prepsmith</button></a>
				</div>
			</Col>
		</Row>
	)
}

export default Prepsmith;