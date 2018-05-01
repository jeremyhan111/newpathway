import React from 'react';

import tree from './../images/scholartree.jpg'

const Elementary = () => {
	return (
		<div className="container">
			<img className="scholartree__img" src={tree}/>
			<div className="scholartree__body">
				<h4>ABOUT</h4>
				<p>Scholar Tree is a top-notch English language school for Young Learners (YL) ages 6-12.
				We offer quality language education using highly effective teaching methods tested in United 
				States, Korea, and Europe. Scholar Tree's proprietary English learning system allows students, 
				parents, and teachers to better assess progress while at the same time providing a native 
				English speaking environment conducive to learning a second language. Scholar Tree's library 
				is one of a kind and rivals that of elementary schools in the United States. Scholar Tree's 
				curriculum is based on the California English Language Arts Content Standards.</p>
				<p></p>
			</div>
		</div>
	)
}

export default Elementary;