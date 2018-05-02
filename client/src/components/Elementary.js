import React from 'react';
import { Row, Col } from 'react-bootstrap';

import tree from './../images/scholartree.jpg'
import logo from './../images/scholartreelogo.png'

const Elementary = () => {
	return (
		<div className="container">
			<img className="scholartree__img" src={tree}/>
			<Row>
				<Col xs={12} md={8}>
					<div className="scholartree__body">
						<h4 className="class__about">About Scholar Tree</h4>
						<p className="class__description">Scholar Tree is a top-notch English language school for Young Learners (YL) ages 6-12.
						We offer quality language education using highly effective teaching methods tested in United 
						States, Korea, and Europe. Scholar Tree's proprietary English learning system allows students, 
						parents, and teachers to better assess progress while at the same time providing a native 
						English speaking environment conducive to learning a second language. Scholar Tree's library 
						is one of a kind and rivals that of elementary schools in the United States. Scholar Tree's 
						curriculum is based on the California English Language Arts Content Standards.</p>
						<br/>

						<h4 className="class__about">Course description</h4>
						<p className="class__description"><b>Reading</b> focuses on expanding student's vocabulary and comprehension in order to better be able to read through the English books<br/><br/>

  						   <b>Writing</b> focuses on building students' grammar and composition so the student can communicate effectively through the written English language<br/><br/>

 						   <b>Speaking & Listening</b> focuses on active spoken communication with native English speakers</p>
					</div>
				</Col>
				<Col xs={12} md={4}>
					<img width="150px" src={logo}/><br/><br/>
					<a className="scholartree__url" href="http://www.scholartree.com">www.scholartree.com</a>
				</Col>
			</Row>
		</div>
	)
}

export default Elementary;