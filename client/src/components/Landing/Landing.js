import React, { Component } from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import Loadable from 'react-loadable';

const LoadableTitle = Loadable({
  	loader: () => import('./Title'),
    delay: 300,
  	loading() {
    	return null;
  	}
});

const LoadableContactButton = Loadable({
  	loader: () => import('./../ContactButton'),
    delay: 300,
  	loading() {
    	return null;
  	}
});

const LoadablePrepsmith = Loadable({
  	loader: () => import('./Prepsmith'),
    delay: 300,
  	loading() {
    	return null;
  	}
});

const LoadableTeacherShowcase = Loadable({
  	loader: () => import('./TeacherShowcase'),
    delay: 300,
  	loading() {
    	return null;
  	}
});

const LoadableTestimonials = Loadable({
  	loader: () => import('./Testimonials'),
    delay: 300,
  	loading() {
    	return null;
  	}
});

const LoadableServicesShowcase = Loadable({
  	loader: () => import('./ServicesShowcase'),
    delay: 300,
  	loading() {
    	return null;
  	}
});

const LoadableStatistics = Loadable({
  	loader: () => import('./Statistics'),
    delay: 300,
  	loading() {
    	return null;
  	}
});

export default class Landing extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div>
				<LoadableTitle/>
				<Grid className="container__page">
					<LoadableServicesShowcase/>

					<div className="container--grey">
						<LoadableTeacherShowcase/>
						<LoadablePrepsmith/>
					</div>

					<LoadableStatistics/>

					<div className="container--grey">
						<LoadableTestimonials/>
					</div>

					<LoadableContactButton/>

				</Grid>
			</div>
		)
	}
};
