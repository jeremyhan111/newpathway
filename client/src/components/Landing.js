import React, { Component } from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import Loadable from 'react-loadable';

const LoadableTitle = Loadable({
  	loader: () => import('./Title'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableContactButton = Loadable({
  	loader: () => import('./ContactButton'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadablePrepsmith = Loadable({
  	loader: () => import('./Prepsmith'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableTeacherShowcase = Loadable({
  	loader: () => import('./TeacherShowcase'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableTestimonials = Loadable({
  	loader: () => import('./Testimonials'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableServicesShowcase = Loadable({
  	loader: () => import('./ServicesShowcase'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableStatistics = Loadable({
  	loader: () => import('./Statistics'),
  	loading() {
    	return <div>Loading...</div>
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
