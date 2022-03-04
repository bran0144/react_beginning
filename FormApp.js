import React, {Component} from "react"

class FormApp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favoritecolor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setstate({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                    />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                    />
                
                
                <textarea 
                    value={"Some default value"}
                    onChange={this.handleChange}
                    />
                <br />
                <label>
                <input 
                    type="checkbox" 
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                <input 
                    type="radio" 
                    name="gender"
                    male="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>Favorite Color:</label>
                <select 
                    value={this.state.favoritecolor}
                    onChange={this.handleChange}
                    name="favoriteColor"
                    >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <button>Submit</button>
            </form>

        )
    }
}

export default FormApp