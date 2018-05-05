import React, { Component } from 'react';
import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import { Row, Col } from 'react-bootstrap';

import Teacher from './Teacher';
import alex from './../images/alex.jpg';
import pete from './../images/pete.jpg';
import charles from './../images/charles.jpg';
import kirk from './../images/kirk.jpg';
import sandy from './../images/sandy.jpg';

class Team extends Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<div className="team__intro">
							<h1 className="team__header"><b>TEAM</b></h1>
							<p className="team__subheader">Our experienced team of teachers and consultants hail from top schools such as UCLA, 
							   Univeristy of Chicago, George Washington, Lehigh, Washington University in St. Louis, Claremont McKenna, and Swarthmore.
							   They have helped hundreds of students earn their goal scores and gain admission to their dream schools.
							 </p>
						</div>
					</Col>
				</Row>

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
			        				degree="BA Political Science"
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