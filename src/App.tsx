import React, { useEffect, useState } from "react";
import ToDos from "./components/ToDos";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
	const [toDo, setToDo] = useState<{ _id: number; text: string }[]>([]);
	const [text, setText] = useState<string>("");
	const [isUpdating, setIsUpdating] = useState(false);
	const [toDoID, setToDoID] = useState<number>(0);

	useEffect(() => {
		getAllToDo(setToDo);
	}, []);

	const updateMode = (_id: number, text: string) => {
		setIsUpdating(true);
		setText(text);
		setToDoID(_id);
	};
	return (
		<div className='App'>
			<div className='constainer'>
				<h1>ToDo</h1>
				<div>
					<input
						type='text'
						placeholder='Add ToDos...'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<div
						className='add'
						onClick={() => {
							isUpdating
								? updateToDo(
										toDoID,
										text,
										setText,
										setToDo,
										setIsUpdating
								  )
								: addToDo(text, setText, setToDo);
						}}>
						{isUpdating ? "Update" : "Add"}
					</div>
				</div>
				<div className='list'>
					{toDo.map((item: { _id: number; text: string }) => (
						<ToDos
							key={item._id}
							text={item.text}
							updateMode={() => updateMode(item._id, item.text)}
							deleteMode={() => deleteToDo(item._id, setToDo)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
