import React, { Component } from "react";
import Login from "./login";
// import {FirebaseContext} from "../../Firebase/context";
import FirebaseContext  from "../../Firebase/firebaseContext";
class LoginPage extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {(firebase) => {
                    return <Login firebase={firebase} />;
                }}
            </FirebaseContext.Consumer>
        );
    }
}

export default LoginPage;
