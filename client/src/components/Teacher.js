import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';


const Teacher = (props) => {
	const popoverHoverFocus = (
		<Popover id="popover-trigger-focus" title={props.name}>
		    <strong>{props.university}</strong>
		</Popover>
	);

	return (
		<div class="teacher">
			<OverlayTrigger
		        trigger={['hover', 'focus']}
		        placement="bottom"
		        overlay={popoverHoverFocus}
		    >
		    	<img className="teacher__img" src={props.src}/>
		    </OverlayTrigger>
			
		</div>
	)
}

export default Teacher;