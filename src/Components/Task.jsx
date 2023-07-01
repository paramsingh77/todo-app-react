import React from 'react'
import './Task.css'
export default function Task({title,desc , deleteTask , index}) {
    return (
			<div className="flex item-conatiner">
				<div className="container task-conatiner">
					<div className="m-height">
						<h3>
							Title: <span>{title}</span>
						</h3>
					</div>
					<div className="m-height">
						<h3>
							Description: <span>{desc}</span>
						</h3>
					</div>
				</div>
				<div onClick={()=>deleteTask(index)} className="container button">Done</div>
			</div>
		);
}
