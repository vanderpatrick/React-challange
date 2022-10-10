import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Hello, Guest!",
            btn: "log in"
        }
    }

//    handleClick() {
//     this.setState((prevState) => {
//         return {
//             name: prevState.name === "Hello, Guest!" ? "Welcome back, user!" : "Hello, Guest!",
//             btn: prevState.btn === "log in" ? "log out" : "log in"
//         }
//     })
// }
    handleClick = () => {
        this.setState((prevState) => ({
            name: prevState.name === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            btn: prevState.btn === "Log out" ? "Log in" : "Log out",
        }), ()=> console.log(this.state.name))
    }

    render() {
        return(
            <div className={css.NavBar}>
                <h1>My gallery</h1>
                <div>
                    <span>{this.state.name}</span>
                    <button onClick={() => this.handleClick()}>{this.state.btn}</button>
                </div>
            </div>
        ); 
    }
}

export default NavBarSimple;