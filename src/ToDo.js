import React, { Component } from 'react';
import logo from './logo.svg';

const Title = ({ title }) => {
	return (
		<div style={{
			height: "100px",
			width: "100%",
			backgroundColor: "white",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
			{title}
		</div>
	);
}

const InputBox = ({ onClickButton }) => {
	return (
		<div style={{
			height: "100px", width: "100%",
			backgroundColor: "blue",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<div style={{
				height: "100px", width: "80%",
				backgroundColor: "blue",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<input style={{padding:"10px"}} />
			</div>

			<div style={{
				height: "100px", width: "20%",
				backgroundColor: "red",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<button onClick={(event) => onClickButton(event)} >Add Item</button>
			</div>
		</div>
	);
}

const ItemRow = ({ item, onDeleteItem }) => {
	return (
		<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			<input type="checkBox" checked={item.isChecked}/>
			<p>{item.text}</p>
			<button onClick={() => onDeleteItem(item.id)} >Delete Item</button>
		</div>
	);
}

const ToDoItemsContainer = ({ items, onDeleteItem }) => {
	return items && Array.isArray(items) && items.length > 0 ? (
		<div>
			{items.map(i => (<ItemRow key={i.id} item={i} onDeleteItem={onDeleteItem}/>))}
		</div>
	) : null;
}

const rowItems = [{
	id: 1,
	text: "Sample row",
	isChecked: true
},
{
	id: 2,
	text: "Sample row",
	isChecked: false
},
{
	id: 3,
	text: "Sample row",
	isChecked: false
}];

class ToDo extends Component {
	constructor() {
		super();
		this.state = {
			todoItems: rowItems
		};
	}

	handleInputBoxButton = (event) => {
		this.setState({ rowText: event.target.value });
	} 

	onDeleteItem = (id) => {
		console.log(id);
	}

	render() {
		return (
			<div style={{ height: "1000px", width: "100%", backgroundColor: "lightgray" }}>
				<Title title="To Do List" />
				<InputBox onClickButton={this.handleInputBoxButton}/>
				<ToDoItemsContainer items={this.state.todoItems} onDeleteItem={this.onDeleteItem}/>
			</div>
		);
	}
}

export default ToDo;
