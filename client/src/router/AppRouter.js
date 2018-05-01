import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './../components/Header';
import Landing from './../components/Landing';
import Footer from './../components/Footer';
import Services from './../components/Services';
import Team from './../components/Team';
import Contact from './../components/Contact';
import Elementary from './../components/Elementary';
import Middle from './../components/Middle';
import High from './../components/High';
import Consulting from './../components/Consulting';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/" component={Landing} exact={true}/>
				<Route path="/services" component={Services} exact={true}/>
				<Route path="/elementary" component={Elementary}/>
				<Route path="/middle" component={Middle}/>
				<Route path="/high" component={High}/>
				<Route path="/consulting" component={Consulting}/>
				<Route path="/team" component={Team}/>
				<Route path="/contact" component={Contact}/>
			</Switch>
			<Footer/>
		</div>
	</BrowserRouter>
);

export default AppRouter;