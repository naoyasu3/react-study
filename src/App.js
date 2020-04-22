import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "nao", age: 25 },
      { name: "kahooooo", age: 24 },
      { name: "rio", age: 22 },
    ],
    otherState: "some other value",
  };

  seitchNameHandler = () => {
    //Don't DO this!!: fthis.state.persons[0].name = "naooooooooo!!!!";
    this.setState({
      persons: [
        { name: "naooooo", age: 25 },
        { name: "kahooooo", age: 24 },
        { name: "rio", age: 22 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This really working!</p>
        <button onClick={this.seitchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Mt Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
