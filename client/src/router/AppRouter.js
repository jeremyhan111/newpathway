import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import asyncComponent from './../components/AsyncComponent';
import Loadable from 'react-loadable';


// import Landing from './../components/Landing';
// import Services from './../components/Services';
// import Team from './../components/Team';
// import Contact from './../components/Contact';
// import Elementary from './../components/Elementary';
// import Middle from './../components/Middle';
// import High from './../components/High';
// import Consulting from './../components/Consulting';
// import About from './../components/About';
// import Jobs from './../components/Jobs';
// import NotFound from './../components/404';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Class from './../components/Class';

import sat from './../images/sat.png';
import act from './../images/act.png';
import ssat_isee from './../images/ssat_isee.png';
import ap from './../images/ap.png';
import toefl from './../images/toefl.png';
import ela from './../images/ela.jpg';
import sat_course from './../images/sat_course.jpg';
import act_course from './../images/act_course.jpg';
import ssat_isee_course from './../images/ssat_isee_course.jpg';
import ap_course from './../images/ap_course.jpg';
import toefl_course from './../images/toefl_course.jpg';
import ela_course from './../images/ela_course.jpg';
import sat2_course from './../images/sat2_course.jpg';

const LoadableLanding = Loadable({
  	loader: () => import('./../components/Landing'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableServices = Loadable({
  	loader: () => import('./../components/Services'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableTeam = Loadable({
  	loader: () => import('./../components/Team'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableContact = Loadable({
  	loader: () => import('./../components/Contact'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableElementary = Loadable({
  	loader: () => import('./../components/Elementary'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableMiddle = Loadable({
  	loader: () => import('./../components/Middle'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableHigh = Loadable({
  	loader: () => import('./../components/High'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableConsulting = Loadable({
  	loader: () => import('./../components/Consulting'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableAbout = Loadable({
  	loader: () => import('./../components/About'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableJobs = Loadable({
  	loader: () => import('./../components/Jobs'),
  	loading() {
    	return <div>Loading...</div>
  	}
});

const LoadableNotFound = Loadable({
  	loader: () => import('./../components/404'),
  	loading() {
    	return <div>Loading...</div>
  	}
});


// const Landing = asyncComponent(() =>
//     import('./../components/Landing').then(module => module.default)
// )

// const Services = asyncComponent(() =>
//     import('./../components/Services').then(module => module.default)
// )

// const Team = asyncComponent(() =>
//     import('./../components/Team').then(module => module.default)
// )

// const Contact = asyncComponent(() =>
//     import('./../components/Contact').then(module => module.default)
// )

// const Elementary = asyncComponent(() =>
//     import('./../components/Elementary').then(module => module.default)
// )

// const Middle = asyncComponent(() =>
//     import('./../components/Middle').then(module => module.default)
// )

// const High = asyncComponent(() =>
//     import('./../components/High').then(module => module.default)
// )

// const Consulting = asyncComponent(() =>
//     import('./../components/Consulting').then(module => module.default)
// )

// const About = asyncComponent(() =>
//     import('./../components/About').then(module => module.default)
// )

// const Jobs = asyncComponent(() =>
//     import('./../components/Jobs').then(module => module.default)
// )

// const NotFound = asyncComponent(() =>
//     import('./../components/404').then(module => module.default)
// )

const SAT = () => {
	return (
		<Class
			testLogo={sat}
			test="SAT"
			classImage={sat_course}
			usRegister = "https://collegereadiness.collegeboard.org/sat/register"
			internationalRegister = "https://collegereadiness.collegeboard.org/sat/register/international"
			testCenter = "https://collegereadiness.collegeboard.org/sat/register/find-test-centers"
		/>
	)
}

const ACT = () => {
	return (
		<Class
			testLogo={act}
			test="ACT"
			classImage={act_course}
			usRegister="https://www.act.org/content/act/en/products-and-services/the-act/registration.html"
			internationalRegister="https://www.act.org/content/act/en/products-and-services/the-act/registration.html"
			testCenter="https://www.act.org/content/act/en/products-and-services/the-act/registration/test-center-locator.html"
		/>
	)
}

const SSATISEE = () => {
	return (
		<Class
			testLogo={ssat_isee}
			test="SSAT & ISEE"
			classImage={ssat_isee_course}
		/>
	)
}

const AP = () => {
	return (
		<Class
			testLogo={ap}
			test="AP Exam"
			classImage={ap_course}
		/>
	)
}

const SATII = () => {
	return (
		<Class
			testLogo={sat}
			test="SAT II"
			classImage={sat2_course}
			usRegister="https://collegereadiness.collegeboard.org/sat-subject-tests/register"
			internationalRegister="https://collegereadiness.collegeboard.org/sat-subject-tests/register/international-registration"
			testCenter="https://collegereadiness.collegeboard.org/sat-subject-tests/register/find-test-centers"
		/>
	)
}

const TOEFL = () => {
	return (
		<Class
			testLogo={toefl}
			test="TOEFL"
			classImage={toefl_course}
			usRegister="https://www.ets.org/toefl/ibt/register"
			internationalRegister="https://www.ets.org/toefl/ibt/register"
			testCenter="https://www.ets.org/toefl/ibt/register/centers_dates"
		/>
	)
}

const ELA = () => {
	return (
		<Class
			testLogo={ela}
			test="ELA"
			classImage={ela_course}
		/>
	)
}




const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/" component={LoadableLanding} exact={true}/>
				<Route path="/services" component={LoadableServices}/>
				<Route path="/elementary" component={LoadableElementary}/>
				<Route path="/middle" component={LoadableMiddle}/>
				<Route path="/high" component={LoadableHigh}/>
				<Route path="/consulting" component={LoadableConsulting}/>
				<Route path="/team" component={LoadableTeam}/>
				<Route path="/contact" component={LoadableContact}/>
				<Route path="/about" component={LoadableAbout}/> 
				<Route path="/jobs" component={LoadableJobs}/> 

				<Route path="/ssat-isee" component={SSATISEE}/>
				<Route path="/ela" component={ELA}/>
				<Route path="/sat" component={SAT}/>
				<Route path="/act" component={ACT}/>
				<Route path="/satii" component={SATII}/>
				<Route path="/ap" component={AP}/>
				<Route path="/toefl" component={TOEFL}/>
				<Route path="*" component={LoadableNotFound}/>
			</Switch>
			<Footer/>
		</div>
	</BrowserRouter>
);

export default AppRouter;


