import React from 'react';
import {useHistory} from 'react-router-dom';
import {CgClose, CgInfo} from 'react-icons/cg';

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	const history = useHistory();
	const handleTaskDetailsClick = () => {
		history.push(`/${task.title}`)
	}

	return ( 
		<div className="task-container" 
		style={task.completed ? {borderLeft: '6px solid #fff'} : {}}>
			
			<div className="task-title" onClick={() => handleTaskClick(task.id)}>
				{task.title}
			</div>
			<div className="buttons-container">

				<button className="see-task-details-button"
				onClick={handleTaskDetailsClick} 
				><CgInfo/></button>

				<button className="remove-task-button" 
				onClick={() => handleTaskDeletion(task.id)}><CgClose/></button>
			</div>
		</div>

		);
}

export default Task;