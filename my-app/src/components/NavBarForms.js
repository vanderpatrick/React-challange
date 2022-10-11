import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css";
import NavBarChild from './NavBarChild';

export class NavBarForms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: false,
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedin: prevState.isLoggedin ? false: true
        }),  () => console.log(this.state.isLoggedin));
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My gallery</h1>
                <NavBarChild 
                isLoggedin={this.state.isLoggedin}
                handleClick={this.handleClick}
                />
                {/* {this.state.isLoggedin ? (
                    <div>
                        <form>
                            <label>Username:</label>
                            <input></input>
                            <label>Password:</label>
                            <input></input>
                            <button>Submit</button>
                        </form>
                    </div>
                ) : (<button onClick={this.handleClick}>Log in</button>)} */}
            </div>
        )
    }
}

export default NavBarForms