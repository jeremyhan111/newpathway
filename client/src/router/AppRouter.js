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
import Class from './../components/Class';
import About from './../components/About';
import Jobs from './../components/Jobs';
import Locations from './../components/Locations';
import Four from './../components/404';

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
				<Route path="/" component={Landing} exact={true}/>
				<Route path="/services" component={Services}/>
				<Route path="/elementary" component={Elementary}/>
				<Route path="/middle" component={Middle}/>
				<Route path="/high" component={High}/>
				<Route path="/consulting" component={Consulting}/>
				<Route path="/team" component={Team}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/about" component={About}/> 
				<Route path="/jobs" component={Jobs}/> 
				<Route path="/locations" component={Locations}/> 

				<Route path="/ssat-isee" component={SSATISEE}/>
				<Route path="/ela" component={ELA}/>
				<Route path="/sat" component={SAT}/>
				<Route path="/act" component={ACT}/>
				<Route path="/satii" component={SATII}/>
				<Route path="/ap" component={AP}/>
				<Route path="/toefl" component={TOEFL}/>
				<Route component={Four}/>
			</Switch>
			<Footer/>
		</div>
	</BrowserRouter>
);

export default AppRouter;


