import './Home.css'
import React,{useState} from 'react'
import Task from './Task';
import { useEffect } from 'react';



export default function Home() {

  const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, desc }]);
    
  };

  const deleteTask = (index) => {
    const filtering =  task.filter((val,i) => {
      return i !== index;
    })
    
    setTask(filtering);
  } 

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  })

  return (
		<>
			<div className="main-section container">
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
					<textarea
						placeholder="Description"
						value={desc}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
					></textarea>

					<button className="submit-button">
						<h3 id="h3">Save</h3>
					</button>
				</form>
			</div>

			{task.map((item, index) => (
				  <Task key={index} title={item.title} desc={item.desc} deleteTask = {deleteTask} index={index} />
			))};
		</>
	);
}
