import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name :"erfan",
        };
    }

    handleChange = (event) => {
        this.setState({name: event.target.value}); // merubah nilai state name setiap mengetik input
    };

    handleSubmit = (event) => {
        event.preventDefault();

        alert(this.state.name);
    }
    render() {
        return (
            <div style={{display:"flex", justifyContent:"center"}}>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    defaultValue={this.state.name}
                    />
                    <button type="submit">Masuk</button>
                </form>
            </div>
        )
    }
}
