import React, { Component } from 'react'
import axios from 'axios';
import Show from './Show';

  


export default class Add extends Component {
    state = {
        name: "",
        email: "",
        success: ""
    }

    onchangeHandeler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    update = () => {
        window.location.reload();
    }

    onSubmitHandeler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:2020", {
            name: this.state.name,
            email: this.state.email
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        ...this.state,
                        success: "user added"
                    })
                }
            })
            .catch(error => console.log(error))
        
    }
    render() {
        return (
            <div>

               
                {/* router close */}

                <form onSubmit={this.onSubmitHandeler}>

                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        placeholder="Enter your name"
                        onChange={this.onchangeHandeler}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.onchangeHandeler}
                        name="email"
                        placeholder="Enter your email"
                    />
                    <br />
                    <input onClick={this.update} type="submit" value="ADD USER" />
                    <p>{this.state.success}</p>
                </form>

                <Show></Show>
               

            </div>
        )
    }
}
