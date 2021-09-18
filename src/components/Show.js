import React, { Component } from 'react'
import axios from "axios"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


export default class Show extends Component {
    state = {
        data: [],
        delete: ""
    }
    componentDidMount() {
        axios
            .get("http://localhost:2020")
            .then(res => this.setState({
                ...this.state,
                data: res.data.message
            }))
            .catch(err => console.error(err));
    }


    delete = (id) => {
        axios
            .delete(`http://localhost:2020/${id}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    delete: "delete successfull"
                })
            })
            .catch(err => console.error(err));
        window.location.reload();
    }
    render() {

        return (
            <>

               
                <div className="container">
                    <h1>ALl user {this.state.data.length}</h1>
                    {
                        this.state.data.map((data) => (
                            <div key={data._id}>
                                <ul >
                                    <li>ID : {data._id}</li>
                                    <li>Name : {data.name}</li>
                                    <li>Name : {data.email}</li>
                                    <a href={data._id}>Update</a>
                                    <button onClick={() => this.delete(data._id)}>Delete</button>
                                </ul>
                            </div>
                        ))
                    }

                    {this.state.delete}
                </div>


            </>
        )
    }
}
