import React, { Component } from 'react';
import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import { Row, Col } from 'react-bootstrap';

import PageIntro from './PageIntro'
import Teacher from './Teacher';

import alex from './../images/alex.jpg';
import pete from './../images/pete.jpg';
import charles from './../images/charles.jpg';
import kirk from './../images/kirk.jpg';
import sandy from './../images/sandy.jpg';
import bart from './../images/bart.jpg';
import ellen from './../images/ellen.jpg';
import jeremy from './../images/jeremy.jpg';
import julie from './../images/julie.jpg';
import justin from './../images/justin.jpg';
import maura from './../images/maura.jpg';
import miles from './../images/miles.jpg';
import riley from './../images/riley.png';

class Team extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<PageIntro
					title="Team"
				/>

				<Tabs
			        defaultActiveKey="1"
			        renderTabBar={()=><ScrollableInkTabBar />}
			        renderTabContent={()=><TabContent />}
			    >
			        <TabPane tab='Test Prep' key="1">
			        	<h1>Test Prep</h1>
			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				degree="BA Political Science and Science, Technology, and Society"
			        				experience="4+ years teaching experience in Korea and China"
			        				funfact="National Merit Scholar"
			        				src={alex}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Peter Carver"
			        				university="George Washington University"
			        				degree="MA from Brandeis University in Sustainable Development"
			        				experience="Teacher for 10+ years"
			        				funfact="TESOL Certified and US Peace Corps"
			        				src={pete}
			        			/>
			        		</Col >

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Kirk Cowgill"
			        				university="UC Davis"
			        				degree="BA in Political Science"
			        				experience="4+ years teaching experience in California and China"
			        				funfact="Worked for Arnold Schwarzenegger, Senator David Cox, and spent 3+ years working in the House of Representatives"
			        				src={kirk}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Sandy Qi"
			        				university="University of Chicago"
			        				degree="BA in Philosophy"
			        				experience="4+ years teaching experience in Chicago and China"
			        				funfact="Graduated with honors and a GPA of 3.86, fluent in Chinese and intermediate in German"
			        				src={sandy}
			        			/>
			        		</Col>
			        	</Row>

			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Riley Inks"
			        				university="University of Texas"
			        				degree="MA in Political Science and Philosophy"
			        				experience="3+ years teaching experience as a college lecturer"
			        				funfact="TEFL Certified"
			        				src={riley}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Bart Rich"
			        				university="University of Georgia"
			        				degree="BA in History and BS in Psychology"
			        				experience="4+ years teaching experience in China and America"
			        				funfact="Studied abroad at Oxford, avid traveler"
			        				src={bart}
			        			/>
			        		</Col >

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Justin Irizarry"
			        				university="University of Texas"
			        				degree="MA and MFA in Creative Writing from University of Nevada"
			        				experience="3+ years experience as a Teaching Fellow"
			        				funfact="Spent several years working at Netflix and build own music app"
			        				src={justin}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Maura McKay"
			        				university="University of Colorado, Boulder"
			        				degree="BA in Astrophysics"
			        				experience="2+ years experience teaching in China"
			        				funfact="Teaching Assistant in Nanjing, conducted research at CASA"
			        				src={maura}
			        			/>
			        		</Col >
			        	</Row>  

			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Jeremy Han"
			        				university="Swarthmore College"
			        				degree="BA in Physics and Computer Science"
			        				experience="1+ years teaching experience in China"
			        				funfact="Conducted research in Plasma Physics and coded this website"
			        				src={jeremy}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Ellen Chai"
			        				university="Washington University in St. Louis"
			        				degree="BA in Philosophy, Neuroscience, and Psychology"
			        				experience="ACT English and Reading Test Prep Instructor in the US"
			        				funfact="National Merit Scholar, Dean's List, conducted research in Psychology"
			        				src={ellen}
			        			/>
			        		</Col >

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Julie Gonzalez"
			        				university="University of Texas"
			        				degree="MA in Political Science and International Relations"
			        				experience="Professor of Political Science at University of Texas for 5+ years, 2 years ACT Private Tutoring"
			        				funfact="Fluent in Spanish, studied abroad in Spain"
			        				src={julie}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Miles Taylor"
			        				university="University of the West of England"
			        				degree="BA in English Literature"
			        				experience="4+ years teaching experience at the prestigious English academy in Tianjin"
			        				funfact="Experience proof-reader and copy-editors"
			        				src={miles}
			        			/>
			        		</Col >
			        	</Row>
			        </TabPane>

			        <TabPane tab='English Language Arts' key="2">
			        	<h1>English Language Arts</h1>
			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Peter Carver"
			        				university="George Washington University"
			        				src={pete}
			        			/>			
			        		</Col >

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Kirk Cowgill"
			        				university="UC Davis"
			        				src={kirk}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Sandy Qi"
			        				university="University of Chicago"
			        				src={sandy}
			        			/>      			
			        		</Col>
			        	</Row>

			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>	        			
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>        			
			        		</Col >


			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>		
			        		</Col>
			        	</Row>    
			        </TabPane>
			        <TabPane tab='Prestige Only' key="3">
			        	<h1>Prestige Only</h1>
			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Peter Carver"
			        				university="George Washington University"
			        				src={pete}
			        			/>
			        			
			        		</Col >

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Kirk Cowgill"
			        				university="UC Davis"
			        				src={kirk}
			        			/>
			        			
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Sandy Qi"
			        				university="University of Chicago"
			        				src={sandy}
			        			/>
			        			
			        		</Col>

			        	</Row>

			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        			
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        			
			        		</Col >


			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        			
			        		</Col>

			        	</Row>

			        </TabPane>

			        <TabPane tab='Course Coordinators' key="4">
			        	<h1>Course Coordinators</h1>
			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				degree="BA Political Science"
			        				src={alex}
			        			/>
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Peter Carver"
			        				university="George Washington University"
			        				src={pete}
			        			/>
			        			
			        		</Col >

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Kirk Cowgill"
			        				university="UC Davis"
			        				src={kirk}
			        			/>
			        			
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Sandy Qi"
			        				university="University of Chicago"
			        				src={sandy}
			        			/>
			        			
			        		</Col>

			        	</Row>

			        	<Row>	
			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        			
			        		</Col>

			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        			
			        		</Col >


			        		<Col xs={12} sm={6} lg={3}>
			        			<Teacher
			        				name="Alex Cion"
			        				university="Lehigh University"
			        				src={alex}
			        			/>
			        			
			        		</Col>

			        	</Row>
			        

			        </TabPane>
			    </Tabs>

			</div>
		)
	}
}

export default Team;