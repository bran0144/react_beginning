function FormComponent(props) {
    return (
        <main>
            <form>
                <input name="firstName" 
                    value={props.data.firstName}
                    onChnage={props.handleChange}
                    placeholder="First Name" /><br />
                <input name="lastName" 
                    value={props.data.lastName}
                    onChnage={this.handleChange}
                    placeholder="Last Name" /><br />
                <input name="age" 
                    value={props.data.age}
                    onChnage={this.handleChange}
                    placeholder="Age" /><br />
                
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"} 
                        onChange={props.handleChange}
                        />Male
                        </label>
            <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"} 
                        onChange={props.handleChange}
                        />Female
                        </label>
                <br />
                
                <select 
                    value={props.data.destination} 
                    name="destination" 
                    onChange={props.handleChange}
                >
                    <option value="">--Please choose a destination--</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="england">England</option>
                    <option value="ireland">Ireland</option>
                    </select>
                <br />
                
                <label> 
                    <input 
                        type="checkbox" 
                        name="isVegan" 
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isVegan}
                    /> Vegan?
                </label>
                <br />
                <label> 
                    <input 
                        type="checkbox" 
                        name="isKosher" 
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isKosher}
                    /> Kosher?
                </label>
                <br />
                <label> 
                    <input 
                        type="checkbox" 
                        name="isLactoseFree" 
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />
                
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent