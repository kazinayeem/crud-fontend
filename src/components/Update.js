import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'


const Update = () => {
    const [user, setuser] = useState({})

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:2020/${id}`)
            .then(res => res.json())
            .then(res => setuser(res.message))
            .catch(err => console.log(err))
    }, [])
    const { name, email } = user;
    const [update, setupdate] = useState({
        name: name,
        email: email
    })
    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setupdate({
            ...update,
            [name]: value
        })
    }

    const history = useHistory();
    const submit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:2020/${id}`, {
            name: update.name,
            email: update.email
        })

            .then(res => {
                history.push("/")
            })
            .catch(err => console.log(err))

    }
    return (
        <>
            <h3>update {id}</h3>
            <form onSubmit={submit}>

                <input
                    type="text"
                    name="name"
                    value={update.name}
                    onChange={change}
                />

                <br />
                <input
                    onChange={change}
                    type="text"
                    name="email"
                    value={update.email}
                />

                <br />
                <button type="submit">update</button>
            </form>



        </>
    )
}

export default Update