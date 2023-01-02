import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const ToDos = (props: {
	text: string;
	updateMode: React.MouseEventHandler<SVGElement> | undefined;
	deleteMode: React.MouseEventHandler<SVGElement> | undefined;
}) => {
	return (
		<div>
			<div className='todo'>
				<div className='text'>{props.text}</div>
				<BiEdit className='icon' onClick={props.updateMode} />
				<AiFillDelete className='icon' onClick={props.deleteMode} />
			</div>
		</div>
	);
};
export default ToDos;
