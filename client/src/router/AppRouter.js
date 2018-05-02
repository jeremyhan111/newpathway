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
import Sat from './../components/Sat';


import ToDo from './../components/ToDo';


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

				<Route path="/ssat" component={ToDo}/>
				<Route path="/isee" component={ToDo}/>
				<Route path="/ela" component={ToDo}/>
				<Route path="/sat" component={Sat}/>
				<Route path="/act" component={ToDo}/>
				<Route path="/satii" component={ToDo}/>
				<Route path="/ap" component={ToDo}/>
				<Route path="/toefl" component={ToDo}/>
			</Switch>
			<Footer/>
		</div>
	</BrowserRouter>
);

export default AppRouter;