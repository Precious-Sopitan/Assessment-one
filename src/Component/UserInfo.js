import React from "react";
import { Component } from "react";
import {UserInfo} from './Component/UserInfo'

   
class App extends Component {
    state = {
      person: [
          { Firstname: "Precious"},
          { Secondname: "Abolade" },
          { emailAddress: "SopitanPrecious1@gmail.com" },
          { phoneNumber: "1234" },
      ],
    };
    onClickHandler = () => {
      this.setState({
        person: [
          { Firstname: "Precious"},
          { Secondname: "Abolade" },
          { emailAddress: "SopitanPrecious1@gmail.com" },
          { phoneNumber: "1234" },
        ],
      });
    };
  
    onClickHandlerTwo = (event) => {
      this.setState({
        person: [
          { Firstname: "Precious"},
          { Secondname: "Abolade" },
          { emailAddress: "SopitanPrecious1@gmail.com" },
          { phoneNumber: "1234" },
        ],
      });
    };
  
  
  
  
    render() {
      return (
        <div className="App">
          <Person
            name={this.state.person[0].name}
            
          />
          <Person name={this.state.person[1].name} clicking={this.onClickHandlerTwo}>
           
          </Person>
          <Person name={this.state.person[2].name} />
          <button onClick={this.onClickHandler}>Change</button>
  
          <Event />
        </div>
      );
    }
  }
  export default App;
  