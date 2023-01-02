import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo: {
	(value: SetStateAction<{ _id: number; text: string }[]>): void;
	(arg0: any): void;
}) => {
	axios
		.get(baseUrl)
		.then(({ data }) => {
			console.log(data);
			setToDo(data);
		})
		.catch((err) => console.log(err));
};

const addToDo = (
	text: string,
	setText: Dispatch<SetStateAction<string>>,
	setToDo: Dispatch<SetStateAction<{ _id: number; text: string }[]>>
) => {
	console.log("addToDo");
	axios
		.post(`${baseUrl}/save`, { text })
		.then((data) => {
			console.log(data);
			setText("");
			getAllToDo(setToDo);
		})
		.catch((err) => console.log(err));
};

const updateToDo = (
	toDoID: number,
	text: string,
	setText: Dispatch<SetStateAction<string>>,
	setToDo: Dispatch<SetStateAction<{ _id: number; text: string }[]>>,
	setIsUpdating: Dispatch<SetStateAction<boolean>>
) => {
	console.log("updateToDo");
	axios
		.post(`${baseUrl}/update`, { _id: toDoID, text })
		.then((data) => {
			setText("");
			setIsUpdating(false);
			getAllToDo(setToDo);
		})
		.catch((err) => console.log(err));
};
const deleteToDo = (
	_id: any,
	setToDo: Dispatch<SetStateAction<{ _id: number; text: string }[]>>
) => {
	axios
		.post(`${baseUrl}/delete`, { _id })
		.then((data) => {
			console.log(data);
			getAllToDo(setToDo);
		})
		.catch((err) => console.log(err));
};
export { getAllToDo, addToDo, updateToDo, deleteToDo };
