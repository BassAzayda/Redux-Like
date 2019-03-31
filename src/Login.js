import React from "react";
import { useStore } from "./store/useStore";

const Login = props => {
  const { state, dispatch } = useStore();


  return (
    <>
      <div className="container">
        <span>{state.user.loggedIn}</span>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                {JSON.stringify(state.user)}
                <input
                  placeholder="Placeholder"
                  type="text"
                  className="validate"
                  value={state.user.username}
                  onChange={e =>
                    dispatch({
                      type: "updateUsername",
                      payload: { username: e.target.value }
                    })
                  }
                />
                <label htmlFor="first_name">First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="password"
                  className="validate"
                  value={state.user.password}
                  onChange={e =>
                    dispatch({
                      type: "updatePassword",
                      payload: { password: e.target.value }
                    })
                  }
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
