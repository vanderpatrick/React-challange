import React from 'react'


function NavBarChild(props) {
  return (
    <div> {
      props.isLoggedin ? (
          <div>
              <form>
                            <label htmlFor='username'>Username:</label>
                            <input placeholder="username" id="username"></input>
                            <label htmlFor='password'>Password:</label>
                            <input placeholder='password' id='password'></input>
                            <button onClick={props.handleClick}>Submit</button>
                        </form>
          </div>
      ) : (
          <div>
          <button onClick={props.handleClick}>Sign in</button>
          </div>
      )
  }
    </div>
  )
}


export default NavBarChild