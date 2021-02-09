import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    {/* <label>Mobile Number</label> */}
                    <input type="mobile number" className="form-control" placeholder="Mobile Number" />
                </div>

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <input type="otp" className="form-control" placeholder="OTP" />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    new <a href="./sign-up">register?</a>
                </p>
            </form>
        );
    }
}