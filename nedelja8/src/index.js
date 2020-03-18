import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            number: "",
            phoneBook: [],
            nameExistsForm: false,
            fields: false
        }

        this.handleInputName = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        this.handleInputNumber = (event) => {
            this.setState({
                number: event.target.value
            })
        }

        this.addContact = () => {

            const newContact = {
                name: this.state.name,
                number: this.state.number
            }

            if (this.state.name === "" || this.state.number === "") {
                this.setState(
                    { fields: !this.state.fields }
                )
                return;
            }

            if (this.state.phoneBook.find(el => el.name === this.state.name)) {
                this.setState(
                    { nameExistsForm: !this.state.nameExistsForm }
                )
                this.changeName=()=>{
                    this.setState({
                        
                    })
                }
                return
            }


            this.setState((prevState) => ({
                phoneBook: prevState.phoneBook.concat(newContact),
                name: "",
                number: ""
            }))
            
            
            // this.searchContact = (e) => {
            //     const inputValue = e.target.value;
            //     const filteredContacts = this.phoneBook.filter(cont => cont.name.toLowerCase().includes(inputValue.toLowerCase()));
            //     this.setState(
            //         {
            //             phoneBook: filteredContacts
            //         }
            //     )
            // }
        }
        
        
       
    }
    console.log(this.name);
    render() {
        let nameExists = null;
        if (this.state.nameExistsForm) {
            nameExists = (
                <div className="name-exist-form">
                    <p>Contact {this.state.name} already exists. Do you want to change number?</p>
                    <button className="Yes" onClick={this.changeName}>Yes</button>
                    <button className="No" onClick={this.addContact}>No</button>
                </div>
            )
        }
        let emptyField = null;
        if (this.state.fields) {
            emptyField = (
                <div className="filed">
                    <p>Both fields are required.</p>
                </div>
            )
        }

        return (
            <div className="Wrapper">
                <h2 className="header">PhoneBook</h2>
                <div className="container">
                    <form className="form">
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.handleInputName} value={this.state.name} placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.handleInputNumber} value={this.state.number} placeholder="Number" pattern="[+]{1}[0-9]{3}-[0-9]{9}"
                                required />
                        </div>
                        <button className="btnSubmit" onClick={this.addContact}>Submit</button>
                    </form>
                    <div className="search">
                        <input className="input-search" type="text" placeholder="Search contact" onChange={this.searchContact}></input>
                    </div>
                </div>
                {emptyField}
                {nameExists}

                {this.state.phoneBook.map(contact =>
                    <div className="contacts">
                        <h4>{contact.name}</h4>
                        <p>{contact.number}</p>
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
