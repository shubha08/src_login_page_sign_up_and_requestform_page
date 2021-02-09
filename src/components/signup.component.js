import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    {/* <label>First name</label> */}
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    {/* <label>Mobile Number</label> */}
                    <input type="number" className="form-control" placeholder="Mobile Number" />
                </div>

                <div className="form-group">
                    {/* <label>Email</label> */}
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="next" className="btn btn-dark btn-lg btn-block" >
                <a href="./request-form">Next</a>
                    </button>
                
            </form>
        );
    }
}