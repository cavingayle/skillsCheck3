import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux'
import addUserToState from '../../ducks/reducer'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  register = () => {
    const { username, password } = this.state;
      axios.post("/auth/register", { username, password }).then((res) => {
        this.props.addUserToState(res.userId, res.usename)

      this.props.history.push("/dashboard");
    });
  };

    login = () => {
        const { username, password } = this.state;

        axios.post("/auth/login", { username, password })
            .then(res => {
                console.log('HEYY',res)
                // this.props.addUserToState(res.userId, res.username, )
                this.props.history.push("/login");

        })
 }   
    
    
  universalChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.universalChange(e)}
          name="username"
          type="text"
        />
        <input
          onChange={(e) => this.universalChange(e)}
          name="password"
          type="password"
        />
            <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default connect(null ,{addUserToState}) (Auth);
 