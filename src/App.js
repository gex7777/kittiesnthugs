import React, { Component } from "react";

import { CardList } from "./components/card-list/cardList.component";
import "./App.css";
import { SearchField } from "./components/serachfield/searchField.component";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	handleChange = (event) => {
		this.setState({ searchField: event.target.value });
	};
	render() {
		const { monsters, searchField } = this.state;
		const filtered = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		);
		return (
			<div className="App">
				<h1>Kitties And Thugs</h1>
				<SearchField
					type="search"
					placeholder="search cats"
					handleChange={this.handleChange}
				/>

				<CardList monsters={filtered} />
			</div>
		);
	}
}
export default App;
