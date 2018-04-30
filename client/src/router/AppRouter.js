import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './../components/Header';
import Landing from './../components/Landing';
import Footer from './../components/Footer';
import Services from './../components/Services';
import Team from './../components/Team';
import Contact from './../components/Contact';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/" component={Landing} exact={true}/>
				<Route path="/services" component={Services} exact={true}/>
				<Route path="/services/elementary" component={Services}/>
				<Route path="/services/middle" component={Services}/>
				<Route path="/services/high" component={Services}/>
				<Route path="/services/consulting" component={Services}/>
				<Route path="/team" component={Team}/>
				<Route path="/contact" component={Contact}/>
			</Switch>
			<Footer/>
		</div>
	</BrowserRouter>
);

export default AppRouter;