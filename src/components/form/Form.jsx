import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component{
    state = {
        name: '',
        number: '',
    }
    
    idName = nanoid();
    idNumber = nanoid();

    handleChange = (evt) => {
        const { name, value } = evt.currentTarget;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.idName}>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        id={this.idName}
                    />
                </label>
                <label htmlFor={this.idNumber}>Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        id={this.idNumber}
                    />
                </label>
                <button type='submit'>Add contact</button>
            </form>
        )
    }

}