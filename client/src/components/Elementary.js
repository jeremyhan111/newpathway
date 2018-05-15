import React from 'react';
import { Row, Col } from 'react-bootstrap';

import tree from './../images/scholartree.jpg'
import logo from './../images/scholartreelogo.png'

class Elementary extends React.Component {
	componentDidMount() {
	    window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="container">
				<img className="scholartree__img" src={tree}/>
				<Row>
					<Col xs={12} md={8}>
						<div className="scholartree__body">
							<h4 className="class__about">About Scholar Tree</h4>
							<p className="class__description">
								Scholar Tree is a top-notch English language school for Young Learners (YL) ages 6-12.
								We offer quality language education using highly effective teaching methods tested in United 
								States, Korea, and Europe. Scholar Tree's proprietary English learning system allows students, 
								parents, and teachers to better assess progress while at the same time providing a native 
								English speaking environment conducive to learning a second language. Scholar Tree's library 
								is one of a kind and rivals that of elementary schools in the United States. Scholar Tree's 
								curriculum is based on the California English Language Arts Content Standards.
								<br/><br/>
								EIC’s Scholar Tree programme offers families the opportunity to supplement the English language learning that takes 
								place in primary schools with international-style education.
								<br/><br/>
								Scholar Tree was founded in 2014 in Shanghai. In 2015 it has seen exciting growth over the past year with the opening 
								of its 2nd and 3rd campuses, and a total enrollment of over 4000 students in Shanghai.
								<br/><br/>
								Scholar Tree takes an experiential approach to teaching English, focusing not only on grammar, reading and writing, 
								but also on phonetics and social applications of language.  Offering eight successive levels of reading and writing 
								programmes, Scholar Tree helps students to build the strong English language foundations they will need for success 
								in English-language learning environments.
							</p>
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
}

export default Elementary;