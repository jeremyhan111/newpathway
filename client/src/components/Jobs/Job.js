import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class Job extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<div className="job">
				<button className="job__link" onClick={this.handleShow}>
					<h3 className="job__title">{this.props.title}</h3>
					<h4 className="job__location">{this.props.location}</h4>
				</button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
		            	<Modal.Title>{this.props.title}</Modal.Title>
		          	</Modal.Header>

		          	<Modal.Body>
			            <h4>Who We're Looking For</h4>
			            <p>
			            	{this.props.lookingFor}
			            </p>

			            <hr/>

			            <h4>Responsibilities</h4>
			            <p>
			            	{this.props.responsibilities}
			            </p>

			            <hr/>

						<h4>Requirements</h4>
						<p>
			            	{this.props.requirements}
			            </p>

			            <hr/>

			           	<p>Please send your resume to newpathway@gmail.com if you are interested in applying to this position.</p>


		            </Modal.Body>



			        <Modal.Footer>
			            <Button onClick={this.handleClose}>Close</Button>
			        </Modal.Footer>
				</Modal>

			</div>



		)

	}

	
}

export default Job;